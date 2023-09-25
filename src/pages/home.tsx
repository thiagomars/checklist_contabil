import Botao from "../components/Botao";
import Box from "../components/Box";


export default function Home() {


    return (
        <>
            <h1>Home</h1>
            <Box
                titulo="Página Inicial"
                buttons={
                    <>
                        <Botao
                            texto="Adicionar"
                        />
                        <Botao
                            texto="Remover"
                        />
                    </>
                }
            >
                <p>algo aqui</p>
                <p>algo aqui</p>
            </Box>
        </>
    )
}