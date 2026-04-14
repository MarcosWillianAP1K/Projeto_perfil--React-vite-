import TituloSessao from "../ui/titulo_sessao"
import Perfil_linguagens from "../ui/perfil_linguagem"


const itensContatos = [
    { id: 1, nome: "Email", directory: "", href: "mailto:example@email.com" },
    { id: 2, nome: "GitHub", directory: "", href: "https://github.com/example" },
    { id: 3, nome: "Instagram", directory: "", href: "https://instagram.com/example" },
    { id: 4, nome: "Discord", directory: "", href: "https://discord.com/users/example" },
];


function Contatos() {

    return (
        <div>

            <TituloSessao titulo="Contatos" />

            <div className="flex flex-col p-2 space-y-3">

                {itensContatos.map((item) => (
                    <div key={item.id} className="w-fit">
                        <a href={item.href} target="_blank" rel="noopener noreferrer">
                            <Perfil_linguagens nome={item.nome} directory={item.directory} />
                        </a>
                    </div>
                ))}

            </div>

        </div>

    )

}


export default Contatos