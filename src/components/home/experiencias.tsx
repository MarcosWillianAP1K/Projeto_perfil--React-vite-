import TituloSessao from '../ui/titulo_sessao.tsx'
import Quadro from '../ui/quadro.tsx'
import PerfilExperiencia from '../ui/perfil_experiencia.tsx'



function Experiencias() {
    return (
        <div className='w-full space-y-4 flex-col'>
            <TituloSessao titulo="Experiencias" />

            <Quadro children={
                
                <ul className="list-disc p-4 flex flex-wrap gap-4">
                    <li>
                        <PerfilExperiencia titulo="Monitor UFPI:" descricao="Atuação como monitor do curso Sistema de Informações, nas materias de algoritmos 1 e 2, e duas vezes em Estrutura de dados 1. Agindo como auxiliar no desenvolvimento de atividades práticas e oferecendo suporte aos alunos com monitorias e tirar dúvidas." />
                    </li>

                    <li>
                        <PerfilExperiencia titulo="Cartorio:" descricao="Atuação como estagiario, digitanlizando documentos e auxiliando em outras tarefas com excel, assistencia aos funcionarios e outras atividades." />
                    </li>

                </ul>

                    
            } />

        </div>
    )
}

export default Experiencias