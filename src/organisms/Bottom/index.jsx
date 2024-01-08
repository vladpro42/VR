import React from 'react'
import Container from "../../atoms/Container/index"
import styles from "./index.module.css"
import Button from "../../atoms/Button/index"

const Bottom = () => {
    return (
        <section className={styles.bottom}>
            <Container>
                <div className={styles.inner}>
                    <ul className={styles.carts}>
                        <li className={styles.cart}>
                            <img className={styles.img} src="/img/bottom1.jpg" alt="" />
                            <h4 className={styles.title}>SIMULATION</h4>
                            <hr className={styles.hr} />
                            <p className={styles.descr}>
                                Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet vitae.
                            </p>
                            <Button className={styles.btn}>
                                TRY IT NOW
                            </Button>
                        </li>
                        <li className={styles.cart}>
                            <img className={styles.img} src="/img/bottom2.jpg" alt="" />
                            <h4 className={styles.title}>EDUCATION</h4>
                            <hr className={styles.hr} />
                            <p className={styles.descr}>
                                Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet vitae.
                            </p>
                            <Button className={styles.btn}>
                                TRY IT NOW
                            </Button>
                        </li>
                        <li className={styles.cart}>
                            <img className={styles.img} src="/img/bottom3.jpg" alt="" />
                            <h4 className={styles.title}>SELF-CARE</h4>
                            <hr className={styles.hr} />
                            <p className={styles.descr}>
                                Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet vitae.
                            </p>
                            <Button className={styles.btn}>
                                TRY IT NOW
                            </Button>
                        </li>
                        <li className={styles.cart}>
                            <img className={styles.img} src="/img/bottom4.jpg" alt="" />
                            <h4 className={styles.title}>OUTDOOR</h4>
                            <hr className={styles.hr} />
                            <p className={styles.descr}>
                                Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet vitae.
                            </p>
                            <Button className={styles.btn}>
                                TRY IT NOW
                            </Button>
                        </li>
                    </ul>
                    <div className={styles.hardware}>
                        <h2 className={styles.titleHardware}>TECHNOLOGIES & HARDWARE</h2>
                        <p className={styles.subtitle}>USED BY HYDRA VR.</p>
                        <button className={styles.btnArr}>
                            <div className={styles.circle}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <path d="M17.5 25L30 37.5L42.5 25" stroke="#433D60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Bottom
