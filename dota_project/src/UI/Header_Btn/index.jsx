import styles from './style.module.css'
export default function Header_Btn({text}) {

    return(
        <div className={styles.btn}>
            {text}
        </div>
    )

}