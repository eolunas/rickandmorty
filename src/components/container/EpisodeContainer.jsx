import PropTypes from "prop-types";
import { Accordion, Badge, Button } from "react-bootstrap";

const EpisodeContainer = ({ episode }) => {
  const characterStyle = {
    borderStyle: "solid",
    borderWidth: "0 0 1px 0",
    borderColor: "#dee2e6",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <Accordion.Item eventKey={episode.id}>
      <Accordion.Header>
        <Badge className="p-2" pill bg="light" text="dark">
          {episode.episode}
        </Badge>
        {episode.name}
      </Accordion.Header>
      <Accordion.Body className="p-0">
        <div style={characterStyle}>
          <div>
            <img
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="character profile"
              style={{ width: "60px", borderRadius: "50%" }}
            />
            <span> Character 01</span>
          </div>
          <Button variant="outline-success">Add</Button>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

EpisodeContainer.propTypes = {
  episode: PropTypes.object.isRequired,
};

export default EpisodeContainer;
