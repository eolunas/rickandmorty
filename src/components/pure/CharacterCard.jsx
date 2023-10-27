import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import { getData } from "../../services/axiosService";
import { ListGroup } from "react-bootstrap";

function CharacterCard({ id }) {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    obtainCharacter();
  }, [id]);

  const obtainCharacter = () => {
    return getData(id)
      .then((rta) => {
        console.log(rta.data);
        if (rta.status === 200) setCharacter(rta.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {character != null ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={character.image} />
          <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {character.species}
            </Card.Subtitle>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Episodes: <span>{character.episode.length}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Status: <span>{character.status}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Gender: <span>{character.gender}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Origin: <span>{character.origin.name}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Last location: {character.location.name}
            </ListGroup.Item>
          </ListGroup>
          <Button variant="primary">More info</Button>
        </Card>
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
          </Card.Body>
        </Card>
      )}
    </>
  );
}

CharacterCard.propTypes = {
  id: PropTypes.string,
};

export default CharacterCard;
