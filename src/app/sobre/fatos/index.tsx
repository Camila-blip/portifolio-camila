import Image from "next/image";
import Styles from "./styles.module.scss";

export default function Fatos(): React.ReactNode {
    return (
        <div className={Styles.Fatos}>
            <div>
                <Image
                    src="/assets/cat.png"
                    alt={"cat"}
                    width={400}
                    height={400}
                />
            </div>
            <div>
                <span>Amante de gatos 🐾</span>

                <span>Apaixonado por música eletrônica 🎶</span>

                <span>Gamer no PS4 e PC 🎮</span>

                <span>Skatista de fim de semana 🛹</span>

                <span>Exploradora com meus cachorros 🐕</span>

                <span>Apreciadora de café matinal ☕</span>

                <span>Motociclista nas horas vagas 🏍️</span>
            </div>
        </div>
    );
}
