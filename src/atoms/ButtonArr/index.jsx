import React from 'react'
import styles from "./index.module.css"

const ButtonArr = ({ className, props }) => {
    return (
        <svg {...props} className={[styles.arrow, className].join(" ")} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
            <path d="M70.8333 50L29.1667 50M70.8333 50L54.1667 66.6667M70.8333 50L54.1667 33.3333" stroke="#C0B7E8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default ButtonArr
