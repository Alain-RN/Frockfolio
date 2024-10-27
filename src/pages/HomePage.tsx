import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import ProductCard from "../components/ProductCard";
import styles from "./HomePage.module.css"


const HomePage: React.FC = () => {
    return (
        <div>
            <div className={styles.homepage}>
                <HeaderComponent></HeaderComponent>
                <ProductCard></ProductCard>
            </div>
        </div>

    );
}

export default HomePage;