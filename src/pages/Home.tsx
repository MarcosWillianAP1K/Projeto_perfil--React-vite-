import '../components/home/perfil.tsx'
import Perfil from '../components/home/perfil.tsx'
import Tecnologias from '../components/home/tecnologias.tsx'
import BarraHome from '../components/home/barra_home.tsx' 
import Experiencias from '../components/home/experiencias.tsx'
import Projetos from '../components/home/projetos.tsx'
import Contatos from '../components/home/contatos.tsx'
import Formacao from '../components/home/formacao.tsx'



function Home() {

  return (
    <div className="w-full h-full bg-center bg-cover  bg-gray-900 ">

      <BarraHome />

      <div className='p-4 space-y-4'>

        <Perfil />

        <Experiencias />

        <Formacao />

        <Tecnologias />

        <Projetos />

        <Contatos />


      </div>

    </div>
  )
}

export default Home
