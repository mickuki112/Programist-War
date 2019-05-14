import React from 'react';
import styles from './Cards.module.css';
const Cards=(props)=>{
    return(
        <div
            style={props.stylesCard}
            className={styles.DeckCard}
            onClick={props.clicked}>
        {props.children}
        </div>
    );
}
export default Cards
