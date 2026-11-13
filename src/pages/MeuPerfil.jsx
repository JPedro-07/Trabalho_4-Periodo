
import "./Acesso.css";

function MeuPerfil() {
  const usuario = JSON.parse(
    localStorage.getItem("usuarioLogado") || "null"
  );

  if (!usuario) {
    return <h2>Você precisa entrar na sua conta.</h2>;
  }

  return (
    <div className="acesso-container">
      <div className="acesso-card">
        <h1>Meu Perfil</h1>
        <p>Confira suas informações no DoeJá.</p>

        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <div style={{
            background: "#e1f3e9",
            color: "#16845a",
            width: "75px",
            height: "75px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            fontSize: "30px"
          }}>
            {usuario.nome.charAt(0).toUpperCase()}
          </div>
        </div>

        <label>Nome completo</label>
        <p>{usuario.nome}</p>

        <label>E-mail</label>
        <p>{usuario.email}</p>

        <label>Tipo de conta</label>
        <p>
          {usuario.tipo === "DOADOR" ? "Doador" : "Instituição"}
        </p>
      </div>
    </div>
  );
}

export default MeuPerfil;
