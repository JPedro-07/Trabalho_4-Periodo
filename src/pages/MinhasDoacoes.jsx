import { useState } from "react";

function MinhasDoacoes() {
  const [doacoes] = useState(() =>
    JSON.parse(localStorage.getItem("doacoes") || "[]")
  );

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "20px" }}>
      <h1>Minhas Doações</h1>
      <p>Acompanhe as doações que você registrou.</p>

      {doacoes.length === 0 ? (
        <p>Você ainda não realizou nenhuma doação.</p>
      ) : (
        doacoes.map((doacao, index) => (
          <div
            key={doacao.id || index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "15px"
            }}
          >
            <h3>{doacao.item}</h3>

            <p>Instituição: {doacao.instituicao}</p>
            <p>Quantidade: {doacao.quantidade}</p>
            <p>Data do registro: {doacao.data || "Não informada"}</p>

            <p>
              Situação: <strong>{doacao.status}</strong>
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default MinhasDoacoes;