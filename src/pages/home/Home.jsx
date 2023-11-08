import {
  Accordion,
  Card,
  Col,
  Container,
  ListGroup,
  Nav,
  Row,
} from "react-bootstrap";
import portadeImg from "../../assets/Rick_and_Morty_Home.jpg";
import titleImg from "../../assets/Rick_and_Morty.png";
import { useState } from "react";

const Home = () => {
  const [cardInfo, setCardInfo] = useState(0);

  return (
    <Container>
      <Row className="align-items-start my-3">
        <Col xs={12} md={5}>
          <Card>
            <Card.Img src={portadeImg} alt="rick and morty portade" />
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#genre">
                <Nav.Item>
                  <Nav.Link href="#genre" onClick={() => setCardInfo(0)}>
                    Description
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#moreinfo" onClick={() => setCardInfo(1)}>
                    More info
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            {cardInfo == 0 && (
              <Card.Body>
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
              </Card.Body>
            )}
            {cardInfo == 1 && (
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Card.Title>Genre</Card.Title>
                  <Card.Text>
                    Animated sitcom, Adventure, Black comedy, Satire Science
                    fiction.
                  </Card.Text>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Card.Title>Created by</Card.Title>
                  <Card.Text>Justin Roiland, Dan Harmon</Card.Text>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Card.Title>Voices of</Card.Title>
                  <Card.Text>
                    Justin Roiland, Chris Parnell, Spencer Grammer, Sarah
                    Chalke, Ian Cardoni, Harry Belden.
                  </Card.Text>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Card.Title>Composer</Card.Title>
                  <Card.Text>Ryan Elder</Card.Text>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Card.Title>Country of origin</Card.Title>
                  <Card.Text>United States</Card.Text>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Card.Title>Original language</Card.Title>
                  <Card.Text>English</Card.Text>
                </ListGroup.Item>
              </ListGroup>
            )}
          </Card>
        </Col>
        <Col xs={12} md={7}>
          <Card>
            <img
              src={titleImg}
              alt="rick and morty title"
              style={{ width: "100%", padding: "3% 10%" }}
            />
          </Card>

          <Accordion>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
