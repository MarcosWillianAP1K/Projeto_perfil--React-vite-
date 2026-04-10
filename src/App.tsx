import './components/perfil.tsx'
import Perfil from './components/perfil.tsx'
import Linguagens from './components/linguagens/linguagens.tsx'
import Quadro from './components/quadro.tsx'
import BarraHome from './components/barra_home.tsx' 



function App() {

  return (
    <div className="App w-full h-full bg-center bg-cover  bg-gray-900 ">

      <BarraHome />

      <div className='p-4'>

        <Perfil />


        <div className='w-full space-y-4 flex-col'>
          <div className='w-full border-b-3 border-b-gray-50 p-2'>
            <h2 className='text-3xl font-bold   text-gray-50'>Tecnologias</h2>
          </div>

          <div className='flex'>

            <Quadro classname='' title='Linguagens' children={Linguagens()} />
              
          </div>
          

        </div>


      </div>




    </div>
  )
}

export default App
