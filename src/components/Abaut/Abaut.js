import React from 'react';
import styles from './Abaut.module.css';
import git1 from './Pictures/git1.png';
const Abaut =(props)=>(
    <div  className={styles.Abaut}>
        <h2>Programist War</h2>
        <p>

        </p>
        <a href="https://github.com/mickuki112/Programist-War">
            <img className={styles.Img}src={git1}/>
        </a>
        I present Programming card game play today.
    </div>
);

export default Abaut;
