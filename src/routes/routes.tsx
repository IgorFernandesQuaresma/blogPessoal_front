import { BrowserRouter, Route, Routes } from "react-router-dom";
import Postagens from "../paginas/postagens/Postagem.tsx";
import NavBar from "../components/nav/NavBar.tsx";
import Footer from "../components/footer/Footer.tsx";
import Home from "../paginas/home/Home.tsx";
import Cadastro from "../paginas/cadastro/cadastro.tsx";
import Login from "../paginas/login/login.tsx";
import { AuthProvider } from "../contexts/AuthContext.tsx";
import Temas from "../paginas/temas/ListarTemas.tsx";
import FormTemas from "../paginas/temas/formularioTemas/formTemas.tsx";
import DeletarTema from "../paginas/temas/deletarTemas/DeletarTemas.tsx";

function AppRoutes ( ) {
    return (
        <AuthProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/postagens" element={<Postagens />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/temas" element={<Temas />} />
                    <Route path="/formulario_temas" element={<FormTemas />} />
                    <Route path="/editartema/:id" element={<FormTemas />} />
                    <Route path="/deletartema/:id" element={<DeletarTema />} />
                    <Route path="/" element={<Login />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProvider>


    )
}


export default AppRoutes