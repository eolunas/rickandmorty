import { useState, useEffect, useRef } from "react";
import { getDataPage } from "../../services/axiosService";
import Spinner from "react-bootstrap/Spinner";
import CharacterCard from "../../components/container/CharacterCard";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const [characters, setCharacters] = useState(null);
  const [page, setPage] = useState(1);
  const [charger, setCharger] = useState(true);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting && charger) {
        obtainCharacters();
      }
    });
    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, [characters]);

  const obtainCharacters = () => {
    return getDataPage(page)
      .then((rta) => {
        if (rta.status === 200) {
          setCharacters((prevData) => {
            if (!prevData) return rta.data.results;
            else return [...prevData, ...rta.data.results];
          });
          setPage((prevPage) => prevPage + 1);
          if (rta.data.info.next == null) setCharger(false);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container fluid>
      <Row className="row-cols-auto justify-content-center">
        {characters != null ? (
          characters.map((character, key) => {
            return (
              <Col key={key} className="m-3">
                <CharacterCard data={character} show={false} />
              </Col>
            );
          })
        ) : (
          <Spinner animation="grow" />
        )}
      </Row>
      {charger && (
        <div className="d-flex justify-content-center">
          <Spinner ref={elementRef} animation="grow" />
        </div>
      )}
    </Container>
  );
};

export default Home;
