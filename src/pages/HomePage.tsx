import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import { BodyComponent } from "../components/BodyComponent";
import shirt from "../assets/shirt.png"
import styles from "./HomePage.module.css"



const HomePage: React.FC = () => {
    return (
        <div className={styles.homepage}>
            <HeaderComponent></HeaderComponent>
            <BodyComponent>
                {/* <p>Rechercher des articles sur TrendSpace</p> */}
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>           
                <ProductCard></ProductCard>
                
                <CategoryCard onClick={() => { alert("Vetement") }} categoryIcon={shirt} categoryName="Vêtements"></CategoryCard>
            </BodyComponent>
        </div>
    );
}

export default HomePage;