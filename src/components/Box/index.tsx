


type Props = {
    titulo: string;
    subtitulo?: string;
    children?: JSX.Element | Array<JSX.Element>;
    buttons?: JSX.Element | Array<JSX.Element>;
}

export default function Box(props: Props) {

    const { titulo, children, buttons, subtitulo } = props;

    return (
        <section className="bg-white p-4 rounded-md shadow w-full">
            <div className="border-b pb-2 mb-2 flex flex-row justify-between items-center">
                <div>
                    <h1 className="w-full font-semibold text-lg py-1">{titulo}</h1>
                    <h2 className="">{subtitulo}</h2>
                </div>
                <div className="w-fit flex flex-row gap-2">
                    {buttons}
                </div>
            </div>

            {children}
        </section>
    )
}