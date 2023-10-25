import PropTypes from "prop-types";

const Header = ({ children, icon }) => {
  return (
    <header>
      <div className="Header-logo">
        <h1>
          <img src={icon} />
          <a href="/"> Rick and Morty</a>
        </h1>
      </div>
      <nav>
        <h1>{children}</h1>
      </nav>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.isRequired,
  icon: PropTypes.isRequired,
};

export default Header;
