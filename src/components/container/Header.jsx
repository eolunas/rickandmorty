// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import rmLogo from "/rickandmorty.svg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <header>
      <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand as={Link} to="/rickandmorty/">
            <img
              src={rmLogo}
              alt="rickandmorty"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
            <span> Rick and Morty</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="collapse navbar-collapse">
            <Nav
              className="justify-content-end flex-grow-1 pe-3"
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link as={Link} to="/rickandmorty/favourites">
                Favourites
              </Nav.Link>
              <Nav.Link as={Link} to="/rickandmorty/about">
                About
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Select aria-label="Default select example">
                <option>Filter by</option>
                <option value="name">Name</option>
                <option value="species">Species</option>
                <option value="status">Status</option>
                <option value="gender">Gender</option>
              </Form.Select>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{height: "4rem"}}></div>
    </header>
  );
};

// Header.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
//   icon: PropTypes.string.isRequired,
// };

export default Header;
