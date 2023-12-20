import React from "react";
import Image from "next/image";
import Styles from "./styles.module.scss";

interface TypeFatos {
    spanFatos: string[];
}

export default function Fatos({ spanFatos }: TypeFatos): React.ReactNode {
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
            <div className={Styles.Fatos_Content}>
                {spanFatos.map((data, index) => (
                    <span data-testid={`data-${index}`} key={index}>
                        {data}
                    </span>
                ))}
            </div>
        </div>
    );
}
