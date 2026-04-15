// 1. Mudei o nome da prop 'string' para 'nome'. 
// Usar palavras reservadas da linguagem (como string, number, class) como nome de variável pode causar bugs estranhos futuramente.
interface PerfilProps {
    directory: string;
    nome: string; 
}

function Perfil_linguagens({ directory, nome }: PerfilProps) { 
    const imagemPadrao = "src/assets/sem_imagem.png"; 
    const imagemFinal = directory === "" ? imagemPadrao : directory;
    
    return (
       
        <div className="w-fit space-x-2 flex text-center justify-start items-center pr-2">
            <div className="w-11 h-10 overflow-hidden rounded-xl shrink-0">
                <img src={imagemFinal} alt={`Logo ${nome}`} className="object-cover w-full h-full" />
            </div> 
            
            <span className="text-lg text-gray-50 font-serif">{nome}</span>
        </div>
    );
}

export default Perfil_linguagens;