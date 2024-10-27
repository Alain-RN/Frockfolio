import React from 'react';
import styles from "./ButtonComponent.module.css"
import more from "../assets/more.png"

type ButtonComponentProps = {
    label : string,
    onClick : () => void,
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ label, onClick }) => {
    return (
        <button className= {styles.customButton} onClick={onClick}>
            <img src={more} alt="" />
            <p>{label}</p>
        </button>
    );
}

export default ButtonComponent;