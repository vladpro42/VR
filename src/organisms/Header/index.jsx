import React from 'react'
import styles from './index.module.css'
import Logo from '../../atoms/Logo/index'
import Button from '../../atoms/Button/index'
import Container from '../../atoms/Container'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__inner}>
                    <Logo />
                    <ul className={styles.navigation__list}>
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
                    <div className={styles.header__btns}>
                        <button className={styles.btnContact}>CONTACT US</button>
                        <Button className={styles.btn}>JOIN HYDRA</Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
