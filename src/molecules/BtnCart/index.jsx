import React from 'react'
import Button from '../../atoms/Button'
import styles from './index.module.css'
import TitleWithArrow from '../TitleWithArrow'

const BtnCart = ({ num, children, className, classNameTitle,...props }) => {
    return (
        <div className={styles.box}>
            <div className={styles.circle}>
                <button className={className}>{num}</button>
            </div>
            <TitleWithArrow className={classNameTitle}>{children}</TitleWithArrow>
        </div>
    )
}

export default BtnCart
