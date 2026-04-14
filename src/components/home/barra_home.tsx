

const itensBotoes = [
    { id: 1, nome: 'Sobre Mim' },
    { id: 2, nome: 'Experiencias' },
    { id: 3, nome: 'Formação' },
    { id: 4, nome: 'Tecnologias' },
    { id: 5, nome: 'Projetos' },
    { id: 6, nome: 'Contatos' },
];


function BarraHome() {

    return (

        <div className='w-full h-20 bg-gray-950 items-center justify-center flex space-x-4'>

            {itensBotoes.map((item) => (
                <button key={item.id} className="text-white hover:bg-gray-700">
                    {item.nome}
                </button>
            ))}



        </div>

    )
}


export default BarraHome