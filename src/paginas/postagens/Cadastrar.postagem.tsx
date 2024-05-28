import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tema from "../../models/Tema";
import { AuthContext } from "../../contexts/AuthContext";
import Postagem from "../../models/Postagem";
import { atualizar, buscar, cadastrar } from "../../service/Service";
import { ThreeDots } from "react-loader-spinner";
import { toastAlerta } from "../../utils/ToastAlerta";


function CadastrarPostagem() {
    
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [temas, setTemas] = useState<Tema[]>([])

    const [tema, setTema] = useState<Tema>({ id: 0, descricao: '', })
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPostagemPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarTemaPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarTemas() {

        try {
            await buscar(`/temas`, setTemas, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado' , 'info');
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarTemas()

        if (id !== undefined) {
            buscarPostagemPorId(id)
        }
    }, [id])

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema,
        })
    }, [tema])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
            usuario: usuario,
        });
    }

    function retornar() {
        navigate('/postagens');
    }

    async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id != undefined) {
            try {
                await atualizar(`/postagens`, postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                });

                toastAlerta('Postagem cadastrada com sucesso', "successo");

            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    toastAlerta('Erro ao cadastrar a Postagem', "erro");
                }
            }

        } else {
            try {
                await cadastrar(`/postagens`, postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                })

                toastAlerta('Postagem cadastrada com sucesso', "sucesso");

            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    toastAlerta('Erro ao cadastrar a Postagem', "erro");
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoTema = tema.descricao === '';





    return (
        <>
        <div className="flex flex-col justify-center items-center w-full h-[80vh]">
    <form className="flex flex-col justify-center w-1/2 border border-bege p-4 bg-cinza"
    onSubmit={gerarNovaPostagem}>
        <h1 className='text-bege font-poppins font-light text-lg'>
        {id !== undefined ? 'Editar Postagem' : 'Cadastrar Postagem'}
        </h1>
        <div className="mb-4">
            <label htmlFor="tema" className="block text-sm font-sans font-medium text-bege">Titulo:</label>
            <input
                type="text"
                id="descricao"
                name='titulo'
                placeholder="Digite seu titulo"
                required
                className="mt-1 block w-10/12 h-10 p-2 
                border border-bege rounded-md shadow-sm 
                focus:outline-none focus:ring-blue-500 focus:border-blue-500
                bg-transparent text-branco"
                value={postagem.titulo}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/> 
        </div>

        <div className="mb-4">
            <label htmlFor="tema" className="block text-sm font-sans font-medium text-bege">Texto:</label>
            <input
                type="text"
                id="texto"
                name='texto'
                placeholder="Digite seu titulo"
                required
                className="mt-1 block w-10/12 h-24 p-2 
                border border-bege rounded-md shadow-sm 
                focus:outline-none focus:ring-blue-500 focus:border-blue-500
                bg-transparent text-branco"
                value={postagem.texto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/> 
        </div>

        <div className="mb-4">
            <p className="block text-sm font-sans font-medium text-bege">Tema da postagem:</p>
            <select name="tema" id="tema" className='border bg-transparent text-branco p-2 border-slate-800 rounded'
                        onChange={(e) => buscarTemaPorId(e.currentTarget.value)}>

                        <option className="text-preto" 
                        value="" selected disabled>Selecione um Tema</option>

                        {temas.map((tema) => (
                            <>
                                <option className="text-preto" 
                                value={tema.id} >{tema.descricao}</option>
                            </>
                        ))}

                    </select>
        </div>

        <div className="flex justify-center">

        <button
                    className="w-1/2 h-full text-bege font-sans font-light border border-bege 
                    rounded-md px-4 py-2 hover:bg-bege hover:text-branco
                    transition duration-700 ease-ease"
                    type="submit"
                    disabled={carregandoTema}>

                    {isLoading ?
                        <ThreeDots 
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="three-dots-loading"
                        wrapperClass="three-dots-wrapper mx-auto"
                        color="#CDB58C"/> :
                        <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
                    }
                    
                </button>
    
        </div>
    </form>
</div>
        </>
    )
}

export default CadastrarPostagem