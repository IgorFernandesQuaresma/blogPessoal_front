function FormTemas() {

    return (

<div className="flex flex-col justify-center items-center w-full min-h-96">
    <form className="flex flex-col justify-center w-1/2 border border-bege p-4 bg-cinza">
        <h1 className='text-bege font-poppins font-light text-lg'>Cadastrar Tema</h1>
        <div className="mb-4">
            <label htmlFor="tema" className="block text-sm font-sans font-medium text-bege">Tema:</label>
            <input
                type="text"
                id="tema"
                name='tema'
                placeholder="Digite seu tema"
                required
                className="mt-1 block w-10/12 h-10 p-2 
                border border-bege rounded-md shadow-sm 
                focus:outline-none focus:ring-blue-500 focus:border-blue-500
                bg-transparent text-branco"/>
        </div>

        <div className="flex justify-center">
            <button className="w-1/2 h-full text-bege font-sans font-light border border-bege rounded-md px-4 py-2 hover:bg-bege hover:text-branco">
                Editar
            </button>
        </div>
    </form>
</div>

    
    )
    
}


export default FormTemas