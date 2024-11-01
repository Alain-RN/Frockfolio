import React from "react";
import styles from "./Login.module.css"
import { Input } from "./Input";


export const Login: React.FC = ()=> {
    return(
        <div className={styles.login}>
            <h2>Bonjour !</h2>
            <p>Connectez-vous pour beneficier de nos services</p>
            <Input id="email" onChage={()=>{}} placeholder="Exemple@gmail.com" label="E-mail*"></Input>
        </div>
    )
}