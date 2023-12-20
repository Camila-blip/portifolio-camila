import React from "react";
import Styles from "./styles.module.scss";
import { Title, Container, LinhaLaranja } from "../components";
import Fatos from "./fatos";
import Descricao from "./descricao";
import { PDescricao, SpanFatos } from "./ListaFatos";

export default function Sobre(): React.ReactNode {
    return (
        <>
            <Container>
                <Title component="Title" title="Sobre mim" />
                <Descricao PDescricao={PDescricao} />
            </Container>
            <LinhaLaranja />
            <Container>
                <Title component="Title" title="Fatos aleatórios" />
                <Fatos spanFatos={SpanFatos} />
                <div className={Styles.Title}>
                    <h2>Obrigada por visitar meu portfólio!</h2>
                </div>
            </Container>
            <LinhaLaranja />
        </>
    );
}
