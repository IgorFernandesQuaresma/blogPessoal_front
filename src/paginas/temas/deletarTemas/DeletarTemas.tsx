import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import { RotatingLines } from "react-loader-spinner";
import { buscar, deletar} from "../../../service/Service"

function DeletarTema() {

    const navigate = useNavigate()
    const [tema, setTema] = useState<Tema>({} as Tema);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
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
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate('/temas')
    }

    async function deletarTema() {
        setIsLoading(true)

        try {
            await deletar(`/temas/${id}`, {
                headers: { Authorization: token }
            })
            alert('O Tema foi apagado com sucesso!')
        } catch (error: any) {
            if (error.toString().includes('401')) {
                alert('O token expirou!')
                handleLogout()
            }else{
                alert('Erro ao Excluir o Tema!')
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className='container w-1/3 mx-auto justify-center'>
        <h1 className='text-bege font-poppins font-light text-lg'>Deletar tema</h1>
        <p className='text-bege font-sans font-light text-sm mb-4'>
            Você tem certeza de que deseja apagar o tema a seguir?</p>
        <div className='border border-bege bg-cinza flex flex-col overflow-hidden p-4'>
            <header 
                className='py-2 px-6 text-bege font-poppins font-light text-lg'>
                Tema
            </header>
            <p className='p-8 text-bege font-sans font-light text-sm mb-4 h-full'>{tema.descricao}</p>
            <div className="flex justify-center gap-3">
                <button 
                    className='text-bege font-sans font-light border border-bege rounded-md px-4 py-2 hover:bg-bege hover:text-branco'
                    onClick={retornar}
                    >
                    Não
                </button>

                <button 
                    className='text-bege font-sans font-light border border-bege rounded-md px-4 py-2 hover:bg-bege hover:text-branco'
                    onClick={deletarTema}>

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
export default DeletarTema