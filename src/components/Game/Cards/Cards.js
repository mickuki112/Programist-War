import React from 'react';
import styles from './Cards.module.css';
const Cards=(props)=>{
    let valCards='jp';
    if(props.valCards){
        valCards=(
            <div>
                a={props.valCards.atack}
                d={props.valCards.defense}
                l={props.valCards.life}
            </div>
        );
    }
    return(
        <div
            style={props.stylesCard}
            className={styles.DeckCard}
            onClick={props.clicked}>
        {valCards}
        {props.children}
        </div>
    );
}
export default Cards
