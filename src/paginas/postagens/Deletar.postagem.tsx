import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Postagem from "../../models/Postagem";
import { AuthContext } from "../../contexts/AuthContext";
import { buscar, deletar } from "../../service/Service";
import { RotatingLines} from "react-loader-spinner";
import { toastAlerta } from "../../utils/ToastAlerta";


function DeletarPostagem() {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem);
    
    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)

    const token = usuario.token

    

    async function buscarPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                //alert('O token expirou!')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarPostagem() {
        setIsLoading(true)

        try {
            await deletar(`/postagens/${id}`, {
                headers: { Authorization: token }
            })
            toastAlerta('O Tema foi apagado com sucesso!' , "successo")
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }else{
                toastAlerta('Erro ao Excluir o Tema!' , "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate('/postagens')
    }
    
    return (
        <div className='container w-1/3 mx-auto justify-center'>
        <h1 className='text-bege font-poppins font-light text-lg'>Deletar Postagem</h1>
        <p className='text-bege font-sans font-light text-sm mb-4'>
            Você tem certeza de que deseja apagar a postagem a seguir?</p>
        <div className='border border-bege bg-cinza flex flex-col overflow-hidden p-4'>
            <header 
                className='py-2 px-6 text-bege font-poppins font-light text-lg'>
                Postagem
            </header>
            <p className='p-8 text-bege font-sans font-light 
            text-sm mb-4 h-full'>Id da postagem: {postagem.id}</p>
            <p className='p-8 text-bege font-sans font-light 
            text-sm mb-4 h-full'>Titulo da postagem: {postagem.titulo}</p>
            <div className="flex justify-center gap-3">
                <button 
                    className='text-bege font-sans font-light border 
                    border-bege rounded-md px-4 py-2 hover:bg-bege hover:text-branco'
                    onClick={retornar}>
                    Não
                </button>

                <button 
                    className='text-bege font-sans font-light border 
                    border-bege rounded-md px-4 py-2 hover:bg-bege hover:text-branco'
                    onClick={deletarPostagem}>

                {isLoading ? <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                    /> :
                        <span>Sim</span>
                    } 
                
                </button>

            </div>
        </div>
    </div>
    )
}
export default DeletarPostagem