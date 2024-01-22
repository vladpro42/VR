import React from 'react'
import styles from "./index.module.css"

const NavigationList = ({ className }) => {
    return (
        <ul className={[styles.navigation__list, className].join(" ")}>
            <li className={styles.navigation__item}>
                <a href="#" className={styles.navigation__link}>ABOUT</a>
            </li>
            <li className={styles.navigation__item}>
                <a href="#" className={styles.navigation__link}>SERVICES</a>
            </li>
            <li className={styles.navigation__item}>
                <a href="#" className={styles.navigation__link}>TECHNOLOGIES</a>
            </li>
            <li className={styles.navigation__item}>
                <a href="#" className={styles.navigation__link}>HOW TO</a>
            </li>
        </ul>
    )
}

export default NavigationList
