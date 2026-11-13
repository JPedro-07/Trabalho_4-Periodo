import { useState } from "react";

function GerenciarDoacoes() {
  const [doacoes, setDoacoes] = useState(() =>
    JSON.parse(localStorage.getItem("doacoes") || "[]")
  );

  function atualizarStatus(id, novoStatus) {
    const atualizadas = doacoes.map((doacao, index) => {
      if ((doacao.id || index) === id) {
        return { ...doacao, status: novoStatus };
      }

      return doacao;
    });

    setDoacoes(atualizadas);
    localStorage.setItem("doacoes", JSON.stringify(atualizadas));
  }

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "20px" }}>
      <h1>Gerenciar Doações</h1>
      <p>Atualize a situação das doações recebidas pela instituição.</p>

      {doacoes.length === 0 ? (
        <p>Ainda não existem doações registradas.</p>
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
            <p>Doador: {doacao.doador || "Não informado"}</p>

            <label>
              Situação da doação:
              <select
                value={doacao.status || "Aguardando entrega"}
                onChange={(e) =>
                  atualizarStatus(
                    doacao.id || index,
                    e.target.value
                  )
                }
                style={{
                  display: "block",
                  marginTop: "8px",
                  padding: "10px",
                  width: "100%",
                  maxWidth: "300px"
                }}
              >
                <option value="Aguardando entrega">Aguardando entrega</option>
                <option value="Recebida">Recebida</option>
                <option value="Concluída">Concluída</option>
              </select>
            </label>
          </div>
        ))
      )}
    </div>
  );
}

export default GerenciarDoacoes;