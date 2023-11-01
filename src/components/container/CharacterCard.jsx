import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Badge, Card, Col, ListGroup } from "react-bootstrap";

function CharacterCard({ data, storageToggle }) {
  const [open, setOpen] = useState(false);
  const handleShow = () => setOpen((prevOpen) => !prevOpen);

  return (
    <Col className="m-3">
      {
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={data.image} alt={data.name} />
          <Card.Body
            style={{ minHeight: "7.2rem" }}
            className="d-flex justify-content-between align-items-center"
          >
            <div style={{ flexBasis: "85%" }}>
              <Card.Title>
                <strong>{data.name}</strong>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {data.species}
              </Card.Subtitle>
            </div>
            <Button
              onClick={() => handleShow()}
              variant={!open ? "outline-success" : "outline-warning"}
              style={{ minWidth: "3rem" }}
            >
              {!open ? <strong>+</strong> : <strong>-</strong>}
            </Button>
          </Card.Body>
          {open && (
            <ListGroup className="list-group-flush ">
              <ListGroup.Item>
                <span>
                  <strong>Episodes</strong> : {data.episode.length}
                </span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>
                  <strong>Status</strong> : {data.status}
                </span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>
                  <strong>Gender</strong> : {data.gender}
                </span>
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  minHeight: "4.3rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span>
                  <strong>Origin</strong> : {data.origin.name}
                </span>
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  minHeight: "4.3rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span>
                  <strong>Last location</strong> : {data.location.name}
                </span>
              </ListGroup.Item>
              <Button
                onClick={() => storageToggle()}
                variant={data.isStored ? "outline-danger" : "outline-success"}
              >
                {data.isStored ? "Remove from favourites" : "Add to favourites"}
              </Button>
            </ListGroup>
          )}
        </Card>
      }
    </Col>
  );
}

CharacterCard.propTypes = {
  data: PropTypes.object,
  storageToggle: PropTypes.func.isRequired,
};

export default CharacterCard;
