

// Definimos o tipo das propriedades (boa prática em TS)
interface PerfilProps {
    directory: string;
    string: string;
}

function Perfil_linguagens({ directory, string }: PerfilProps) { // Usamos { } para "pegar" a variável
    return (
        <div className="w-full h-full space-x-2 flex rounded-2xl text-center justify-start items-center">
            <div className="w-8 h-8 bg-gray-100 rounded-2xl overflow-hidden">
                <img src={directory}  className="w-full h-full object-cover" />
            </div>
            <span className="text-xs text-gray-600 ">{string}</span>
        </div>
        
    );
}

export default Perfil_linguagens

