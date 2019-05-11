import React from'react';
import styles from'./Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems'
const toolbar =(props)=>(
        <header className={styles.Toolbar}>
            <div className={styles.DrawerToggle} onClick={props.clicked}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.Logo}>

            </div>
            <h1>Programist War</h1>
        </header>
);

export default toolbar;
