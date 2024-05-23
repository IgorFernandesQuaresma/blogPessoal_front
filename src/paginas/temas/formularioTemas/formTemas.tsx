import { useState, useContext, useEffect, ChangeEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import Tema from "../../../models/Tema"
import { RotatingLines } from "react-loader-spinner"
import { atualizar, buscar, cadastrar } from "../../../service/Service"

function FormTemas() {

    const navigate = useNavigate()

    const [tema, setTema] = useState<Tema>({} as Tema)
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
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate('/temas')
    }


    async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {

            try {
                await atualizar(`/temas`, tema, setTema, {
                    headers: {'Authorization': token }
                });
                alert('Tema atualizado com sucesso!');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                   // alert('O token Expirou!')
                    handleLogout()
                } else {
                    alert('Erro ao atualizar o Tema!')
                    
                }
            }

        }else {

            try {
                await cadastrar(`/temas`, tema, setTema, {
                    headers: { 'Authorization': token }
                });
                alert('Tema cadastrado com sucesso!');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    //alert('O token Expirou!')
                    handleLogout()
                } else {
                    alert(`Erro ao atualizar o Tema! seu ${token} esta aqui` )
                }
            }

        }

        setIsLoading(false)
        retornar()
    }

    console.log(JSON.stringify(tema))
    console.log(token)

    


    return (

<div className="flex flex-col justify-center items-center w-full min-h-96">
    <form className="flex flex-col justify-center w-1/2 border border-bege p-4 bg-cinza"
    onSubmit={gerarNovoTema} >
        <h1 className='text-bege font-poppins font-light text-lg'>Cadastrar Tema</h1>
        <div className="mb-4">
            <label htmlFor="tema" className="block text-sm font-sans font-medium text-bege">Tema:</label>
            <input
                type="text"
                id="descricao"
                name='descricao'
                placeholder="Digite seu tema"
                required
                className="mt-1 block w-10/12 h-10 p-2 
                border border-bege rounded-md shadow-sm 
                focus:outline-none focus:ring-blue-500 focus:border-blue-500
                bg-transparent text-branco"
                value = {tema.descricao}
                onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
                
        </div>

        <div className="flex justify-center">

        <button
                    className="w-1/2 h-full text-bege font-sans font-light border border-bege 
                    rounded-md px-4 py-2 hover:bg-bege hover:text-branco
                    transition duration-700 ease-ease"
                    type="submit">

                    {isLoading ? <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                    /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }

                </button>
    
        </div>
    </form>
</div>





    
    )
    
}


export default FormTemas