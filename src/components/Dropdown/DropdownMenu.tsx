import React from "react";
import styles from "./Dropdown.module.css";

type DropdownMenuProps = {
  isDropdownOpen: boolean
  dropdownRef: React.RefObject<HTMLDivElement>;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({isDropdownOpen, dropdownRef }) => {
  let open: number = 1

  if(!isDropdownOpen) {
    open = -1
  }

  return (
    <div className={styles.dropdownMenu} ref={dropdownRef} style={{transition:"0.4s ease",  transform: `translateY(${open*100}%)`}}>
      <ul>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>
    </div>
  );
};
export default DropdownMenu;
