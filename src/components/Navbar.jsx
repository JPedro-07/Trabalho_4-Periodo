
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        Doe<span>Já.</span>
      </Link>

      <nav className="menu">
        <Link
          to="/"
          className={location.pathname === "/" ? "selecionado" : ""}
        >
          Início
        </Link>

        <Link
          to="/instituicao"
          className={location.pathname === "/instituicao" ? "selecionado" : ""}
        >
          Instituição
        </Link>

        <Link
          to="/doador"
          className={location.pathname === "/doador" ? "selecionado" : ""}
        >
          Doador
        </Link>

        <Link
          to="/minhas-doacoes"
          className={location.pathname === "/minhas-doacoes" ? "selecionado" : ""}
        >
          Minhas Doações
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
