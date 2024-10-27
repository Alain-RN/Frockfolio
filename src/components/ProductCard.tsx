import React from "react";
import styles from "./ProductCard.module.css"
import NormalButton from "./NormalButton";
import ExplImg from "../assets/Exemple.jpg";
import Profile from "../assets/user.png"
import FavIcone from "../assets/heart.png"

const ProductCard: React.FC = () => {
    return(
        <div className={styles.productCard}>
            {/* Profile and name */}
            <div className={styles.profileName}>
                <img src={Profile} alt="" className={styles.profile}/>
                <p>Name</p>
            </div>
            <div className={styles.productAndFav}>
                <img className={styles.favIcone} src={FavIcone} alt=""/>
                <img src={ExplImg} className={styles.product} alt="" />
            </div>
            <p>Title</p>
            <h3>Price</h3>
            <NormalButton onClick={()=>{}} name="Ajouter au panier"></NormalButton>
        </div>
    )
}

export default ProductCard