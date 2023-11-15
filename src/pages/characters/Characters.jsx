import { useContext, useEffect, useRef, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { getDataPage } from "../../services/axiosService";
import { FilterContext } from "../../utils/context";
import useFavoriteStorage from "../../hooks/useFavoriteStorage";
import CharacterCard from "../../components/container/CharacterCard";
import ShadowCard from "../../components/pure/ShadowCard";
import useOnScreen from "../../hooks/useOnScreen";

const Characters = () => {
  const [filters] = useContext(FilterContext);
  const [items, toggleItem] = useFavoriteStorage("R&M-Characters");

  const endOfList = useRef(null);
  const isOnScreen = useOnScreen(endOfList);

  const [characters, setCharacters] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (isOnScreen && hasNextPage) {
      getDataPage(filters, page)
        .then((data) => {
          setCharacters((prevData) => {
            if (!prevData) return data.results;
            else return [...prevData, ...data.results];
          });
          setPage((prevPage) => prevPage + 1);
          if (data.info.next == null) setHasNextPage(false);
        })
        .catch((error) => {
          console.log(error);
          setHasNextPage(false);
        });
    }
  }, [isOnScreen]);

  useEffect(() => {
    setPage(1);
    setHasNextPage(true);
    setCharacters(null);
  }, [filters]);

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
      <div
        className={`${
          hasNextPage ? "d-flex" : "d-none"
        } justify-content-center`}
      >
        <Spinner ref={endOfList} animation="grow" />
      </div>
    </Container>
  );
};

export default Characters;
