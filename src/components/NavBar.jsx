import "bootstrap/dist/css/bootstrap.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="">
        <button className="btn btn-success m-2" type="button">
          METEO
        </button>
        <button className="btn btn-secondary m-2" type="button">
          MENU
        </button>
        <button className="btn btn-secondary m-2" type="button">
          NOTIZIE
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
