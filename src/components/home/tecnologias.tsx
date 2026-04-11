import TituloSessao from '../ui/titulo_sessao.tsx'
import Perfil_linguagens from '../ui/perfil_linguagem.tsx'

function Tecnologias() {
    return (
        <div className='w-full space-y-4 flex-col'>
            <TituloSessao titulo="Tecnologias" />

           
            <div className="flex flex-wrap gap-4">
                <Perfil_linguagens directory="src/assets/logo_C.png" nome="C" />
                <Perfil_linguagens directory="src/assets/logo_Python.png" nome="Python" />
                <Perfil_linguagens directory="src/assets/logo_React.png" nome="React" />
                <Perfil_linguagens directory="" nome="Typescript" />
                <Perfil_linguagens directory="" nome="JavaScript" />
                <Perfil_linguagens directory="" nome="HTML" />
                <Perfil_linguagens directory="" nome="CSS" />
                <Perfil_linguagens directory="" nome="Figma" />
                <Perfil_linguagens directory="" nome="Dart" />
                
            </div>
        </div>
    )
}

export default Tecnologias