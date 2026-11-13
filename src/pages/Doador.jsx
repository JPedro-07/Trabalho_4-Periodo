import { useState } from "react";
import "./Doador.css";

function Doador() {
  const [necessidades] = useState(() =>
    JSON.parse(localStorage.getItem("necessidades") || "[]")
  );

  function registrarDoacao(necessidade) {
    const novaDoacao = {
      id: Date.now(),
      instituicao: necessidade.instituicao,
      item: necessidade.item,
      quantidade: 1,
      status: "Aguardando entrega",
      data: new Date().toLocaleDateString("pt-BR")
    };

    const doacoesSalvas = JSON.parse(
      localStorage.getItem("doacoes") || "[]"
    );

    doacoesSalvas.push(novaDoacao);

    localStorage.setItem("doacoes", JSON.stringify(doacoesSalvas));

    alert("Doação registrada com sucesso!");
  }

  return (
    <div className="doador-container">
      <h1>Painel do Doador</h1>

      <p>
        Confira as necessidades das instituições e escolha como ajudar.
      </p>

      <div className="lista-necessidades">
        {necessidades.length === 0 ? (
          <p>Nenhuma necessidade cadastrada no momento.</p>
        ) : (
          necessidades.map((necessidade, index) => (
            <div className="card-necessidade" key={index}>
              <h2>{necessidade.item}</h2>

              <p>
                <strong>Instituição:</strong> {necessidade.instituicao}
              </p>

              <p>
                <strong>Categoria:</strong> {necessidade.categoria}
              </p>

              <p>
                <strong>Quantidade necessária:</strong>{" "}
                {necessidade.quantidade}
              </p>

              <p>
                <strong>Prioridade:</strong> {necessidade.prioridade}
              </p>

              <button onClick={() => registrarDoacao(necessidade)}>
                Quero ajudar
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Doador;