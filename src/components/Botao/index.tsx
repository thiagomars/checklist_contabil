

type Props = {
    tipo?: "success" | "erro";
    texto?: string;
}

export default function Botao(props: Props){

    const { tipo, texto } = props;

    return (
        <button 
            className="py-2 px-3 shadow rounded-md bg-green-600 text-white font-semibold text-sm hover:bg-green-700"
        >
            {texto} {tipo}
        </button>
    )
}