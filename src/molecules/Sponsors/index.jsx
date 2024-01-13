import React from 'react'
import styles from './index.module.css'
import Container from '../../atoms/Container'

const Sponsors = () => {
    return (
        <div className={styles.imgBox}>
            <Container>
                <div className={styles.inner}>
                    <img className={styles.img} src="/img/sponsors1.png" alt="" />
                    <img className={styles.img} src="/img/sponsors2.png" alt="" />
                    <img className={styles.img} src="/img/sponsors3.png" alt="" />
                    <img className={styles.img} src="/img/sponsors4.png" alt="" />
                </div>
            </Container>
        </div>
    )
}

export default Sponsors
