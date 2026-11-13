import "./Instituicao.css";
import { useState } from "react";

function Instituicao() {
  const [item, setItem] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [categoria, setCategoria] = useState("Alimentação");
  const [prioridade, setPrioridade] = useState("MEDIA");

  function cadastrarNecessidade(e) {
    e.preventDefault();

    const novaNecessidade = {
      instituicao: "Instituto Esperança",
      item: item,
      quantidade: Number(quantidade),
      categoria: categoria,
      prioridade: prioridade
    };

    const necessidades =
      JSON.parse(localStorage.getItem("necessidades")) || [];

    necessidades.push(novaNecessidade);

    localStorage.setItem(
      "necessidades",
      JSON.stringify(necessidades)
    );

    alert("Necessidade cadastrada com sucesso!");

    setItem("");
    setQuantidade("");
  }

  return (
    <div>
      <h1>Painel da Instituição</h1>
      <p>Cadastre os itens que sua instituição precisa.</p>

      <form onSubmit={cadastrarNecessidade}>
        <label>Nome do item:</label>
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Ex: Cestas básicas"
          required
        />

        <label>Quantidade necessária:</label>
        <input
          type="number"
          min="1"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          placeholder="Ex: 30"
          required
        />

        <label>Categoria:</label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option>Alimentação</option>
          <option>Roupas</option>
          <option>Higiene</option>
          <option>Medicamentos</option>
          <option>Outros</option>
        </select>

        <label>Prioridade:</label>
        <select
          value={prioridade}
          onChange={(e) => setPrioridade(e.target.value)}
        >
          <option value="URGENTE">Urgente</option>
          <option value="MEDIA">Média</option>
          <option value="BAIXA">Baixa</option>
        </select>

        <button type="submit">
          Cadastrar necessidade
        </button>
      </form>
    </div>
  );
}

export default Instituicao;
