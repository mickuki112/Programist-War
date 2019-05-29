import React from 'react';
import styles from './Cards.module.css';
const Cards=(props)=>{
    let valCards='card';
    if(props.valCards){
        valCards=(
            <div className={styles.Value}>
                <div className={styles.Atack}>{props.valCards.atack}</div>
                <div className={styles.Defense}>{props.valCards.defense}</div>
                <div className={styles.Life}>{props.valCards.life}</div>
            </div>
        );
    }
    return(
        <div
            style={props.stylesCard}
            className={styles.DeckCard}
            onClick={props.clicked}>
        {valCards}
        <div style={props.children} className={styles.Pictures}></div>
        </div>
    );
}
export default Cards
