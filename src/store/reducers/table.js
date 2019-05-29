import * as actionTypes from '../actions';
import * as cardAttributes from '../../components/Game/Cards/cardAttributes';
import * as cardPictures from '../../components/Game/Cards/cardPictures';

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


    const attack =(newAllCards1,direction,attack1,attack2)=>{//alert('a'+direction)
        //const newAllCards1={...state.allCards}
        if(attack2){
            //const def1=newAllCards1[state.results[direction]].value.defense
            //const def2=newAllCards1[state.results[direction+5]].value.defense
            //for optimization!!!
            if(state.results[direction]){
                const def1=newAllCards1[state.results[direction]].value.defense
                if(state.results[direction+5]){//alert(1)
                    const def2=newAllCards1[state.results[direction+5]].value.defense
                    newAllCards1[state.results[direction]].value.life-=(attack1-def1);
                    newAllCards1[state.results[direction+5]].value.life-=(attack2-def2);
                }else{//alert(5)
                    newAllCards1[state.results[direction]].value.life-=(attack1+attack2-def1);
                }
            }else
            if(state.results[direction+5]){//alert(2)
                const def2=newAllCards1[state.results[direction+5]].value.defense
                newAllCards1[state.results[direction+5]].value.life-=(attack1+attack2-def2);
            }
        }else if(attack1){
            if(state.results[direction]){//alert(3)
                const def1=newAllCards1[state.results[direction]].value.defense
                newAllCards1[state.results[direction]].value.life-=(attack1-def1);
            }else
            if(state.results[direction+5]){//alert(4)
                const def2=newAllCards1[state.results[direction+5]].value.defense
                newAllCards1[state.results[direction+5]].value.life-=(attack1-def2);
            }
        }
        return newAllCards1;
    }
    const delteCard=(newCards)=>{
        newCards.map((card,i)=>{
            if(card.value.life<=0){
                //newCards.splice(i, 1);
                //card.position=40;
                        state.results.map((val,j)=>{
                            if(card.position==j){
                                card.position=40;
                                //newCards[val].position=40;
                                //newCards[state.results[j]].position=40;
                                state.results[j]=false;
                                //return newCards
                                //return
                            }
                        })
            }
        })
        return newCards
        //newCards.splice(0, 1);
    }

    const defense =(newAllCards1,x,y,def)=>{
        for(let i=0;i<5;i++){
            if(state.results[i+x]){
                const attack1=def[state.results[i+x]].value.atack
                if(state.results[i+5+x]){
                    newAllCards1=attack(newAllCards1,i+y,attack1,def[state.results[i+x+5]].value.atack);
                }else{
                    newAllCards1=attack(newAllCards1,i+y,attack1);
                }
            }else
            if(state.results[i+5+x]){
                newAllCards1=attack(newAllCards1,i+y,false,def[state.results[i+x+5]].value.atack);
            }
        }
        return newAllCards1;
    }
    const playOponents=()=>{//tymczasowy bott x=id pola y karta
        let x;
        let pass=0;
        for(;;){
            x=Math.floor(Math.random() * 10)+10;
            if(state.results[x]===false){break;}
            pass++;
            if(pass>30){return}//fukcja pass
        }
        let y;
        pass=0;
        for(;;){
            y=Math.floor(Math.random() * 10)
            if(state.allCards.cardOpponent[y].position===50){break;}
            pass++;
            if(pass>30){return}//fukcja pass
        }

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
                card.pictures=cardPictures.PIXEL
            });
            newState.cardOpponent.map((card)=>{
                card.position=50;
                card.value={...cardAttributes.PIXEL};//do zmiany
                card.pictures=cardPictures.PIXEL
            });
            return{...state,
                allCards:{...newState}};
        case 'ENDTURN':
            playOponents();
            let newAllCards1=state.allCards.cardOpponent//mozliwe do poprawy !!!
            let newAllCards2=state.allCards.cards
            newAllCards1=defense(newAllCards1,0,10,newAllCards2)
            newAllCards2=defense(newAllCards2,10,0,newAllCards1)
            newAllCards1=delteCard(newAllCards1)
            newAllCards2=delteCard(newAllCards2)
            return {...state,
                allCards:{
                    cardOpponent:newAllCards1,
                    cards:newAllCards2,

            }}
        default:
            return state;
    }
};

export default reducer;
