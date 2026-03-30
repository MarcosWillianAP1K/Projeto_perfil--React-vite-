import Perfil_linguagens from "./perfil_linguagens.tsx" 


function Linguagens(){


    return(
        <div className="p-4 w-60 h-100 bg-gray-100 flex items-start justify-content rounded-2xl">
            
            <div className="space-x-4 space-y-2 flex-col ">
                <Perfil_linguagens directory="src/assets/foto_perfil.png" string="Lindooooooooooooo" />
                <Perfil_linguagens directory="src/assets/logo_C.png" string="C" />
                <Perfil_linguagens directory="src/assets/logo_Python.png" string="Python" />
                <Perfil_linguagens directory="src/assets/logo_React.png" string="React" />

            </div>

        </div>
    )
}

export default Linguagens