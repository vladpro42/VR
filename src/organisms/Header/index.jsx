import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import Logo from '../../atoms/Logo/index'
import Button from '../../atoms/Button/index'
import Container from '../../atoms/Container'
import Burger from '../../atoms/Burger'
import NavigationList from '../../molecules/NavigationList'
import HeaderBtns from '../../molecules/HeaderBtns'

const Header = () => {



    const [isPopup, setPopup] = useState(false)

    const handleClick = (e) => {
        setPopup(!isPopup)
    }

    const handleClickClosePopup = (e) => {
        const isActive = e.target.classList.contains("Header_popup__active__E9TBX")
        if (isActive) {
            setPopup(!isPopup)
        }
    }

    return (
        <header onResize={e => console.log(e)} className={styles.header}>
            <Container>
                <div className={styles.header__inner}>
                    <Logo className={styles.header__logoImg} classNameText={styles.header__text} />
                    {!isPopup ? <NavigationList /> : null}
                    {!isPopup ? (<HeaderBtns />) : null}

                    <Burger onClick={handleClick} className={styles.burger} />
                    <div onClick={handleClickClosePopup} className={isPopup ? [styles.popup, styles.popup__active].join(" ") : styles.popup}>
                        <div className={styles.popup__inner}>
                            {isPopup ? <NavigationList className={styles.displayBlock} /> : null}
                            {isPopup ? <HeaderBtns className={styles.displayBlock} /> : null}
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
