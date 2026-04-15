

const PerfilProjeto = ({titulo, descricao, directory, url} : {titulo: string, descricao: string, directory: string, url: Record<string, string>}) => {

    const directoryDefault = "src/assets/sem_imagem.png";
    if (!directory) {
        directory = directoryDefault;
    }

    return (

        <div>
            <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                <img src={directory} alt={titulo} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold mt-4">{titulo}</h3>
            <p className="text-gray-600 mt-2">{descricao}</p>
            <div className="flex space-x-4 mt-4">
                {Object.entries(url).map(([name, link]) => (
                    <a key={name} href={link} className="hover:-translate-1 hover:bg-gray-200  rounded-xl p-1 text-blue-500" target="_blank" rel="noopener noreferrer">
                        {name}
                    </a>
                ))}
            </div>

        </div>

    )

}

export default PerfilProjeto