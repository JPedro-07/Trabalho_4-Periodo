import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Doador from "./pages/Doador";
import Instituicao from "./pages/Instituicao";
import MinhasDoacoes from "./pages/MinhasDoacoes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Doador />} />
        <Route path="/doador" element={<Doador />} />
        <Route path="/instituicao" element={<Instituicao />} />
        <Route path="/minhas-doacoes" element={<MinhasDoacoes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
