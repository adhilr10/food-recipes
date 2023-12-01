import foodzz from "../assets/foodzz.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo-img" src={foodzz} alt="Logo" />
        <h2 className="logo-name">Foodzz</h2>
      </div>
    </div>
  );
};

export default Header;
