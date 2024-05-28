import Popup from 'reactjs-popup';
import './Modal.postagem.css'
import CadastrarPostagem from './Cadastrar.postagem';

function ModalPostagem() {
    return (
        <>
            <Popup contentStyle={{width: "1000px"}}
                trigger={
                    <button 
                        className='text-bege font-sans font-light border 
                        border-bege rounded-md px-4 py-2 
                        hover:bg-bege hover:text-branco'>
                        Nova Postagem
                    </button>
                }
                modal
            >
                <CadastrarPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;