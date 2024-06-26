import { GithubLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react';
import './Footer.css'
import { AuthContext } from '../../contexts/AuthContext';
import { ReactNode, useContext } from 'react';

function Footer(){

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !=="" ){
        <footer className='flex flex-col justify-center items-center gap-1 h-20 w-full bg-cinza'>      
        <div className='flex flex-col justify-center items-center gap-1'>
            <h1 className='text-bege font-poppins font-light text-xs'>Desenvolvido por Igor Fernandes </h1>
        </div>

        <div className='flex flex-row gap-4'>
        <WhatsappLogo className='text-bege hover:text-branco' size={32}/>
        <GithubLogo className='text-bege hover:text-branco' size={32} />
        <LinkedinLogo className='text-bege hover:text-branco' size={32} />
        </div>
    </footer>
    }
    return (
        <>
            {component}
        </>
    );
}

export default Footer