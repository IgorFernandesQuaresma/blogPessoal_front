import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../service/Service";
import { useNavigate } from "react-router-dom";
import "./cadastro.module.css"
import bgCadastroLogin from '../../assets/bg-cadastro.jpg'


    
function Cadastro() {

    const navigate = useNavigate()
    const [confirmaSenha, setConfirmaSenha] = useState<string>('')

    const [usuario, setUsuario] = useState <Usuario> ({
        id: 0,
        nome:'',
        usuario:'',
        senha:'',
        foto:'',
    })

    useEffect(() => {
        if (usuario.id !== 0) {
            retornar();
        }
    }, [usuario])

    function retornar() {
        navigate('/')
    }

    function atualizarEstado (e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario, 
            [e.target.name]: e.target.value,
        })
    }

    function handleConfirmarSenha (e: ChangeEvent <HTMLInputElement>) {
        setConfirmaSenha(e.target.value)
        console.log(confirmaSenha)
    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8)  {
            try {
                await cadastrarUsuario (`/usuarios/cadastrar`, usuario, setUsuario)
                alert('Usuario cadastrado com sucesso')
            } catch (error) {
                alert ("Erro ao cadastrar usuario")
            }
        } else {
            alert("Dados errados tente novamente")
            setUsuario({...usuario, senha: ''});
            setConfirmaSenha('') 
        }
    }
    

    console.log(JSON.stringify(usuario))
     
  return (
    <div className="" style={{ backgroundImage: `url(${bgCadastroLogin})`, 
    height: '800px',
     backgroundPosition: 'center left', 
     backgroundSize: 'cover', 
     backgroundRepeat: 'no-repeat',
     padding: 15  }} >
      <div
          id="cadastro"
          className="flex flex-col justify-center items-center gap-1 
        w-1/2 h-[80vh] 
        bg-gray-500 bg-opacity-75 
        p-8 mt-6 ml-10
        border border-bege"
      >
          <form className="w-full"
          onSubmit={cadastrarNovoUsuario}>
              <h1 className="text-bege font-poppins font-light text-lg margin-negative">
                  Cadastre-se
              </h1>
              <div className="mb-4">
                  <label
                      htmlFor="nome"
                      className="block text-sm font-sans font-medium text-bege">Nome:</label>
                  <input
                      type="text"
                      id="nome"
                      name="nome"
                      placeholder="Digite seu nome"
                      required
                      className="mt-1 block w-10/12 h-10 p-2 
            border border-bege rounded-md shadow-sm 
            focus:outline-none focus:ring-blue-500 focus:border-blue-500
            bg-transparent text-branco"
                      value={usuario.nome}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
              </div>
              <div className="mb-4">
                  <label
                      htmlFor="usuario"
                      className="block text-sm font-sans font-medium text-bege">Usuário:</label>
                  <input
                      type="text"
                      id="usuario"
                      name="usuario"
                      placeholder="Digite seu usuário"
                      required
                      className="mt-1 block w-10/12 h-10 p-2 
            border border-bege rounded-md shadow-sm 
            focus:outline-none focus:ring-blue-500 focus:border-blue-500
            bg-transparent text-branco"
                      value={usuario.usuario}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
              </div>

              <div className="mb-4">
                  <label
                      htmlFor="senha"
                      className="block text-sm font-sans font-medium text-bege">Senha:</label>
                  <input
                      type="password"
                      id="senha"
                      name="senha"
                      placeholder="Digite sua senha"
                      required
                      className="mt-1 block w-10/12 h-10 p-2 
            border border-bege rounded-md shadow-sm 
            focus:outline-none focus:ring-blue-500 focus:border-blue-500
            bg-transparent text-branco"
                      value={usuario.senha}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
              </div>

              <div className="mb-4">
                  <label
                      htmlFor="confirmar-senha"
                      className="block text-sm font-sans font-medium text-bege">Confirmar senha:</label>
                  <input
                      type="password"
                      id="confirmar-senha"
                      name="confirmar-senha"
                      placeholder="Digite sua senha"
                      required
                      className="mt-1 block w-10/12 h-10 p-2 
                 rounded-md shadow-sm 
            focus:outline-none focus:ring-blue-500 focus:border-blue-500
            bg-transparent text-branco"
                    value={confirmaSenha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                  />
              </div>

              <div className="flex justify-start gap-3 ">
                  <button
                      type="submit"
                      className="w-64 text-bege font-sans font-light border border-bege 
                      rounded-md px-4 py-2 hover:bg-bege hover:text-branco"
                  >
                            Cadastrar
                  </button>
                  <button
                      type="submit"
                      className="w-64 text-bege font-sans font-light border border-bege rounded-md px-4 py-2 hover:bg-bege hover:text-branco"
                      onClick={retornar}
                  >
                            Cancelar
                  </button>
              </div>
          </form>
      </div>
      </div>
  );
}



export default Cadastro;
