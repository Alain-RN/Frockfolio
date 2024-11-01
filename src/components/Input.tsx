import React from "react";
import styles from "./Input.module.css"

type InputProps = {
    id: string
    label: string
    placeholder: string
    onChage : () => void
}

export const Input : React.FC<InputProps> = ({id, label, placeholder, onChage}) => {
    return(
        <div className={styles.inputComponent}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" onChange={onChage} placeholder={placeholder}/>
        </div>
    )
}