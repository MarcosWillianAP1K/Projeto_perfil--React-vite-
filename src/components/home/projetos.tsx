import { useRef } from "react";
import Quadro from "../ui/quadro";
import TituloSessao from "../ui/titulo_sessao";
import PerfilProjeto from "../ui/perfil_projeto";

// 1. Array apenas com os DADOS. Muito mais fácil de manter!
const dadosProjetos = [
    {
        id: 1,
        titulo: "Agente de IA Terapêutico",
        descricao: "Ferramenta com ajuste em tempo real para complementar terapias tradicionais.",
        links: { "GitHub": "", "Demo": "" },
    },
    {
        id: 2,
        titulo: "Automação com n8n e Supabase",
        descricao: "Integração de banco de dados e fluxos de trabalho eficientes.",
        links: { "GitHub": "", "Demo": "" },
    },
    {
        id: 3,
        titulo: "Projeto 3",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        links: { "GitHub": "", "Demo": "" },

    },
    {
        id: 4,
        titulo: "Projeto 4",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        links: { "GitHub": "", "Demo": "" },
    },
    {
        id: 5,
        titulo: "Projeto 5",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        links: { "GitHub": "", "Demo": "" },
    },
    {
        id: 6,
        titulo: "Projeto 6",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        links: { "GitHub": "", "Demo": "" },
    },
    {
        id: 7,
        titulo: "Projeto 7",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        links: { "GitHub": "", "Demo": "" },
    },
    {
        id: 8,
        titulo: "Projeto 8",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        links: { "GitHub": "", "Demo": "" },
    },
    
];

function Projetos() {
    // 2. O useRef é um hook que nos permite "pegar" o elemento HTML (a div) para controlá-la com JavaScript
    const carrosselRef = useRef<HTMLDivElement>(null);

    const rolarParaEsquerda = () => {
        if (carrosselRef.current) {
            // Rola 350 pixels para a esquerda de forma suave
            carrosselRef.current.scrollBy({ left: -500, behavior: 'smooth' });
        }
    };

    const rolarParaDireita = () => {
        if (carrosselRef.current) {
            // Rola 350 pixels para a direita de forma suave
            carrosselRef.current.scrollBy({ left: 500, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full flex flex-col space-y-4">
            <TituloSessao titulo="Projetos" />

            {/* 1. Removi o 'relative' e mantive o flex e items-center para alinhar tudo ao meio */}
            <div className="flex flex-row items-center w-full gap-4">
                
                {/* 2. Botão Anterior: Removi o absolute, left-0 e z-10. Mudei para rounded-lg normal. Adicionei shrink-0. */}
                <button 
                    onClick={rolarParaEsquerda} 
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 opacity-90 shrink-0"
                >
                    &lt;
                </button>

                {/* 3. Carrossel: Adicionei o 'flex-1' para ele ocupar o meio da tela. 
                    (Dica: removi um "o" perdido que estava no seu className antes do gap-6) */}
                <div 
                    ref={carrosselRef}
                    className="flex-1 flex overflow-x-auto gap-6 py-4 scrollbar-estilizada scroll-smooth"
                >
                    {dadosProjetos.map((projeto) => (
                        <div key={projeto.id} className="w-75 shrink-0">
                            {/* Alteração rápida: Fechando o Quadro corretamente envolvendo o filho */}
                            <Quadro>
                                <PerfilProjeto titulo={projeto.titulo} descricao={projeto.descricao} directory="" url={projeto.links} />
                            </Quadro>
                        </div>
                    ))}
                </div>

                {/* 4. Botão Próximo: Removi o absolute, right-0 e z-10. Mudei para rounded-lg normal. Adicionei shrink-0. */}
                <button 
                    onClick={rolarParaDireita} 
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 opacity-90 shrink-0"
                >
                    &gt;
                </button>

            </div>
        </div>
    );
}

export default Projetos;