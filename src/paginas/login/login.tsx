import './login.css'
import bgCadastroLogin from '../../assets/bg-cadastro.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { useState, useContext, ChangeEvent, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';

function Login () {

  const navigate = useNavigate();
  
  const {usuario, handleLogin, isLoading} = useContext(AuthContext)

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin> (
    {} as UsuarioLogin
  )

  useEffect(() => {
    if (usuario.token !== "") {
        navigate('/home')
    }
}, [usuario])

  function atualizarEstado (e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin ({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }


    return (
      <div className="" style={{ backgroundImage: `url(${bgCadastroLogin})`,
     height: '800px', 
     backgroundPosition: 'center left', 
     backgroundSize: 'cover', 
     backgroundRepeat: 'no-repeat',
     padding: 15   }} >
        <div className="flex flex-col justify-center items-center gap-1 
        w-1/2 h-[80vh] 
        bg-gray-500 bg-opacity-75 
        p-8 mt-12 ml-10
        border border-bege">
        
              <form className="w-full"
              onSubmit={login}>
                <h1 className='text-bege font-poppins font-light text-lg margin-negative'>Login</h1>
                <div className="mb-4">
                  <label htmlFor="usuario" className="block text-sm font-sans font-medium text-bege">Usuario:</label>
                  <input
                    type="text"
                    id="usuario"
                    name='usuario'
                    placeholder="Digite seu usuario"
                    required
                    className="mt-1 block w-10/12 h-10 p-2 
                    border border-bege rounded-md shadow-sm 
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500
                    bg-transparent text-branco"
                    value={usuarioLogin.usuario}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} 
                    />
                </div>
                <div className="mb-4">
                  <label htmlFor="senha" className="block text-sm font-sans font-medium text-bege">Senha:</label>
                  <input
                    type="text"
                    id="usuario"
                    name='senha'
                    placeholder="Digite sua senha"
                    required
                    className="mt-1 block w-10/12 h-10 p-2 
                    border border-bege rounded-md shadow-sm 
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500
                    bg-transparent text-branco"
                    value={usuarioLogin.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
                </div>
                <div className='flex justify-center '>
                <button type="submit" 
                className="w-64 text-bege font-sans font-light border border-bege 
                rounded-md px-4 py-2 hover:bg-bege hover:text-branco">

              {isLoading ?

              <RotatingLines
                strokeColor='white'
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
                :
                  <span>Entrar</span>
              }
                </button>
                </div>
                <div className='flex justify-center'>
                    <h1 className='text-bege font-poppins font-light text-lg'>
                      Ainda não possui cadastro? 
                      <Link to = '/cadastro'>
                      <span className='hover:text-branco'> Cadastre-se</span>
                      </Link>
                      </h1>
                </div>
              </form>
            </div>
            </div>
    )
}

export default Login