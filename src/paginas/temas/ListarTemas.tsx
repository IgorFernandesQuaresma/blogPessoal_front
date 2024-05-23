import { useNavigate } from "react-router-dom"
import CardTemas from "../../components/cardTemas/CardTemas"
import { useState, useContext, useEffect } from "react"
import Tema from "../../models/Tema"
import { AuthContext } from "../../contexts/AuthContext"
import { buscar } from "../../service/Service";
import { ThreeDots } from "react-loader-spinner"
import './Temas.css'



function Temas() {

    const navigate = useNavigate()

    const [temas, setTemas] = useState<Tema[]>([])

    const {usuario, handleLogout} = useContext(AuthContext)

    const token = usuario.token

    async function buscarTemas() {
        try {
            await buscar(`/temas`, setTemas, {
                headers: {Authorization:token}
            })
        }catch (error: any){
            if (error.toString().includes('401')) {
                //alert("Token expirou!")
                handleLogout()
            }
        }

    }

    useEffect(() => {
        if (token === '') {
            alert('Você preisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarTemas()
    }, [temas.length])

    return (

        <div className="flex justify-center w-full my-4"> 
        <div className="flex flex-wrap justify-center">
            <>
            
            {temas.length ===0 && (
                
            <ThreeDots 
                visible={true}
                height="80"
                width="80"
                ariaLabel="three-dots-loading"
                wrapperClass="three-dots-wrapper mx-auto"
                color="#CDB58C"
            />
               
            )}

            { temas.map ((tema)=> (
                 <>
                 <CardTemas key={tema.id} tema ={tema}/>
                 </>
            ))}


            </>
        
        </div> 
        </div>
    )
}


export default Temas