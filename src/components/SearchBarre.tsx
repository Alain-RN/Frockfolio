import React from 'react';
import SearchIcone from "../assets/search.png"
import styles from "./SearchBarre.module.css"

const SearchBarre: React.FC =() => {
    return (
        <div className={styles.searchBarre}>
            <input type="text" id='input' placeholder='Rechercher sur TrendSpace'/>
            <label htmlFor={"input"}>
                <img src={SearchIcone} alt="" />
            </label>

        </div>
    );
}

export default SearchBarre;