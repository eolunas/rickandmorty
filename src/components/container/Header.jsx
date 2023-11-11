// import PropTypes from "prop-types";
import rmLogo from "/rickandmorty.svg";
import titleImg from "../../assets/Rick_and_Morty.png";
import { useContext, useEffect, useState } from "react";
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
import { FilterContext } from "../../utils/context";

const Header = () => {
  const [filters, updateFilters] = useContext(FilterContext);

  const [expanded, setExpanded] = useState(false);
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
      <Navbar
        fixed="top"
        expand="lg"
        className="bg-body-tertiary"
        expanded={expanded}
      >
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to="/rickandmorty/"
            onClick={() => setExpanded(false)}
          >
            <img
              src={rmLogo}
              alt="rickandmorty"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />{" "}
            <img
              src={titleImg}
              alt="rick and morty title"
              height="31"
              className="d-inline-block align-text-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : "expanded")}
            aria-controls="navbarScroll"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="justify-content-start flex-grow-1 pe-3"
              navbarScroll
            >
              <Nav.Link
                as={Link}
                to="/rickandmorty/characters"
                onClick={() => setExpanded(false)}
              >
                Characters
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/rickandmorty/favourites"
                onClick={() => setExpanded(false)}
              >
                Favourites
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/rickandmorty/locations"
                onClick={() => setExpanded(false)}
              >
                Locations
              </Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="https://github.com/eolunas/rickandmorty"
                  target="_blank"
                  onClick={() => setExpanded(false)}
                >
                  Repository
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://rickandmortyapi.com/documentation"
                  target="_blank"
                  onClick={() => setExpanded(false)}
                >
                  API Docs
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/rickandmorty/about"
                  onClick={() => setExpanded(false)}
                >
                  About project
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button
              variant="outline-success"
              onClick={() => {
                setShowModal(true);
                setExpanded(false);
              }}
            >
              Filters <Badge bg="secondary">{numFilter > 0 && numFilter}</Badge>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ height: "3.6rem" }}>
        <CustomModal
          isActive={showModal}
          onHidden={() => setShowModal(false)}
          setFilters={(data) => updateFilters(data)}
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
