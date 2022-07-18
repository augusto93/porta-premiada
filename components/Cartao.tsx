import styles from "../styles/Cartao.module.css"

interface CartaoProps {
    bgcolor?: string
    children?: any
}

export default function (props: CartaoProps) {
    return (
        <div className={styles.cartao}
            style={{
                backgroundColor: props.bgcolor ?? "#fff"
            }}>
            {props.children}
        </div>
    )
}