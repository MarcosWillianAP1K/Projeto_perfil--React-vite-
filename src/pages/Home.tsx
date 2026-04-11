import '../components/home/perfil.tsx'
import Perfil from '../components/home/perfil.tsx'
import Tecnologias from '../components/home/tecnologias.tsx'
import BarraHome from '../components/home/barra_home.tsx' 
import Experiencias from '../components/home/experiencias.tsx'



function Home() {

  return (
    <div className="w-full h-full bg-center bg-cover  bg-gray-900 ">

      <BarraHome />

      <div className='p-4'>

        <Perfil />

        <Experiencias />

        <Tecnologias />


      </div>

    </div>
  )
}

export default Home
