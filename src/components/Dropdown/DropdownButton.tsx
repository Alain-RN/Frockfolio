import React from "react";
import DownIcone from "../../assets/down.png"
import styles from "./Dropdown.module.css"

type dropdownButton = {
    dropdownBtnRef: React.RefObject<HTMLButtonElement>;
    toggleDropdown: () => void
}

const DropdownButton: React.FC<dropdownButton> = ({dropdownBtnRef, toggleDropdown}) => {
    return(
        <button ref={dropdownBtnRef } className={ styles.dropdownButton } onClick={toggleDropdown}>
            <p>Catégories</p>
            <img src={ DownIcone }/>
        </button>
    )
}

export default DropdownButton