import React,{Component} from 'react';
import Cards from '../../components/Game/Cards/Cards';
import styles from './GenesisOfCards.module.css';

import cardAttributes from '../../components/Game/Cards/cardAttributes';
import cardPictures from '../../components/Game/Cards/cardPictures';

class GenesisOfCards extends Component {
    render(){
        const styless={
            position: 'relative',
            display: 'block',
            left: '0px',
            top: '0px',
            width: '200px',
            height: '300px',
            margin: '10px',
            marginTop: '30px',
        }
        const card=(nuberCard)=>(
            <Cards
                stylesCard={styless}
                key={nuberCard}
                valCards={cardAttributes[nuberCard]}>
                {cardPictures[nuberCard]}
            </Cards>)
        return(
            <React.Fragment>
            <p className={styles.TitleCard}>Basic cards</p>
            <div  className={styles.Content}>
                {card(0)}
                {card(1)}
                {card(2)}
                {card(3)}
                {card(4)}
            </div>
            <p className={styles.TitleCard}>Top JavaScript Frameworks</p>
            <div  className={styles.Content}>
                {card(5)}
                {card(6)}
                {card(7)}
            </div>
            <p className={styles.TitleCard}>Family C</p>
            <div  className={styles.Content}>
                {card(8)}
                {card(9)}
            </div>
            <p className={styles.TitleCard}>Backend</p>
            <div  className={styles.Content}>
                {card(10)}
                {card(11)}
                {card(12)}
            </div>
            </React.Fragment>
        )
    }
}
export default GenesisOfCards;
