import React from 'react'
import LogoImg from './LogoImg'
import LogoTitle from './LogoTitle'
import styles from "./index.module.css"

const Logo = () => {
    return (
        <div className={styles.logo}>
            <LogoImg className={styles.logoImg} width={102} height={103} />
            <LogoTitle />
        </div>
    )
}

export default Logo
