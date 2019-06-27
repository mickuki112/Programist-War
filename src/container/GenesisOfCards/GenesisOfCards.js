import React,{Component} from 'react';
import Cards from '../../components/Game/Cards/Cards';
import styles from './GenesisOfCards.module.css';

import cardAttributes from '../../components/Game/Cards/cardAttributes';
import cardPictures from '../../components/Game/Cards/cardPictures';

class GenesisOfCards extends Component {
    render(){
        return(
            <div  className={styles.Content}>
                <Cards
                    stylesCard={{position: 'static',display: 'block'}}
                    key={1}
                    valCards={cardAttributes[0]}>
                    {cardPictures[0]}</Cards>
            </div>
        )
    }
}
export default GenesisOfCards;
