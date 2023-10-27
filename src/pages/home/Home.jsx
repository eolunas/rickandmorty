import { useState, useEffect } from "react";
import { getData } from "../../services/axiosService";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import './Home.css'

const Home = () => {
  const [characters, setCharacters] = useState(null);
  const navigate = useNavigate();

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

  const navigateTo = (id) => {
    navigate(`/rickandmorty/character/${id}`);
  };

  return (
    <div className="characters-container">
      {characters != null ? (
        characters.map((character, key) => {
          return (
            <article key={key} className="Character-item">
              <div onClick={() => navigateTo(character.id)}>
                <img src={character.image} alt={character.name} />
                <h2>{character.name}</h2>
              </div>
            </article>
          );
        })
      ) : (
        <Spinner animation="grow" />
      )}
    </div>
  );
};

export default Home;
