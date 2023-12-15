import { Title, Container, LinhaLaranja } from "../components";
import Fatos from "./fatos";
import Descricao from "./descricao";
export default function Sobre(): React.ReactNode {
    return (
        <>
            <Container>
                <Title component="Title" title="Sobre mim" />
                <Descricao />
            </Container>
            <LinhaLaranja />
            <Container>
                <Title component="Title" title="Fatos aleatórios" />
                <Fatos />
            </Container>
        </>
    );
}
