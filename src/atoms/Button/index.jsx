import React from 'react'
import styles from "./index.module.css"
const Button = (props) => {
    return (
        <button {...props} className={[styles.button, props.className].join(" ")}>
            <span className={styles.span}>
                {props.children}
            </span>
        </button>
    )
}

export default Button
