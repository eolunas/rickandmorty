import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getData } from "../../services/axiosService";
import CharacterCard from "../../components/pure/CharacterCard";

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
    <div className="p-3">
      {character != null && <CharacterCard data={character} show={true} />}
    </div>
  );
};

Character.propTypes = {
  id: PropTypes.string,
};

export default Character;
