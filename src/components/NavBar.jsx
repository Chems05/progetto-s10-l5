import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="Buttons">
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-success m-3"
          type="button"
          onClick={() => {
            navigate("/home");
          }}
        >
          FEEDBACK
        </button>
        <button
          className="btn btn-success m-3"
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          METEO
        </button>
        <button
          className="btn btn-success m-3"
          type="button"
          onClick={() => {
            navigate("/news");
          }}
        >
          NOTIZIE
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
