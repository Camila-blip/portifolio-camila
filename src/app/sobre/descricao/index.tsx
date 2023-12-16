import Styles from "./styles.module.scss";

interface TypeDescricao {
    PDescricao: string[];
}

export default function Descricao({
    PDescricao,
}: TypeDescricao): React.ReactNode {
    return (
        <>
            {PDescricao.map((data, index) => (
                <p className={Styles.Paragrafo} key={index}>
                    {data}
                </p>
            ))}
        </>
    );
}
