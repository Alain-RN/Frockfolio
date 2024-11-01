import React, { ReactNode } from "react";
import styles from "./BodyComponent.module.css"

type BodyComponentProps = {
    children : ReactNode
}

export const BodyComponent: React.FC<BodyComponentProps> = ({children}) => {
    return(
        <div className={styles.bodyComponent}>{children}</div>
    )
}