import anxios from 'axios';

const api = anxios.create({
    baseURL: "http://localhost:8080"
});

export default api;

import api from "../services/api";
async function buscarNecessedades() {
    const resposta = await api.get("/necessidades");
    console.log(resposta.data);
}