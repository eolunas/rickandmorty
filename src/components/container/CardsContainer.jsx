import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { Container, Row, Spinner } from "react-bootstrap";

const CardsContainer = ({ children, hasNextPage, setLoadingData }) => {
  const endOfList = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting) {
        setLoadingData();
      }
    });
    if (observer && endOfList.current) {
      observer.observe(endOfList.current);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <Container fluid>
      <Row className="row-cols-auto justify-content-center">{children}</Row>
      {hasNextPage && (
        <div className="d-flex justify-content-center">
          <Spinner ref={endOfList} animation="grow" />
        </div>
      )}
    </Container>
  );
};

CardsContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  hasNextPage: PropTypes.bool.isRequired,
  setLoadingData: PropTypes.func.isRequired,
};

export default CardsContainer;
