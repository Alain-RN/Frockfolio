import React, { useEffect, useRef, useState } from "react";
import styles from "./HeaderComponent.module.css";
import DropdownButton from "./Dropdown/DropdownButton";
import DropdownMenu from "./Dropdown/DropdownMenu";
import ButtonComponent from "./ButtonComponent";
import ButtonIconeAndLabel from "./ButtonIconeAndLabel";
import ProfileIcone from "../assets/user.png";
import BagIcone from "../assets/panier.png";
import FavorisIcone from "../assets/heart.png";
import SearchBarre from "./SearchBarre";

const HeaderComponent: React.FC = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownBtnRef = useRef<HTMLButtonElement | null>(null);

  const toggleleDropdown = ():void => {
    setIsDropdownOpen((prev)=>!prev)
    alert(isDropdownOpen)
  }

  useEffect(()=>{
    const handleClickOutside = (e: MouseEvent): void => {
      if(dropdownRef.current && !dropdownRef.current.contains(e.target as Node) && !dropdownBtnRef.current.contains(e.target as Node)){
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  },[])

  return (
    <div className={styles.header}>

      <p className={styles.logo}>TrendSpace</p>

      <div className={styles.headerInteractive}>

        <div className={styles.dropdown}>

          <DropdownButton toggleDropdown={toggleleDropdown} dropdownBtnRef={dropdownBtnRef}></DropdownButton>
            <div className={styles.dropdownMask}></div>
          <DropdownMenu dropdownRef={dropdownRef} isDropdownOpen={isDropdownOpen}></DropdownMenu>
        
        </div>

        <SearchBarre></SearchBarre>

        <ButtonComponent
          label="Creer une annonce"
          onClick={() => {}}
        ></ButtonComponent>

        <ButtonIconeAndLabel
          icone={BagIcone}
          label="Panier"
          onClick={() => {}}
        ></ButtonIconeAndLabel>

        <ButtonIconeAndLabel
          icone={FavorisIcone}
          label="Favoris"
          onClick={() => {}}
        ></ButtonIconeAndLabel>

        <ButtonIconeAndLabel
          icone={ProfileIcone}
          label="Se Connecter"
          onClick={() => {}}
        ></ButtonIconeAndLabel>
        
      </div>
    </div>
  );
};

export default HeaderComponent;
