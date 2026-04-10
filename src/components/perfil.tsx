



function Perfil() {

    return (
        <div className="p-4 space-x-6 w-full h-160 flex items-center rounded-2xl">
            <div className="w-130 h-130 border-4 border-gray-100 bg-white  flex-col items-center justify-center rounded-2xl">
                <img src="src\assets\foto_perfil.png" alt="Foto de perfil" className="rounded-2xl"  />
            </div>

            <div className="flex-col items-start w-230">
                <h2 className="text-2xl font-bold text-gray-50">Ola, sou Marcos Willian de Sousa e Silva...</h2>

                <p className="text-gray-100">Desenvolvedor Full Stack proativo, com forte habilidade de trabalho em equipe. Sou comprometido com a qualidade do código, comunicativo e sempre em busca de soluções inovadoras. Adaptável, dedicado e motivado a entregar resultados excepcionais.    </p>

            </div>  


        </div>
    )
}


export default Perfil
