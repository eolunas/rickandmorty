import PropTypes from "prop-types";
import { Accordion, Badge } from "react-bootstrap";
import CharacterContainer from "./CharacterContainer";
import { useState } from "react";
import { getData } from "../../services/axiosService";

const EpisodeContainer = ({ episode }) => {
  const [characters, setCharacters] = useState(null);

  const showCharacters = async () => {
    if (!characters)
      await getData(episode.characters)
        .then((res) => {
          if (res.status === 200) {
            setCharacters(res.data);
          }
        })
        .catch((error) => console.log(error));
  };

  return (
    <Accordion.Item eventKey={episode.id} onClick={() => showCharacters()}>
      <Accordion.Header>
        <Badge className="p-2" pill bg="light" text="dark">
          {episode.episode}
        </Badge>
        <span style={{ marginLeft: "15px" }}>{episode.name}</span>
      </Accordion.Header>
      <Accordion.Body className="p-0">
        {characters != null &&
          characters.map((character, index) => {
            return <CharacterContainer key={index} info={character} />;
          })}
      </Accordion.Body>
    </Accordion.Item>
  );
};

EpisodeContainer.propTypes = {
  episode: PropTypes.object.isRequired,
};

export default EpisodeContainer;
