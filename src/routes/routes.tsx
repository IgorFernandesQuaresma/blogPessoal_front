import { BrowserRouter, Route, Routes } from "react-router-dom";
import Postagens from "../paginas/postagens/Postagem.tsx";
import NavBar from "../components/nav/NavBar.tsx";
import Footer from "../components/footer/Footer.tsx";
import Home from "../paginas/home/Home.tsx";
import Cadastro from "../paginas/cadastro/cadastro.tsx";
import Login from "../paginas/login/login.tsx";

function AppRoutes ( ) {
    return (
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/postagens" element={<Postagens/>}></Route>
                <Route path="/cadastro" element={<Cadastro/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        <Footer />
        </BrowserRouter>
    )
}


export default AppRoutes