import React from 'react';
import styles from './Add.module.css';

const Add=(props)=>(
    <div onClick={props.clicked} className={styles.Add}>
        +
    </div>
);

export default Add;
