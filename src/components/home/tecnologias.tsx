import Quadro from '../ui/quadro.tsx'
import Linguagens from './linguagens/linguagens.tsx'


function Tecnologias(){

    return(

        <div className='w-full space-y-4 flex-col'>
          <div className='w-full border-b-3 border-b-gray-50 p-2'>
            <h2 className='text-3xl font-bold   text-gray-50'>Tecnologias</h2>
          </div>

          <div className='flex '>

            <Quadro classname='' title='Linguagens' children={Linguagens()} />
              
          </div>
          

        </div>

    )

}



export default Tecnologias