import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";

const CustomModal = ({ isActive, onHidden, setFilters, filterType }) => {
  const [form, setForm] = useState({});

  const setField = (field, value) => {
    setForm((prevForm) => {
      return { ...prevForm, [field]: value };
    });
  };

  const handleSubmit = () => {
    console.log(form);
    console.log(Object.keys(form).length);
    setFilters(form);
    onHidden();
  };

  return (
    <Modal show={isActive} onHide={onHidden} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Filter</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Label htmlFor="basic-url">Parameter to filter:</Form.Label>
          {filterType == "episode" && (
            <>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                  Name
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="e.g. The Ricklantis Mixup"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  defaultValue={form.episode_name}
                  onChange={(e) => setField("episode_name", e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                  Episode
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="e.g. S03E07"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  defaultValue={form.episode_episode}
                  onChange={(e) => setField("episode_episode", e.target.value)}
                />
              </InputGroup>
            </>
          )}
          {filterType == "character" && (
            <>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                  Name
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="e.g. Rick"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  defaultValue={form.character_name}
                  onChange={(e) => setField("character_name", e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  defaultValue={form.character_status}
                  onChange={(e) => setField("character_status", e.target.value)}
                >
                  <option>Status</option>
                  <option value="alive">alive</option>
                  <option value="dead">dead</option>
                  <option value="unknown">unknown</option>
                </Form.Select>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                  Species
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="e.g. Human"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  defaultValue={form.character_species}
                  onChange={(e) =>
                    setField("character_species", e.target.value)
                  }
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                  Type
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="e.g. Mythological"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  defaultValue={form.character_type}
                  onChange={(e) => setField("character_type", e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  defaultValue={form.character_gender}
                  onChange={(e) => setField("character_gender", e.target.value)}
                >
                  <option>Gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="genderless">Genderless</option>
                  <option value="unknown">Unknown</option>
                </Form.Select>
              </InputGroup>
            </>
          )}
          {filterType == "location" && (
            <>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                  Name
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="e.g. Citadel of Ricks"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  defaultValue={form.location_name}
                  onChange={(e) => setField("location_name", e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                  Type
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="e.g. Space station"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  defaultValue={form.location_type}
                  onChange={(e) => setField("location_type", e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                  Dimension
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="e.g. unknown"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  defaultValue={form.location_dimension}
                  onChange={(e) =>
                    setField("location_dimension", e.target.value)
                  }
                />
              </InputGroup>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={onHidden}>
            Close
          </Button>
          <Button onClick={handleSubmit} variant="outline-success">
            Search
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

CustomModal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onHidden: PropTypes.func.isRequired,
  setFilters: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired,
};

export default CustomModal;
