import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const usuario = JSON.parse(
    localStorage.getItem("usuarioLogado") || "null"
  );

  function sair() {
    localStorage.removeItem("usuarioLogado");
    alert("Você saiu da sua conta!");
    navigate("/");
  }

  return (
    <nav style={{
      display: "flex",
      gap: "20px",
      padding: "20px",
      backgroundColor: "#16845a",
      alignItems: "center",
      flexWrap: "wrap"
    }}>

      <Link to="/" style={{ color: "white", fontWeight: "bold" }}>
        DoeJá
      </Link>

      {!usuario ? (
        <>
          <Link to="/" style={{ color: "white" }}>
            Início
          </Link>

          <Link to="/cadastro" style={{ color: "white" }}>
            Criar conta
          </Link>

          <Link to="/login" style={{ color: "white" }}>
            Entrar
          </Link>
        </>
      ) : (
        <>
          {usuario.tipo === "DOADOR" ? (
            <>
              <Link to="/doador" style={{ color: "white" }}>
                Painel do Doador
              </Link>

              <Link to="/minhas-doacoes" style={{ color: "white" }}>
                Minhas Doações
              </Link>
            </>
          ) : usuario.tipo === "INSTITUICAO" ? (
            <>
              <Link to="/instituicao" style={{ color: "white" }}>
                Painel da Instituição
              </Link>

              <Link to="/gerenciar-necessidades" style={{ color: "white" }}>
                Gerenciar Necessidades
              </Link>

              <Link to="/gerenciar-doacoes" style={{ color: "white" }}>
                Gerenciar Doações
              </Link>
            </>
          ) : null}

          <Link to="/perfil" style={{ color: "white" }}>
            Meu Perfil
          </Link>

          <button onClick={sair}>
            Sair
          </button>
        </>
      )}

    </nav>
  );
}

export default Navbar;