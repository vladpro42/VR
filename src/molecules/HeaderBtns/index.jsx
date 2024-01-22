import React from 'react'
import styles from './index.module.css'
import Button from '../../atoms/Button'

const HeaderBtns = ({ className }) => {
    return (
        <div className={[styles.header__btns, className].join(" ")}>
            <button className={styles.btnContact}>CONTACT US</button>
            <Button className={styles.btn}>JOIN HYDRA</Button>
        </div>
    )
}

export default HeaderBtns
