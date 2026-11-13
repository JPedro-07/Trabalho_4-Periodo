import "./Acesso.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  function entrar(e) {
    e.preventDefault();

    const usuarios =
      JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );

    if (!usuario) {
      alert("E-mail ou senha incorretos!");
      return;
    }

    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

    alert("Login realizado com sucesso!");

    if (usuario.tipo === "INSTITUICAO") {
      navigate("/instituicao");
    } else {
      navigate("/doador");
    }
  }

  return (
    <div className="acesso-container">
      <div className="acesso-card">
      <h1>Entrar no DoeJá</h1>

      <form onSubmit={entrar}>
        <label>E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <button type="submit">Entrar</button>
      </form>

      <p>
        Ainda não possui conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </div>
    </div>
  );
}

export default Login;
