import React from 'react';
import styles from './Add.module.css';

const Add=(props)=>(
    <div onClick={props.clicked} className={styles.Add} style={props.styles}>
        <div className={styles.Icon}></div>
    </div>
);

export default Add;
