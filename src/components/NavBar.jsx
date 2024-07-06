import "bootstrap/dist/css/bootstrap.css";

const NavBar = () => {
  return (
    <nav className="Buttons">
      <div className="d-flex justify-content-center">
        <button className="btn btn-success m-3" type="button">
          METEO
        </button>
        <button className="btn btn-secondary m-3" type="button">
          MENU
        </button>
        <button className="btn btn-secondary m-3" type="button">
          NOTIZIE
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
