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
    <div className="w-full min-h-screen bg-center bg-cover  bg-gray-900 ">

      <BarraHome />

      <div className='p-4 space-y-4'>


       <section id="section-Sobre-Mim" className="scroll-mt-24">
          <Perfil />
        </section>

        <section id="section-Experiencias" className="scroll-mt-24">
          <Experiencias />
        </section>

        <section id="section-Formação" className="scroll-mt-24">
          <Formacao />
        </section>

        <section id="section-Tecnologias" className="scroll-mt-24">
          <Tecnologias />
        </section>

        <section id="section-Projetos" className="scroll-mt-24">
          <Projetos />
        </section>

        <section id="section-Contatos" className="scroll-mt-24">
          <Contatos />
        </section>

      </div>

    </div>
  )
}

export default Home
