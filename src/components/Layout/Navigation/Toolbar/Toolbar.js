import React from'react';
import styles from'./Toolbar.module.css';
import FullTitle from '../../../FullTitle/FullTitle';

const toolbar =(props)=>{
    return(
        <header className={styles.Toolbar}>
            <div className={styles.DrawerToggle} onClick={props.clicked}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.Logo}>
            </div>
                <FullTitle />
        </header>
)};

export default toolbar;
