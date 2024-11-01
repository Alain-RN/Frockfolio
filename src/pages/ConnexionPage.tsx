import React from "react";
import styles from "./ConnexionPage.module.css"
import { Login } from "../components/Login";

export const ConnexionPage : React.FC = ()=> {
    return(
        <div className={styles.connexionPage}>
            <Login></Login>
        </div>
    )
}