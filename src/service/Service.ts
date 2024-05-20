import axios from "axios";


const api = axios.create ({
    baseURL: "https://generationblogpessoal.onrender.com"
})


export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const response = await api.post(url, dados)
    setDados(response.data)
}