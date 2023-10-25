import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Header = ({ children, icon }) => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="Header-logo">
        <h1>
          <img src={icon} />
          <span onClick={() => navigate("/")}> Rick and Morty</span>
        </h1>
      </div>
      <nav>
        <h1>{children}</h1>
      </nav>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  icon: PropTypes.string.isRequired,
};

export default Header;
