import React from 'react'
import styles from "./index.module.css"

const Input = ({ placeholder, className }) => {
    return (
        <input type="text" className={[className, styles.inp].join(" ")} placeholder={placeholder} />
    )
}

export default Input
