import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Doador from "./pages/Doador";
import Instituicao from "./pages/Instituicao";
import MinhasDoacoes from "./pages/MinhasDoacoes";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import MeuPerfil from "./pages/MeuPerfil";
import GerenciarNecessidades from "./pages/GerenciarNecessidades";
import GerenciarDoacoes from "./pages/GerenciarDoacoes";



function RotaProtegida({ children, tipo }) {
  const usuario = JSON.parse(
    localStorage.getItem("usuarioLogado") || "null"
  );

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  if (tipo && usuario.tipo !== tipo) {
    if (usuario.tipo === "INSTITUICAO") {
      return <Navigate to="/instituicao" replace />;
    }

    if (usuario.tipo === "DOADOR") {
      return <Navigate to="/doador" replace />;
    }

    return <Navigate to="/" replace />;
  }

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={<Home />} />

        <Route
          path="/doador"
          element={
            <RotaProtegida tipo="DOADOR">
              <Doador />
            </RotaProtegida>
          }
        />

        <Route
          path="/instituicao"
          element={
            <RotaProtegida tipo="INSTITUICAO">
              <Instituicao />
            </RotaProtegida>
          }
        />

        <Route
          path="/minhas-doacoes"
          element={
            <RotaProtegida tipo="DOADOR">
              <MinhasDoacoes />
            </RotaProtegida>
          }
        />

        <Route
          path="/perfil"
          element={
            <RotaProtegida>
              <MeuPerfil />
            </RotaProtegida>
          }
        />

        <Route
  path="/gerenciar-doacoes"
  element={
    <RotaProtegida tipo="INSTITUICAO">
      <GerenciarDoacoes />
    </RotaProtegida>
  }
/>

        <Route
        path="/gerenciar-necessidades"
        element={
        <RotaProtegida tipo="INSTITUICAO">
          <GerenciarNecessidades />
    </RotaProtegida>
  }
/>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;