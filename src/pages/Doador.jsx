import { useState } from "react";
import "./Doador.css";

function Doador() {
  const [filtro, setFiltro] = useState("TODAS");

  const necessidades = [
    {
      id: 1,
      instituicao: "Instituição Esperança",
      item: "cestas básicas",
      descricao: "Alimentos para famílias em situação de vulnerabilidade",
      quantidade: 30,
      prioridade: "Urgente",
      categoria: "Alimentos",
    },
    {
      id: 2,
      instituicao: "Casa da Criança",
      item: "Roupas infantis",
      descricao: "Roupas para crianças de 2 a 10 anos.",
      quantidade: 20,
      prioridade: "Média",
      categoria: "Roupas",
    },
    {
      id: 3,
      instituicao: "Lar Solidário",
      item: "Produtos de higiene",
      descricao: "Sabonetes, shampoos e escovas de dentes",
      quantidade: 15,
      prioridade: "Baixa",
      categoria: "Higiene",
    },
  ];

  const necessidadesFiltradas =
    filtro === "TODAS"
      ? necessidades
      : necessidades.filter((necessidade) => necessidade.prioridade === filtro);

  function ajudar(item) {
    alert("Você escolheu ajudar com: " + item);
  }

  return (
    <div className="painel-doador">
      <header className="cabecalho">
        <h1>Doejá</h1>
        <span>Área do Doador</span>
      </header>

      <main className="conteudo">
        <section className="boas-vindas">
          <h2>Olá, Doador!</h2>
          <p>
            Sua ajuda pode transformar vidas. Veja quem precisa de você hoje.
          </p>
        </section>

        <section className="resumo">
          <div className="resumo-card">
            <h3>{necessidades.length}</h3>
            <p>Necessidades disponíveis</p>
          </div>

          <div className="resumo-card">
            <h3>{necessidades.filter((n) => n.prioridade === "Urgente").length}</h3>
            <p>Necessidades urgentes</p>
          </div>
        </section>

        <section className="filtro">
          <button
            type="button"
            className={filtro === "TODAS" ? "ativo" : ""}
            onClick={() => setFiltro("TODAS")}
          >
            Todas
          </button>
          <button
            type="button"
            className={filtro === "Urgente" ? "ativo" : ""}
            onClick={() => setFiltro("Urgente")}
          >
            Urgente
          </button>
          <button
            type="button"
            className={filtro === "Média" ? "ativo" : ""}
            onClick={() => setFiltro("Média")}
          >
            Média
          </button>
          <button
            type="button"
            className={filtro === "Baixa" ? "ativo" : ""}
            onClick={() => setFiltro("Baixa")}
          >
            Baixa
          </button>
        </section>

        <section className="lista-necessidades">
          {necessidadesFiltradas.map((necessidade) => (
            <article key={necessidade.id} className="necessidade-card">
              <h3>{necessidade.instituicao}</h3>
              <p>
                <strong>Item:</strong> {necessidade.item}
              </p>
              <p>{necessidade.descricao}</p>
              <p>
                <strong>Quantidade:</strong> {necessidade.quantidade}
              </p>
              <p>
                <strong>Prioridade:</strong> {necessidade.prioridade}
              </p>
              <p>
                <strong>Categoria:</strong> {necessidade.categoria}
              </p>
              <button type="button" onClick={() => ajudar(necessidade.item)}>
                Quero ajudar
              </button>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Doador;