import './components/perfil.tsx'
import Perfil from './components/perfil.tsx'
import Linguagens from './components/linguagens/linguagens.tsx'
import Quadro from './components/quadro.tsx'



function App() {

  return (
    <div className="App p-4 w-full h-full bg-center bg-cover  bg-blue-100 ">

      <Perfil />


      <div className='space-x-4 space-y-1 mt-4 justify-center flex'>
        <Quadro classname="w-80 h-100" title="Sobre mim" children={null} />

        <Quadro classname="w-80 h-100" title="Experiência Profissional" children={null} />        

        <Quadro classname="w-80 h-100" title="Escolaridade" children={null} />


      </div>

      <div className='space-x-4 space-y-1 mt-4 justify-center flex'>
        <Quadro classname="w-80 h-100" title="Idiomas" children={null} />

        <Quadro classname="w-80 h-100" title="Habilidades" children={null} />        

        <Quadro classname="w-80 h-100" title="Contatos" children={null} />


      </div>


      <div className='space-x-4 space-y-1 mt-4 justify-center flex'>
        <Quadro classname="h-100" title="Certificados" children={Linguagens()} />

        <Quadro classname="w-80 h-100" title="Linguagens" children={null} />

        <Quadro classname="w-100 h-100" title="Projetos" children={null} />

      </div>


      




    </div>
  )
}

export default App
