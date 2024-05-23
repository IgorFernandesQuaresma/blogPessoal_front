import { Link } from "react-router-dom";
import Tema from "../../models/Tema";
import "./CardTemas.css";

interface CardTemasProps{
    tema: Tema
}



function CardTemas({tema}: CardTemasProps) {
  return (

    <div className="flex flex-col justify-center items-center m-1 gap-1 w-[60vh] h-[30vh] bg-cinza bg-opacity-75 border border-bege box-border">
      <h1 className="m-0 p-4 bg-preto bg-opacity-55 w-full text-bege font-poppins font-light text-xl text-left border-b-2 border-bege box-border">
        Temas:
      </h1>
      <p className="text-bege font-sans font-light text-xl mb-5 mt-5 p-4 box-border">
        {tema.descricao}
      </p>
      <div className="flex flex-row justify-center items-center gap-1 w-full h-[30vh] bg-cinza bg-opacity-75 box-border">
      
      <Link to={`/editartema/${tema.id}`}
                    className='w-1/2 h-full text-bege font-sans font-light border border-bege rounded-md px-4 py-2 
                    hover:bg-bege hover:text-branco text-center flex items-center justify-center
                    transition duration-700 ease-ease'>
                    <button>Editar</button>
                </Link>
        
       <Link to={`/deletartema/${tema.id}`}
                    className='w-1/2 h-full text-bege font-sans font-light border border-bege rounded-md px-4 py-2 
                    hover:bg-bege hover:text-branco text-center flex items-center justify-center
                    transition duration-700 ease-ease'>
                    <button>Deletar</button>
                </Link>
      </div>
    </div>
  );
}

export default CardTemas;
