import React from 'react'
import styles from "./index.module.css"
import Container from '../../atoms/Container'
import Button from '../../atoms/Button'

const About = () => {
    return (
        <section className={styles.about}>
            <Container>
                <div className={styles.inner}>
                    <img src="/img/about.jpg" alt="" className={styles.img} />
                    <div className={styles.titleBox}>
                        <h2 className={styles.title}>ABOUT</h2>
                        <p className={styles.subTitle}>HYDRA VR</p>
                        <p className={styles.text}>
                            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
                            urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
                            dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
                            Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
                            sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                            etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
                            cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                            retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                            n tempor.
                        </p>
                        <Button className={styles.btn}>
                            LET’S GET IN TOUCH
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About
