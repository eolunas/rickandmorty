import { useState, useEffect } from "react";
import { getData } from "../../services/axiosService";
import Spinner from "react-bootstrap/Spinner";
import CharacterCard from "../../components/container/CharacterCard";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const [characters, setCharacters] = useState(null);

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

  return (
    <Container fluid>
      <Row className="row-cols-auto justify-content-center">
        {characters != null ? (
          characters.map((character, key) => {
            return (
              <Col key={key} className='m-3'>
                <CharacterCard data={character} show={false} />
              </Col>
            );
          })
        ) : (
          <Spinner animation="grow" />
        )}
      </Row>
    </Container>
  );
};

export default Home;
