import { useNavigate } from 'react-router-dom';
import { buscar } from '../../service/Service';
import './Postagem.css'
import Postagem from '../../models/Postagem';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ThreeDots } from 'react-loader-spinner';
import CardPostagem from '../../components/cards/CardPostagem';
import { toastAlerta } from '../../utils/ToastAlerta';


function Postagens() {

    const navigate = useNavigate();

    const [postagens, setPostagens] = useState<Postagem[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);

    const token = usuario.token;

    async function buscarPostagens() {
        try {
            await buscar('/postagens', setPostagens, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', "info")
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info')
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarPostagens()
    }, [postagens.length])
    

    return (
        <div className="flex justify-center w-full my-4"> 
        <div className="flex flex-wrap justify-center">

            <>
            {postagens.length ===0 && (
                
                <ThreeDots 
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="three-dots-loading"
                    wrapperClass="three-dots-wrapper mx-auto"
                    color="#CDB58C"/>
                )} 

            <div className='container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
            >
                {postagens.map((postagem) => (
                    <CardPostagem key={postagem.id} postagem={postagem} />
                ))}

            </div>

            </>
        </div> 
        </div>
    )
    
}

export default Postagens