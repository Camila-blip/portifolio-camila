import React from "react";
import Styles from "./styles.module.scss";
import { ReactNode } from "react";
import Image from "next/image";

export default function Banner(): ReactNode {
    const skills = [
        { id: 1, role: "Web developer" },
        { id: 2, role: "Front-end Developer" },
        { id: 1, role: "FullStack Developer" },
    ];

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
            <div className={Styles.Title}>
                <h1>Olá, eu sou Camila Moura</h1>
            </div>
            <div className={Styles.Grid}>
                <div className={Styles.List}>
                    {skills.map((role) => (
                        <span key={role.id}>{role.role}</span>
                    ))}
                </div>
                <div className={Styles.Avatar}>
                    <Image
                        width={200}
                        height={200}
                        src="/assets/camilaAvatar.jpg"
                        alt="Avatar de uma mulher desenvolvedora trabalhando em seu notebook, tomando um café e ao seu lado um gato preto sentado em sua mesa."
                    />
                </div>
            </div>
            <div className={Styles.Text}>
                <span>Estudande de Arquitetura de Software</span>
            </div>
        </>
    );
}
