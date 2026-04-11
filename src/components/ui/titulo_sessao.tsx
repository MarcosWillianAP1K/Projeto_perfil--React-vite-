

const TituloSessao = ({ titulo = "Título da Sessão" }: { titulo: string }) => {
    return (
        <div className='w-full border-b-3 border-b-gray-50 p-2'>
            <h2 className='text-3xl font-bold   text-gray-50'>{titulo}</h2>
        </div>
    )
}

export default TituloSessao