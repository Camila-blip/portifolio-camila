import Styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <div className={Styles.Container}>
            <Image
                src="/assets/logo-techfox.svg"
                alt="Logo TechFox"
                width={79}
                height={79}
            />
            <div className={Styles.ContainerList}>
                <ul className={Styles.List}>
                    <li>
                        <Link href="">Home</Link>
                    </li>
                    <li>
                        <Link href="">Sobre</Link>
                    </li>
                    <li>
                        <Link href="">Portifólio</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
