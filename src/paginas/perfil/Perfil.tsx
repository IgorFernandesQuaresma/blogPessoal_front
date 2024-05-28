import { AuthContext } from '../../contexts/AuthContext'
import { ReactNode, useContext} from 'react'


function Perfil(){

const {usuario} = useContext(AuthContext)

const token = usuario.token

let component: ReactNode

    if (token !=="" ) { 

        component =(

        <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center gap-1 
        w-[1200px] h-[80vh] 
        bg-gray-500 bg-opacity-75 
        border border-bege
        bg-cinza
        mt-11">
            <div className='flex justify-center w-full h-1/3 border-b-bege p-6'>
                <img className='w-[250px] h-[250px] z-10 border-branco rounded-full' src={usuario.foto} alt="Teste" />
            </div>

            <div className='w-full h-2/3 border-t-4 border-t-bege bg-preto p-20'>
                <p className='text-bege font-sans font-light text-2xl mb-4'>Nome: {usuario.nome}</p>
                <p className='text-bege font-sans font-light text-2xl'>Email: {usuario.usuario}</p>
            </div>

        </div>
    </div> )

    }


    return (
        <>
        {component}
        </>
    )


}

export default Perfil