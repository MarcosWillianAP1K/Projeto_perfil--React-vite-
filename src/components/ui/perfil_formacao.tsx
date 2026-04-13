

const Formacao = ({ titulo, tipo, local, status, inicio, fim } : { titulo: string, tipo: string, local: string, status: string, inicio: string, fim: string }) => {

    return (

        <div className="flex flex-col">
            <h1 className='text-lg font-bold font-mono'>{titulo}</h1>
            <p><p className="font-bold">{tipo}:</p> {local}</p>
            <p><p className="font-bold">Status:</p> {status}</p>

            <p><p className="font-bold">Período:</p> {inicio} - {fim}</p>
        </div>

    )

}

export default Formacao