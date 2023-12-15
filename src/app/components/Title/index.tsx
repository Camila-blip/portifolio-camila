import React, { ReactNode } from "react";
import Styles from "./styles.module.scss";

type TypeTitle = {
    component: string;
    title: string;
};

export default function Title({ component, title }: TypeTitle): ReactNode {
    return (
        <h1 className={Styles.Title}>
            <strong>
                {"<"}
                {component} text="
            </strong>
            {title}
            <strong>"/{">"}</strong>
        </h1>
    );
}
