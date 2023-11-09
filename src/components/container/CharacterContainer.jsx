import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const CharacterContainer = ({ info }) => {
  const characterStyle = {
    borderStyle: "solid",
    borderWidth: "0 0 1px 0",
    borderColor: "#dee2e6",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const infoStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div style={characterStyle}>
      <div style={infoStyle}>
        <img
          src={info.image}
          alt="character profile"
          style={{ width: "40px", borderRadius: "50%" }}
        />
        <span style={{ marginLeft: "10px" }}>{info.name}</span>
      </div>
      <Button variant="outline-success">🤍</Button>
    </div>
  );
};

CharacterContainer.propTypes = {
  info: PropTypes.object.isRequired,
};

export default CharacterContainer;

// 🤍💚
