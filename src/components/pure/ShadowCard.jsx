import { Card, Col, Placeholder } from "react-bootstrap";

const ShadowCard = () => {
  return (
    <Col className="m-3">
      <Card style={{ width: "18rem" }}>
        <Placeholder as={Card.Header} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="secondary" xs={6} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ShadowCard;
