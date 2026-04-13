import TituloSessao from "../ui/titulo_sessao";
import Quadro from "../ui/quadro";
import FormacaoPerfil from "../ui/perfil_formacao";

export default function Formacao() {

    return (

        <div className="w-full space-y-4 flex-col">

            <TituloSessao titulo="Formação Acadêmica" />

            <div className="flex flex-wrap gap-4">

                <Quadro children={
                    <FormacaoPerfil titulo="Tecnico em Administração" 
                    tipo="Ensino medio integrado" 
                    local="Instituto Federal do Piaui - IFPI" 
                    status="Completo" 
                    inicio="2019" 
                    fim="2021" />
                } />


                <Quadro children={
                    <FormacaoPerfil titulo="Sistemas de Informação" 
                    tipo="Bacharelado" 
                    local="Universidade Federal do Piaui - UFPI" 
                    status="Cursando" 
                    inicio="2022" 
                    fim="Atual" />
                } />
                
            </div>

        </div>

    )

}