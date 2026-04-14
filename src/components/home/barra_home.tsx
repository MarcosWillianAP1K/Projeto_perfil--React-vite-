

const itensBotoes = [
    { id: 'Sobre-Mim', nome: 'Sobre Mim' },
    { id: 'Experiencias', nome: 'Experiencias' },
    { id: 'Formação', nome: 'Formação' },
    { id: 'Tecnologias', nome: 'Tecnologias' },
    { id: 'Projetos', nome: 'Projetos' },
    { id: 'Contatos', nome: 'Contatos' },
];


function BarraHome() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (

        <div className='sticky top-0 z-50 w-full h-16 bg-gray-950 items-center justify-center flex space-x-4'>
            {itensBotoes.map((item) => (
                <button key={item.id} onClick={() => scrollToSection(`section-${item.id}`)} className="text-white hover:bg-gray-700 px-3 py-2 rounded">
                    {item.nome}
                </button>
            ))}
        </div>
    )
}

export default BarraHome;