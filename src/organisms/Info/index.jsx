import React from 'react'
import styles from './index.module.css'
import BtnCart from '../../molecules/BtnCart'
import Container from '../../atoms/Container/index'
import InfoVector from '../../atoms/InfoVector'


const Info = () => {
    return (
        <div className={styles.info}>
            <Container>
                <div className={styles.inner}>
                    <BtnCart classNameTitle={styles.title} className={styles.btn} num={'01'}>
                        3D Conception
                        & Design
                    </BtnCart>
                    <BtnCart classNameTitle={styles.title} className={styles.btn} num={'02'}>
                        Interaction
                        Design
                    </BtnCart>
                    <BtnCart classNameTitle={styles.title} className={styles.btn} num={'03'}>
                        VR World
                        User Testing
                    </BtnCart>
                    <BtnCart classNameTitle={styles.title} className={styles.btn} num={'04'}>
                        Hydra VR
                        Deploy
                    </BtnCart>
                </div>
            </Container>
            <InfoVector className={styles.vector} />
        </div >
    )
}

export default Info

