import {
  Accordion,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import portadeImg from "../../assets/Rick_and_Morty_Home.jpg";
import titleImg from "../../assets/Rick_and_Morty.png";

const Home = () => {
  return (
    <Container>
      <Row
        className="align-items-center"
        style={{ height: "calc(100vh - 3.6rem)" }}
      >
        <Col
          xs={12}
          md={5}
          style={{
            borderStyle: "solid",
            borderColor: "blue",
            maxHeight: "100%",
          }}
        >
          <Card>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "300px",
              }}
            >
              <Card.Img
                src={portadeImg}
                alt="rick and morty portade"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <strong>Genre:</strong>{" "}
                <span>
                  Animated sitcom, Adventure, Black comedy, Satire Science
                  fiction.
                </span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Created by: </strong>
                <span>Justin Roiland, Dan Harmon</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Voices of:</strong>
                <span>Justin Roiland</span>
                <span>Chris Parnell</span>
                <span>Spencer Grammer</span>
                <span>Sarah Chalke</span>
                <span>Ian Cardoni</span>
                <span>Harry Belden</span>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <ListGroup.Item>
                <strong>Composer:</strong>
                <span>Ryan Elder</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Country of origin:</strong>
                <span>United States</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Original language:</strong>
                <span>English</span>
              </ListGroup.Item>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          md={7}
          style={{
            borderStyle: "solid",
            borderColor: "red",
            maxHeight: "100%",
            overflowY: "scroll",
          }}
        >
          <Card>
            <Card.Header>
              <Card.Img
                variant="top"
                src={titleImg}
                alt="rick and morty title"
              />
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <Card.Text>
                  Rick and Morty is an American adult animated science fiction
                  sitcom created by Justin Roiland and Dan Harmon for Cartoon
                  Network{"'"}s nighttime programming block Adult Swim. The
                  series follows the misadventures of Rick Sanchez, a cynical
                  mad scientist, and his good-hearted but fretful grandson Morty
                  Smith, who split their time between domestic life and
                  interdimensional adventures that take place across an infinite
                  number of realities, often traveling to other planets and
                  dimensions through portals and on Rick{"'"}s flying saucer.
                  The general concept of Rick and Morty relies on two
                  conflicting scenarios: domestic family drama, and a
                  misanthropic grandfather dragging his grandson into hijinks.
                </Card.Text>
              </Card.Text>
            </Card.Body>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
