import React from "react";
import Styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { LinhaLaranja } from "..";
export default function Header(): ReactNode {
    return (
        <>
            <div className={Styles.Container}>
                <div>
                    <Image
                        className={Styles.img}
                        src="/assets/logo-techfox.svg"
                        alt="Logo TechFox"
                        width={60}
                        height={60}
                    />
                </div>
                <nav className={Styles.ContainerList}>
                    <ul className={Styles.List}>
                        <li>
                            <Link href="">
                                <span className={Styles.Simbol}>{"< "}</span>
                                Home
                                <span className={Styles.Simbol}>{" / >"}</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <span className={Styles.Simbol}>{"< "}</span>
                                Sobre
                                <span className={Styles.Simbol}>{" / >"}</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <span className={Styles.Simbol}>{"< "}</span>
                                Portifólio
                                <span className={Styles.Simbol}>{" / >"}</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <LinhaLaranja />
        </>
    );
}
