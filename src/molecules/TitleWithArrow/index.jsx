import React from 'react'
import styles from './index.module.css'
import BtnArr from '../../atoms/ButtonArr/index'


const TitleWithArrow = ({ children, className, ...props }) => {
    return (
        <div className={styles.box}>
            <BtnArr className={styles.btn} />
            <h3 className={[styles.title, className].join(" ")}>
                {children}
            </h3>
        </div>
    )
}

export default TitleWithArrow
