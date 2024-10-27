import styles from "./NormalButton.module.css"

type NormalButtonProps ={
    name : string,
    onClick : () => void
}

function NormalButton({name, onClick} : NormalButtonProps) {
    return (
        <button onClick={onClick} className={styles.normalButton}>
            {name}
        </button>
    );
}

export default NormalButton;