import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import styles from "./HomePage.module.css"
import DropdownMenu from "../components/Dropdown/DropdownMenu";


const HomePage: React.FC = () => {
    return (
        <div>
            <div className={styles.homepage}>
                <HeaderComponent></HeaderComponent>
                {/* <DropdownMenu></DropdownMenu> */}
            </div>
        </div>

    );
}

export default HomePage;