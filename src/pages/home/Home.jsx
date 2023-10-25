import { useState, useEffect } from "react";
import { getData } from "../../services/axiosService";

const Home = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    obtainCharacter();
  }, []);

  const obtainCharacter = () => {
    return getData()
      .then((rta) => {
        if (rta.status === 200) setCharacters(rta.data.results);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="Characters">
      {characters != null &&
        characters.map((character, key) => {
          return (
            <article key={key} className="Character-item">
              <a href={`#/${character.id}/`}>
                <img src={character.image} alt={character.name} />
                <h2>{character.name}</h2>
              </a>
            </article>
          );
        })}
    </div>
  );
};

export default Home;
