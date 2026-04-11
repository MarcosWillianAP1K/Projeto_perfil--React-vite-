import Perfil_linguagens from "./perfil_linguagem.tsx" 
// import WakatimeLanguages from "./wakatime.tsx";


function Linguagens(){


    return(
        <div className="space-y-2 bg-gray-100 flex-col items-start justify-content">
            
            <div className="space-x-4 space-y-2 flex-col ">
                <Perfil_linguagens directory="src/assets/logo_C.png" string="C" />
                <Perfil_linguagens directory="src/assets/logo_Python.png" string="Python" />
                <Perfil_linguagens directory="src/assets/logo_React.png" string="React" />

                {/* <WakatimeLanguages /> */}

            </div>

        </div>
    )
}

export default Linguagens