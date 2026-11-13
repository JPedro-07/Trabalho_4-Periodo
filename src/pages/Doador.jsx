import { useState } from "react";
import "./Doador.css";

function Doador() {
  const [filtro, setFiltro] = useState("TODAS");

  const necessidades = [
    {
      id: 1,
      instituicao: "Instituto Esperança",
      item: "Cestas básicas",
      descricao: "Alimentos para famílias em situação de vulnerabilidade.",
      quantidade: 30,
      prioridade: "URGENTE",
      categoria: "Alimentação"
    },
    {
      id: 2,
      instituicao: "Casa da Criança",
      item: "Roupas infantis",
      descricao: "Roupas para crianças de 2 a 10 anos.",
      quantidade: 20,
      prioridade: "MEDIA",
      categoria: "Roupas"
    },
    {
      id: 3,
      instituicao: "Lar Solidário",
      item: "Produtos de higiene",
      descricao: "Sabonetes, shampoos e escovas de dente.",
      quantidade: 15,
      prioridade: "BAIXA",
      categoria: "Higiene"
    }
  ];

  const necessidadesFiltradas =
    filtro === "TODAS"
      ? necessidades
      : necessidades.filter(
          (necessidade) => necessidade.prioridade === filtro
        );

        necessidadesFiltradas.map((necessidade) => (
  <div key={necessidade.id}>
    <h3>{necessidade.item}</h3>
  </div>
));


function registrarDoacao(necessidade) {
  const novaDoacao = {
    instituicao: necessidade.instituicao,
    item: necessidade.item,
    quantidade: 1,
    status: "Aguardando entrega"
  };

  const doacoesSalvas =
    JSON.parse(localStorage.getItem("doacoes")) || [];

  doacoesSalvas.push(novaDoacao);

  localStorage.setItem(
    "doacoes",
    JSON.stringify(doacoesSalvas)
  );

  alert("Doação registrada com sucesso!");
}


  function ajudar(item) {
    alert("Você escolheu ajudar com: " + item);
  }

  return (
    <div className="painel-doador">
      <header className="cabecalho">
        <h1>DoeJá.</h1>
        <span>Área do Doador</span>
      </header>

      <main className="conteudo">
        <section className="boas-vindas">
          <h2>Olá, Doador!</h2>
          <p>
            Sua ajuda pode transformar vidas.
            Veja quem precisa de você hoje.
          </p>
        </section>

        <section className="resumo">
          <div className="resumo-card">
            <h3>{necessidades.length}</h3>
            <p>Necessidades disponíveis</p>
          </div>

          <div className="resumo-card">
            <h3>
              {necessidades.filter(
                n => n.prioridade === "URGENTE"
              ).length}
            </h3>
            <p>Necessidades urgentes</p>
          </div>
        </section>

        <section className="lista-necessidades">

          <h2>Quem precisa de ajuda?</h2>

          <div className="filtros">

            {["TODAS", "URGENTE", "MEDIA", "BAIXA"].map(
              (opcao) => (
                <button
                  key={opcao}
                  className={filtro === opcao ? "ativo" : ""}
                  onClick={() => setFiltro(opcao)}
                >
                  {opcao === "MEDIA" ? "MÉDIA" : opcao}
                </button>
              )
            )}

          </div>

          <div className="cards">

            {necessidadesFiltradas.map((necessidade) => (
              <div className="necessidade-card" key={necessidade.id}>
                <span className={`prioridade ${necessidade.prioridade.toLowerCase()}`}>
                  {necessidade.prioridade === "MEDIA"
                    ? "MÉDIA"
                    : necessidade.prioridade}
                </span>

                <h3>{necessidade.item}</h3>
                <p className="instituicao">
                  {necessidade.instituicao}
                </p>

                <p>{necessidade.descricao}</p>

                <p>
                  <strong>Quantidade necessária:</strong>{" "}
                  {necessidade.quantidade}
                </p>

                <p>
                  <strong>Categoria:</strong>{" "}
                  {necessidade.categoria}
                </p>

                <button
                  className="botao-ajudar"
                  onClick={() => registrarDoacao(necessidade)}>
                  Quero ajudar
                </button>

              </div>

            ))}

            {necessidadesFiltradas.length === 0 && (
              <p>Nenhuma necessidade encontrada.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Doador;