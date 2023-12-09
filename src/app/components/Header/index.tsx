import Styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <div className={Styles.Container}>
            <Image
                src="/assets/logo-techfox.svg"
                alt="Logo TechFox"
                width={70}
                height={70}
            />
            <nav className={Styles.ContainerList}>
                <ul className={Styles.List}>
                    <li>
                        <Link href="">
                            <span className={Styles.Simbol}>{"< "}</span>Home
                            <span className={Styles.Simbol}>{" / >"}</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <span className={Styles.Simbol}>{"< "}</span>Sobre
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
    );
}
