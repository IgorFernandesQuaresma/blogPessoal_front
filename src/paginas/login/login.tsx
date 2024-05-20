import './login.css'
import bgCadastroLogin from '../../assets/bg-cadastro.jpg'

function Login () {
    return (
      <div className="" style={{ backgroundImage: `url(${bgCadastroLogin})`, 
     backgroundPosition: 'center left', 
     backgroundSize: 'cover', 
     backgroundRepeat: 'no-repeat'  }} >
        <div className="flex flex-col justify-center items-center gap-1 
        w-1/2 h-[80vh] 
        bg-gray-500 bg-opacity-75 
        p-8 mt-12 ml-10
        border border-bege">
        
              <form className="w-full">
                <h1 className='text-bege font-poppins font-light text-lg margin-negative'>Login</h1>
                <div className="mb-4">
                  <label htmlFor="usuario" className="block text-sm font-sans font-medium text-bege">Usuario:</label>
                  <input
                    type="text"
                    id="usuario"
                    placeholder="Digite seu usuario"
                    required
                    className="mt-1 block w-10/12 h-10 p-2 
                    border border-bege rounded-md shadow-sm 
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500
                    bg-transparent text-branco"
                    />
                </div>
                <div className="mb-4">
                  <label htmlFor="senha" className="block text-sm font-sans font-medium text-bege">Senha:</label>
                  <input
                    type="text"
                    id="usuario"
                    placeholder="Digite sua senha"
                    required
                    className="mt-1 block w-10/12 h-10 p-2 
                    border border-bege rounded-md shadow-sm 
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500
                    bg-transparent text-branco"
                  />
                </div>
                <div className='flex justify-center '>
                <button type="submit" className="w-64 text-bege font-sans font-light border border-bege rounded-md px-4 py-2 hover:bg-bege hover:text-branco">
                  Entrar
                </button>
                </div>
                <div className='flex justify-center'>
                    <h1 className='text-bege font-poppins font-light text-lg'>Ainda não possui cadastro? <span className='hover:text-branco'>Cadastre-se</span></h1>
                </div>
              </form>
            </div>
            </div>
    )
}

export default Login