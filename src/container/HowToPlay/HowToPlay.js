import React,{Component} from 'react';
import styles from './HowToPlay.module.css';

class HowToPlay extends Component{
    render(){
        return(
            <div className={styles.Content}>
                <h2>Mechanics of struggle</h2>
                <h4>Subtraction of life</h4>
                <p>The fight is simple. One card subtracts the  life points
                the second card, after taking away from the attack points of
                the enemy card defense points.</p>
                <h4>Cards attack only in a vertical line but there are several
                variations of this attack:</h4>
                    <p>- if there are two cards in one team and in the second
                    one two cards, one card only attacks the card in the opposite row</p>
                    <p>- if there are two cards in one team and in the other
                    one card is one card attacks only this card in the opposite
                    row and two opponent's cards attack together one card</p>
                    <p>- if there are two cards in each team then each card
                     attacks only the one in the opposing order</p>
                <h4>Who is winning?</h4>
                <p>Winning a person with the largest number of points life.</p>
            </div>
        )
    }
}
export default HowToPlay;
