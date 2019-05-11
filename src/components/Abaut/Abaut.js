import React from 'react';
import styles from './Abaut.module.css';
import git0 from './Pictures/git0.png';
import git1 from './Pictures/git1.png';
const Abaut =(props)=>(
    <div  className={styles.Abaut}>
        <h4>Programist War</h4>
        <p>

        </p>
        <a href="#">
            <img className={styles.Img}src={git1}/>
            <img className={styles.Img}src={git0}/>
        </a>
    </div>
);

export default Abaut;
