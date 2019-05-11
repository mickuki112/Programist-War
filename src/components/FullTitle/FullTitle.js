import React from 'react';
import styles from './FullTitle.module.css';
import Title from './Title/Title'

const FullTitle =()=>(

<div className={styles.Container}>
    <div className={styles.Title}>
        <Title/>
    </div>
    <div className={styles.Programist}>
        Programist
    </div>
</div>

);
export default FullTitle;
