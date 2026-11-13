
import { useState } from "react";

function MinhasDoacoes() {
  const [doacoes] = useState(() => {
    return JSON.parse(localStorage.getItem("doacoes")) || [];
  });

  return (
    <div>
      <h1>Minhas Doações</h1>
      <p>Acompanhe suas doações realizadas.</p>

      {doacoes.length === 0 ? (
        <p>Você ainda não realizou nenhuma doação.</p>
      ) : (
        doacoes.map((doacao, index) => (
          <div key={index}>
            <h3>{doacao.instituicao}</h3>
            <p>Item: {doacao.item}</p>
            <p>Quantidade: {doacao.quantidade}</p>
            <p>Status: {doacao.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MinhasDoacoes;