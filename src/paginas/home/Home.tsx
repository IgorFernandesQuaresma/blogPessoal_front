import './Home.css'
import fotoHome from '../../assets/fotoDaHome.png'
import ModalPostagem from '../postagens/Modal.postagem';
import { AuthContext } from '../../contexts/AuthContext';
import { ReactNode, useContext } from 'react';

function Home(){


    const {usuario} = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !=="" ) {

        component = (
            <section className='flex flex-col justify-center items-center gap-1'>
            <img className='margin-negative-foto' src={fotoHome} alt="Foto de uma lampada colorida, exemplificando ideias" />
            <div className='flex flex-col justify-center items-center gap-1 margin-negative-50px'>
            <h1 className='text-bege font-poppins font-light text-5xl margin-negative'>Seja bem vindo ao meu mundo! </h1>
            <p className='text-bege font-sans font-light text-xl mb-4'>Desenvolvedor Web Formado pela Generation Brasil</p>
            {/*<div className = "text-bege font-sans font-light border border-bege rounded-md px-4 py-2 hover:bg-bege hover:text-branco">Nova Postagem</div> */}

            <ModalPostagem/> 
        </div>
    </section>
        )
    }


    return (
        <>
            {component}
        </>
    );
}

export default Home