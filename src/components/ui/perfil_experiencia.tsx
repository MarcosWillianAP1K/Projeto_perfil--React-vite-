


const PerfilExperiencia = ({ titulo, descricao } : { titulo: string; descricao: string }) => {
    return (
        <div className="flex flex-wrap">
            <h1 className='text-lg font-bold font-mono'>{titulo}</h1>
            <p>{descricao}</p>
        </div>

    )

}

export default PerfilExperiencia