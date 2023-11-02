// import PropTypes from "prop-types";
import rmLogo from "/rickandmorty.svg";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CustomModal from "./CustomModal";

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
          <Navbar.Collapse id="navbarScroll">
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/rickandmorty/characters">
                Characters
              </Nav.Link>
              <Nav.Link as={Link} to="/rickandmorty/favourites">
                Favourites
              </Nav.Link>
              <Nav.Link as={Link} to="/rickandmorty/location">
                Locations
              </Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="https://github.com/eolunas/rickandmorty"
                  target="_blank"
                >
                  Repository
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://rickandmortyapi.com/documentation"
                  target="_blank"
                >
                  API Docs
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/rickandmorty/about">
                  About project
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button
              variant="outline-success"
              onClick={() => alert("Open modal")}
            >
              Filters
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ height: "4rem" }}>
        <CustomModal />
      </div>
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

{
  /* TODO: Make the filter modal !! 
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
</Form>; */
}
