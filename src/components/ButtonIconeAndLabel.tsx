import React from "react";
import styles from "./ButtonIconeAndLabel.module.css"

type ButtonIconeAndLabelProps = {
    icone : string,
    label : string,
    onClick : () => void,
}
const ButtonIconeAndLabel : React.FC<ButtonIconeAndLabelProps> = ({ icone, label, onClick }) => {

    return(
        <button className={ styles.buttonIetL } onClick={onClick}>
            <img src={icone} alt="" />
            <p>{label}</p>
        </button>
    )
}
export default ButtonIconeAndLabel