// import PropTypes from "prop-types";
import rmLogo from "/rickandmorty.svg";
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  Badge,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import CustomModal from "./CustomModal";
import { useEffect, useState } from "react";

const Header = () => {
  const [filters, setFilters] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filterType, setFilterType] = useState("");
  let location = useLocation();

  useEffect(() => {
    const linkFilter = {
      "/rickandmorty/": "episode",
      "/rickandmorty/characters": "character",
      "/rickandmorty/favourites": "character",
      "/rickandmorty/locations": "location",
    };
    setFilterType(linkFilter[location.pathname]);
  }, [location]);

  let numFilter = Object.keys(filters).filter((key) =>
    key.includes(filterType)
  ).length;

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
              <Nav.Link as={Link} to="/rickandmorty/locations">
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
              onClick={() => setShowModal(true)}
            >
              Filters <Badge bg="secondary">{numFilter > 0 && numFilter}</Badge>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ height: "4rem" }}>
        <CustomModal
          isActive={showModal}
          onHidden={() => setShowModal(false)}
          setFilters={(data) => setFilters(data)}
          filterType={filterType}
        ></CustomModal>
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
