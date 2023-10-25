import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getData } from "../../services/axiosService";

const Character = ({ id }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    obtainCharacter();
  }, [id]);

  const obtainCharacter = () => {
    return getData(id)
      .then((rta) => {
        if (rta.status === 200) setCharacter(rta.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {character != null && (
        <div className="Character-inner">
          <article className="Character-card">
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </article>
          <article className="Character-card">
            <h3>
              Episodes: <span>{character.episode.length}</span>
            </h3>
            <h3>
              Status: <span>{character.status}</span>
            </h3>
            <h3>
              Species: <span>{character.species}</span>
            </h3>
            <h3>
              Gender: <span>{character.gender}</span>
            </h3>
            <h3>
              Origin: <span>{character.origin.name}</span>
            </h3>
            <h3>Last location: {character.location.name}</h3>
          </article>
        </div>
      )}
    </>
  );
};

Character.propTypes = {
  id: PropTypes.string,
};

export default Character;
