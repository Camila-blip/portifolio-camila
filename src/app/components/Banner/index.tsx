import React from "react";
import Styles from "./styles.module.scss";
import { ReactNode } from "react";
import Image from "next/image";
// import ImagemBanner from "/assets/imagem-banner.jpg";

export default function Banner(): ReactNode {
    return (
        <>
            <div className={Styles.Banner}>
                <Image
                    src="/assets/imagem-banner.jpg"
                    width={500}
                    height={300}
                    alt="Imagem de um teclado de laptop com código de programação em uma tela."
                />
            </div>
            <div className={Styles.Text}>
                <h1>Olá, eu sou Camila Moura</h1>
            </div>
            <div className={Styles.Grid}>
                <div>
                    <span>Web Developer</span>
                    <span>Front-end Developer</span>
                    <span>FullStack Developer</span>
                </div>
                <div></div>
            </div>
        </>
    );
}
