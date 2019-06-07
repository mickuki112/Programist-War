import React from 'react';
import styles from './ButtonGame.module.css';

const ButtonGame=(props)=>(
    <div className={styles.Button1}>
        <button  className={styles.Button0} onClick={props.onClick}>
            {props.children}
        </button>
    </div>
);

export default ButtonGame;
