import React from 'react'
import styles from './index.module.css'
import Container from '../../atoms/Container/index'
import Button from '../../atoms/Button'
import ButtonArr from '../../atoms/ButtonArr'
import Location from '../../atoms/Location'
import Mail from '../../atoms/Mail'
import PhoneCall from '../../atoms/PhoneCall'
import VectorTop from '../../atoms/VectorTop'
import VectorTopLeft from '../../atoms/VectorTopLeft'

const Top = () => {
    return (
        <section className={styles.top}>
            <Container>
                <div className={styles.topInner}>
                    <div className={styles.titleBox}>
                        <VectorTopLeft className={styles.vectorLeft} />
                        <h1 className={styles.title}>
                            <span className={styles.titlePurple}>Dive </span>
                            Into The Depths Of
                            <span className={styles.titlePurple}> Virtual Reality</span>
                        </h1>
                        <p className={styles.subTitle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            nisl tincidunt eget. Lectus mauris eros in vitae .
                        </p>
                        <div className={styles.btnBox}>
                            <Button className={styles.btn}>
                                BUILD YOUR WORLD
                            </Button>
                            <ButtonArr />
                        </div>
                    </div>
                    <div className={styles.img}>
                        <VectorTop className={styles.vector} />
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.contactColumn}>
                            <Location />
                            <div className={styles.contactBox}>
                                <h3 className={styles.contactTitle}>Pay Us a Visit</h3>
                                <p className={styles.contactSubTitle}>
                                    Union St, Seattle, WA 98101, United States
                                </p>
                            </div>
                        </div>
                        <div className={[styles.contactColumn, styles.contactColumnMod].join(" ")}>
                            <PhoneCall />
                            <div className={styles.contactBox}>
                                <h3 className={styles.contactTitle}>Give Us a Call</h3>
                                <p className={styles.contactSubTitle}>
                                    (110) 1111-1010
                                </p>
                            </div>
                        </div>
                        <div className={styles.contactColumn}>
                            <Mail />
                            <div className={styles.contactBox}>
                                <h3 className={styles.contactTitle}>Send Us a Message</h3>
                                <p className={styles.contactSubTitle}>
                                    Contact@HydraVTech.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Top
