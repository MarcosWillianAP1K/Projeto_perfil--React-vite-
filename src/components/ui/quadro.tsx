
interface QuadroProps {
    classname?: string;
    title?: string;
    children: React.ReactNode;
}



function Quadro({ classname="", title="", children }: QuadroProps) {
    return (

        <div className={`p-4 space-y-2 space-x-4 bg-gray-100 rounded-2xl ${classname}`}>
            <h1 className="text-lg font-bold">{title}</h1>

            {children}
        </div>
    )}


export default Quadro