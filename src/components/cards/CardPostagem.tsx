import { Link } from "react-router-dom"
import Postagem from "../../models/Postagem"

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem ({postagem}: CardPostagensProps) {


    
    return (
    <div className="flex flex-col justify-between m-1 gap-1 w-[60vh] min-h-[500px] bg-cinza bg-opacity-75 border border-bege box-border">
    <div className="flex flex-row">
    <h1 className="m-0 p-4 bg-preto bg-opacity-55 w-full text-bege font-poppins font-light text-xl text-center border-b-2 border-bege box-border">
        Titulo: {postagem.titulo}
    </h1>
    <h1 className="m-0 p-4 bg-preto bg-opacity-55 w-full text-bege font-poppins font-light text-xl text-center border-b-2 border-l-2 border-bege box-border">
        Tema: {postagem.tema?.descricao}
    </h1>
    </div>
    
    <div className="flex-grow overflow-y-auto w-full">
        <p className="text-bege font-sans font-light text-xl mb-5 mt-5 p-4 box-border">
        {postagem.texto}
        </p>
    </div>
    
    <div className="flex flex-row justify-center items-center gap-1 w-full h-[50px] bg-cinza bg-opacity-75 box-border">
        <Link to={`/home`}
            className='w-1/2 h-[50px] text-bege font-sans font-light border border-bege rounded-md px-4 py-2 
            hover:bg-bege hover:text-branco text-center flex items-center justify-center
            transition duration-700 ease-ease'>
            <button>Editar</button>
        </Link>
        
        <Link to={`/home`}
            className='w-1/2 h-[50px] text-bege font-sans font-light border border-bege rounded-md px-4 py-2 
            hover:bg-bege hover:text-branco text-center flex items-center justify-center
            transition duration-700 ease-ease'>
            <button>Deletar</button>
        </Link>
    </div>
</div>

    )
}

export default CardPostagem