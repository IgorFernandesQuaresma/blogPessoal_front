
import './NavBar.css'
import IgorLogo from '../../assets/logo/Igor.png'
import { Link } from 'react-router-dom';
import Botao from '../botao/Botao';

function NavBar(){
    return (
        <>
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

         <Link to = './'>
                <a className = "text-bege font-sans hover:text-branco" href="#home">Home</a>
         </Link>

         <Link to = '/postagens'>
                <a className = "text-bege font-sans hover:text-branco" href="#postagens" >Postagens</a>
         </Link>
                <a className = "text-bege font-sans hover:text-branco" href="#temas">Temas</a>
                <a className = "text-bege font-sans hover:text-branco" href="cadastrar_tema">Cadastrar tema</a>
                <a className = "text-bege font-sans hover:text-branco" href="perfil">Perfil</a>
                <a className = "text-bege font-sans hover:text-branco" href="sair">Sair</a>
                <Botao texto='Fale comigo' link='https//google.com'/>
    
        </ul>
    </nav>
        </>
    );
}

export default NavBar