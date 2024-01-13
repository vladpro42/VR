import React from 'react'
import styles from "./index.module.css"
import Container from '../../atoms/Container'
import LogoImg from '../../atoms/Logo/LogoImg'
import VerticalVector from '../../atoms/VerticalVector'
import Button from '../../atoms/Button'
import { Facebook, Instagram, LinkedLn, Pinterest, Twitter, Youtube } from '../../atoms/SocialLink'
import FooterVector from '../../atoms/FooterVector'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <FooterVector className={styles.vector} />
            <Container>
                <ul className={styles.inner}>
                    <li className={styles.item}>
                        <LogoImg width={185} height={187} />
                    </li>
                    <li className={styles.item}>
                        <VerticalVector />
                    </li>
                    <li className={[styles.item, styles.linksBox].join(" ")}>
                        <a className={styles.link} href="#">
                            ABOUT
                        </a>
                        <a className={styles.link} href="#">
                            SERVICES
                        </a>
                        <a className={styles.link} href="#">
                            TECHNOLOGIES
                        </a>
                        <a className={styles.link} href="#">
                            HOW TO
                        </a>
                        <a className={styles.link} href="#">
                            JOIN HYDRA
                        </a>
                    </li>
                    <li className={styles.item}>
                        <VerticalVector />
                    </li>
                    <li className={[styles.item, styles.linksBox].join(" ")}>
                        <a className={styles.link} href="#">
                            F.A.Q
                        </a>
                        <a className={styles.link} href="#">
                            SITEMAP
                        </a>
                        <a className={styles.link} href="#">
                            CONDITIONS
                        </a>
                        <a className={styles.link} href="#">
                            LICENSES
                        </a>
                    </li>
                    <li className={styles.item}>
                        <VerticalVector />
                    </li>
                    <li className={styles.item}>
                        <p className={styles.text}>SOCIALIZE WITH HYDRA</p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.iconLink}>
                                <Facebook />
                            </a>
                            <a href="#" className={styles.iconLink}>
                                <Twitter />
                            </a>
                            <a href="#" className={styles.iconLink}>
                                <LinkedLn />
                            </a>
                            <a href="#" className={styles.iconLink}>
                                <Youtube />
                            </a>
                            <a href="#" className={styles.iconLink}>
                                <Instagram />
                            </a>
                            <a href="#" className={styles.iconLink}>
                                <Pinterest />
                            </a>
                        </div>
                        <Button className={styles.btn}>BUILD YOUR WORLD</Button>
                    </li>
                </ul>
                <svg className={styles.hr} xmlns="http://www.w3.org/2000/svg" width="1269" height="2" viewBox="0 0 1269 2" fill="none">
                    <path d="M0 1H1269" stroke="url(#paint0_linear_13_63)" />
                    <defs>
                        <linearGradient id="paint0_linear_13_63" x1="1269" y1="1.00238" x2="3.52735e-07" y2="0.980001" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#343045" />
                            <stop offset="0.348958" stopColor="#C0B7E8" />
                            <stop offset="0.6875" stopColor="#8176AF" />
                            <stop offset="1" stopColor="#343045" />
                        </linearGradient>
                    </defs>
                </svg>
                <p className={styles.politics}>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </p>
            </Container>
        </footer>
    )
}

export default Footer
