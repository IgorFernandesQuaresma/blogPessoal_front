import { GithubLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react';
import './Footer.css'

function Footer(){
    return (
        <>

    <footer className='flex flex-col justify-center items-center gap-1 h-20 mt-4 w-full'>      
        <div className='flex flex-col justify-center items-center gap-1'>
            <h1 className='text-bege font-poppins font-light text-xs'>Desenvolvido por Igor Fernandes </h1>
        </div>

        <div className='flex flex-row gap-4'>
        <WhatsappLogo className='text-bege hover:text-branco' size={32}/>
        <GithubLogo className='text-bege hover:text-branco' size={32} />
        <LinkedinLogo className='text-bege hover:text-branco' size={32} />
        </div>
    </footer>
    
        </>
    );
}

export default Footer