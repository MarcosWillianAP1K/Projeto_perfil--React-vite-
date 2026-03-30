import './components/perfil.tsx'
import Perfil from './components/perfil.tsx'
import Linguagens from './components/linguagens/linguagens.tsx'



function App() {

  return (
    <div className="App p-4 bg-center bg-cover h-screen bg-blue-100">

      <Perfil />

      <div className=" space-x-1 space-y-1 mt-4 text-center">
        <Linguagens />

      </div>
      

    </div>
  )
}

export default App
