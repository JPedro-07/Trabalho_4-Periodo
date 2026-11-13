
import { useState } from "react";

function GerenciarNecessidades() {
  const [necessidades, setNecessidades] = useState(() =>
    JSON.parse(localStorage.getItem("necessidades") || "[]")
  );

  function alterarQuantidade(index, valor) {
    const atualizadas = necessidades.map((necessidade, i) =>
      i === index
        ? {
            ...necessidade,
            quantidade: Math.max(1, Number(necessidade.quantidade) + valor)
          }
        : necessidade
    );

    setNecessidades(atualizadas);
    localStorage.setItem("necessidades", JSON.stringify(atualizadas));
  }

  function excluirNecessidade(index) {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir esta necessidade?"
    );

    if (!confirmar) return;

    const atualizadas = necessidades.filter((_, i) => i !== index);

    setNecessidades(atualizadas);
    localStorage.setItem("necessidades", JSON.stringify(atualizadas));
  }

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "auto" }}>
      <h1>Gerenciar Necessidades</h1>
      <p>Visualize e atualize os itens que sua instituição precisa.</p>

      {necessidades.length === 0 ? (
        <p>Nenhuma necessidade cadastrada ainda.</p>
      ) : (
        necessidades.map((necessidade, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px #00000015"
            }}
          >
            <h3>{necessidade.item}</h3>

            <p>Categoria: {necessidade.categoria}</p>
            <p>Prioridade: {necessidade.prioridade}</p>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>Quantidade: {necessidade.quantidade}</span>

              <button onClick={() => alterarQuantidade(index, -1)}>
                -
              </button>

              <button onClick={() => alterarQuantidade(index, 1)}>
                +
              </button>

              <button
                onClick={() => excluirNecessidade(index)}
                style={{
                  background: "#dc3545",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                Excluir
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default GerenciarNecessidades;
