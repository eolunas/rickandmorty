import { useEffect, useState } from "react";
import { getDataPage } from "../../services/axiosService";
import CharacterCard from "../../components/container/CharacterCard";
import CardsContainer from "../../components/container/CardsContainer";
import ShadowCard from "../../components/pure/ShadowCard";
import useFavoriteStorage from "../../hooks/useFavoriteStorage";

const Characters = () => {
  const [items, addItem, removeItem] = useFavoriteStorage("R&M-Characters");

  const [characters, setCharacters] = useState(null);
  const [loadingData, setLoadingData] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [page, setPage] = useState(1);

  // Load character by consuming the API
  useEffect(() => {
    if (loadingData) {
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
      setLoadingData(false);
    }
  }, [loadingData]);

  // handle the favourites character
  const handleStorage = (id) => {
    if (!items.includes(id)) {
      addItem(id);
    } else {
      removeItem(id);
    }
  };

  return (
    <CardsContainer
      hasNextPage={hasNextPage}
      setLoadingData={() => setLoadingData(true)}
    >
      {characters != null ? (
        characters.map((character, key) => {
          character.isStored = items.includes(character.id);
          return (
            <CharacterCard
              key={key}
              data={character}
              storageToggle={() => handleStorage(character.id)}
            ></CharacterCard>
          );
        })
      ) : (
        <ShadowCard />
      )}
    </CardsContainer>
  );
};

export default Characters;
