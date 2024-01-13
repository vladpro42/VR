import React from 'react'
import styles from "./index.module.css"
import Container from '../../atoms/Container'

const IntroDuction = ({ title, text, subTitle }) => {
    return (
        <section className={styles.introduction}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.titleBox}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.subTitle}>
                            <span className={styles.span}>{subTitle}</span>
                            <svg width="228" height="60" viewBox="0 0 228 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M198.833 50L157.167 50M198.833 50L182.167 66.6666M198.833 50L182.167 33.3333" stroke="#C0B7E8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M157.5 50H0" stroke="#C0B7E8" strokeWidth="3" />
                            </svg>

                        </p>
                    </div>
                    <p className={styles.text}>
                        {text}
                    </p>
                </div>
            </Container>
        </section>
    )
}

export default IntroDuction
