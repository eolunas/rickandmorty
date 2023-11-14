import { useEffect, useRef, useState } from "react";
import { getDataPage } from "../../services/axiosService";
import CharacterCard from "../../components/container/CharacterCard";
import ShadowCard from "../../components/pure/ShadowCard";
import useFavoriteStorage from "../../hooks/useFavoriteStorage";
import { Container, Row, Spinner } from "react-bootstrap";
import useOnScreen from "../../hooks/useOnScreen";

const Characters = () => {
  const [items, toggleItem] = useFavoriteStorage("R&M-Characters");

  const endOfList = useRef(null);
  const isOnScreen = useOnScreen(endOfList);

  const [characters, setCharacters] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (hasNextPage) {
      getDataPage(page)
        .then((rta) => {
          if (rta.status === 200) {
            setCharacters((prevData) => {
              if (!prevData) return rta.data.results;
              else return [...prevData, ...rta.data.results];
            });
            setPage((prevPage) => prevPage + 1);
            if (rta.data.info.next == null) setHasNextPage(false);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [isOnScreen]);

  return (
    <Container fluid>
      <Row className="row-cols-auto justify-content-center">
        {characters != null ? (
          characters.map((character, key) => {
            character.isStored = items.includes(character.id);
            return (
              <CharacterCard
                key={key}
                data={character}
                storageToggle={() => toggleItem(character.id)}
              ></CharacterCard>
            );
          })
        ) : (
          <ShadowCard />
        )}
      </Row>
      {hasNextPage && (
        <div className="d-flex justify-content-center">
          <Spinner ref={endOfList} animation="grow" />
        </div>
      )}
    </Container>
  );
};

export default Characters;
