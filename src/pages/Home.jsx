
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <section className="home-banner">
        <h1>DoeJá: sua ajuda transforma vidas!</h1>

        <p>
          Conectamos pessoas que querem ajudar a instituições
          que precisam de apoio. Uma doação pode fazer a diferença.
        </p>

        <div className="home-botoes">
          <Link to="/cadastro" className="botao-home">
            Quero participar
          </Link>

          <Link to="/login" className="botao-secundario">
            Já tenho conta
          </Link>
        </div>
      </section>

      <section className="home-sobre">
        <h2>Como funciona o DoeJá?</h2>

        <div className="home-cards">

          <div className="home-card">
            <h3>Instituições</h3>
            <p>
              As instituições cadastram os produtos e recursos
              de que precisam.
            </p>
          </div>

          <div className="home-card">
            <h3>Doadores</h3>
            <p>
              Os doadores visualizam as necessidades e escolhem
              como ajudar.
            </p>
          </div>

          <div className="home-card">
            <h3>Doações</h3>
            <p>
              As doações são registradas e acompanhadas
              até a entrega.
            </p>
          </div>

        </div>
      </section>

      <section className="home-prioridades">
        <h2>As necessidades têm prioridades</h2>

        <div className="prioridade-lista">
          <span className="prioridade urgente">URGENTE</span>
          <span className="prioridade media">MÉDIA</span>
          <span className="prioridade baixa">BAIXA</span>
        </div>

        <p>
          Nosso objetivo é destacar as necessidades mais importantes
          para que as doações cheguem a quem mais precisa.
        </p>
      </section>

      <footer className="home-footer">
        <p>DoeJá © 2026 - Conectando solidariedade e esperança.</p>
      </footer>

    </div>
  );
}

export default Home;
