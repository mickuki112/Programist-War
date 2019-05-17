import * as actionTypes from '../actions';
import * as cardAttributes from '../../components/Game/Cards/cardAttributes';
import math from 'mathjs';

const initialState = {
    results: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    allCards:{
        cards:[{position:40},
            {position:40},
            {position:40},
            {position:40},
            {position:40},
            {position:40},
            {position:40},
            {position:40},
            {position:40},
            {position:40},
            {position:40},
            {position:40}],
        cardOpponent:[{position:40},
            {position:40},
            {position:40},
            {position:40},
            {position:40},
            {position:40},
            {position:40},
            {position:40},
            {position:40},
            {position:40},
            {position:40},
            {position:40}]
    }
};

const reducer = ( state = initialState, action) => {


    const attack =(newAllCards1,direction,attack1,attack2)=>{
        //const newAllCards1={...state.allCards}
        if(attack2){
            if(state.results[direction]){
                if(state.results[direction+5]){alert(1)
                    newAllCards1.cardOpponent[state.results[direction]].value.life-=(attack1);
                    newAllCards1.cardOpponent[state.results[direction+5]].value.life-=(attack2);
                }else{alert(5)
                    newAllCards1.cardOpponent[state.results[direction]].value.life-=(attack1+attack2);
                }
            }else
            if(state.results[direction+5]){alert(2)
                newAllCards1.cardOpponent[state.results[direction+5]].value.life-=(attack1+attack2);
            }
        }else{
            if(state.results[direction]){alert(3)
                newAllCards1.cardOpponent[state.results[direction]].value.life-=(attack1);
            }else
            if(state.results[direction+5]){alert(4)
                newAllCards1.cardOpponent[state.results[direction+5]].value.life-=(attack1);
            }
        }
        return newAllCards1;
    }

    const defense =(newAllCards1)=>{
        for(let i=0;i<5;i++){
            if(state.results[i]){
                if(state.results[i+5]){
                    newAllCards1=attack(newAllCards1,i+10,1,1);
                }else{
                    newAllCards1=attack(newAllCards1,i+10,1,1);
                }
            }else
            if(state.results[i+5]){
                newAllCards1=attack(newAllCards1,i+10,1,1);
            }
        }
        return newAllCards1;
    }
    const playOponents=()=>{
        const x=Math.floor(Math.random() * 10)+10;//tymczasowy bott
        const y=Math.floor(Math.random() * 10);
        const newResults4=state.results;
        const newAllCards2={...state.allCards}
        newResults4[x]=y;
        newAllCards2.cardOpponent[y].position=x;
            return {...state,
                results:newResults4,
                allCards:{...newAllCards2},
            }
    }

    switch ( action.type ) {
        case 'PLAY_THE_CARD':
            const newResults=state.results;
            const newAllCards={...state.allCards}
            newResults[action.id]=action.val;
            newAllCards.cards[action.val].position=action.id;
                return {...state,
                    results:newResults,
                    allCards:{...newAllCards},
                }
        case 'GIVEAWAYTHECARS':
            const newState={...state.allCards};
            newState.cards.map((card)=>{
                card.position=50;
                card.value={...cardAttributes.PIXEL};//do zmiany
            });
            newState.cardOpponent.map((card)=>{
                card.position=50;
                card.value={...cardAttributes.PIXEL};//do zmiany
            });
            return{...state,
                allCards:{...newState}};
        case 'ENDTURN':
            playOponents();
            const newAllCards1={...state.allCards}
            return {...state,
                allCards:{...defense(newAllCards1)}}
        default:
            return state;
    }
};

export default reducer;
