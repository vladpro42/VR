import React from 'react'
import Container from "../../atoms/Container/index"
import Input from '../../atoms/Input'
import styles from "./index.module.css"
import Button from '../../atoms/Button'

const Form = () => {
    return (
        <div className={styles.formSection}>
            <Container>
                <form className={styles.form} >
                    <h3 className={styles.title}>JOIN HYDRA</h3>
                    <svg className={styles.hr} xmlns="http://www.w3.org/2000/svg" width="414" height="2" viewBox="0 0 414 2" fill="none">
                        <path d="M0 1H414" stroke="url(#paint0_linear_13_46)" />
                        <defs>
                            <linearGradient id="paint0_linear_13_46" x1="414" y1="1.00238" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#343045" />
                                <stop offset="0.348958" stopColor="#C0B7E8" />
                                <stop offset="0.6875" stopColor="#8176AF" />
                                <stop offset="1" stopColor="#343045" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p className={styles.subTitle}>Let’s Build Your VR Experience</p>
                    <div className={styles.box}>
                        <div className={styles.boxContainer}>
                            <Input placeholder='First Name' />
                            <Input placeholder='Last Name' />
                        </div>
                        <div className={styles.boxContainer}>
                            <Input placeholder='Email' />
                            <Input placeholder='Phone Number' />
                        </div>
                        <Input placeholder='Subject' />
                        <textarea className={styles.textarea} name="" id="" cols="30" rows="10" placeholder='Tell Us Something...'></textarea>
                        <Button className={styles.btn}>SEND TO HYDRA</Button>
                    </div>
                </form>
            </Container>
        </div>
    )
}

export default Form
