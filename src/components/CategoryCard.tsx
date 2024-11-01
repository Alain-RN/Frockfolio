import React from "react";
import styles from "./CategoryCard.module.css"

type CategoryCardProps = {
    categoryName : string,
    categoryIcon : string,
    onClick : () => void
}

const CategoryCard: React.FC<CategoryCardProps> = ({categoryName, categoryIcon, onClick}) => {
    return (
        <div className={styles.categoryCard} onClick={onClick}>
            <img src={categoryIcon} alt="" />
            <p>{categoryName}</p>
        </div>
    );
}

export default CategoryCard;