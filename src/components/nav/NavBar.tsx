
import './NavBar.css'
import IgorLogo from '../../assets/logo/Igor.png'
import { Link, useNavigate } from 'react-router-dom';
import Botao from '../botao/Botao';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function NavBar(){


    const navigate = useNavigate()

    const {handleLogout} = useContext(AuthContext)

    function logout() {

        handleLogout()
        alert("Usuario desconectado com sucesso")
        navigate("/")
        
    }
    
    return (
        <>
    <div className='p-4'>
   <nav className='bg-cinza 
        bg-opacity-20 
        flex flex-col justify-center items-center 
        w-2/3 
        mx-auto 
        p-2 
        border border-bege' style={{ zIndex: '9999', position: 'relative' }}>
        <ul className='flex flex-row justify-center items-center gap-3'>

         <Link to = './'>
            <img className="nav_logo" src={IgorLogo} alt="Logo Igor" />
         </Link>

         <Link to = './home'>
                <a className = "text-bege font-sans hover:text-branco" href="#home">Home</a>
         </Link>

         <Link to = '/postagens'>
                <a className = "text-bege font-sans hover:text-branco" href="#postagens" >Postagens</a>
         </Link>
                <a className = "text-bege font-sans hover:text-branco" href="#temas">Temas</a>
                <a className = "text-bege font-sans hover:text-branco" href="cadastrar_tema">Cadastrar tema</a>
                <a className = "text-bege font-sans hover:text-branco" href="perfil">Perfil</a>
        <Link to="" onClick={logout} className="text-bege font-sans hover:text-branco">Sair</Link>
                <Botao texto='Fale comigo' link='https//google.com'/>
    
        </ul>
    </nav>
    </div>
        </>
    );
}

export default NavBar