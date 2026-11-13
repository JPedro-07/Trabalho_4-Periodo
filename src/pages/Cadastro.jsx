import "./Acesso.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("DOADOR");

  const navigate = useNavigate();

  function cadastrar(e) {
    e.preventDefault();

    const usuarios =
      JSON.parse(localStorage.getItem("usuarios")) || [];

    const emailExiste = usuarios.some(
      (usuario) => usuario.email === email
    );

    if (emailExiste) {
      alert("Este e-mail já está cadastrado!");
      return;
    }

    usuarios.push({ nome, email, senha, tipo });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");

    navigate("/login");
  }

  return (
    <div className="acesso-container">
      <div className="acesso-card">
      <h1>Criar conta no DoeJá</h1>

      <form onSubmit={cadastrar}>
        <label>Nome:</label>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

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

        <label>Tipo de conta:</label>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="DOADOR">Doador</option>
          <option value="INSTITUICAO">Instituição</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>

      <p>
        Já possui conta? <Link to="/login">Entrar</Link>
      </p>
    </div>
    </div>
  );
}

export default Cadastro;
