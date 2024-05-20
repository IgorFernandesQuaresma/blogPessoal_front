import { BrowserRouter, Route, Routes } from "react-router-dom";
import Postagens from "../paginas/postagens/Postagem.tsx";
import NavBar from "../components/nav/NavBar.tsx";
import Footer from "../components/footer/Footer.tsx";
import Home from "../paginas/home/Home.tsx";
import Cadastro from "../paginas/cadastro/cadastro.tsx";
import Login from "../paginas/login/login.tsx";
import { AuthProvider } from "../contexts/AuthContext.tsx";

function AppRoutes ( ) {
    return (
        <AuthProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/postagens" element={<Postagens />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/" element={<Login />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProvider>


    )
}


export default AppRoutes