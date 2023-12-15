import React from "react";
import { ReactNode } from "react";
import Styles from "./styles.module.scss";

type typeContainer = {
    children: ReactNode;
};
export default function Container({ children }: typeContainer): ReactNode {
    return <div className={Styles.Container}>{children}</div>;
}
