import React from 'react';
import styles from './FullTitle.module.css';
import Title from './Title/Title'
import {NavLink} from 'react-router-dom';

const FullTitle =(props)=>(

<NavLink to='/' className={styles.Container} >
    <div className={styles.Title}>
        <Title/>
    </div>
    <div className={styles.Programist}>
        Programist
    </div>
</NavLink>

);
export default FullTitle;
