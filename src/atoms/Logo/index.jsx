import React from 'react'
import LogoImg from './LogoImg'
import LogoTitle from './LogoTitle'
import styles from "./index.module.css"

const Logo = ({ className, classNameText }) => {
    return (
        <div className={styles.logo}>
            <LogoImg className={[styles.logoImg, className].join(" ")} />
            <LogoTitle className={classNameText} />
        </div>
    )
}

export default Logo
