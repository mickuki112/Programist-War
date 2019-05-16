import * as actionTypes from '../actions';
import * as cardAttributes from '../../components/Game/Cards/cardAttributes';

const initialState = {
    results: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    allCards:{
        cards:[{position:19},
            {position:19},
            {position:19},
            {position:19},
            {position:19},
            {position:19},
            {position:19},
            {position:19},
            {position:19},
            {position:19},
            {position:19},
            {position:19}],
        cardOpponent:[{position:19},
            {position:19},
            {position:19},
            {position:19},
            {position:19},
            {position:19},
            {position:19},
            {position:19},
            {position:19},
            {position:19},
            {position:19},
            {position:19}]
    }
};

const reducer = ( state = initialState, action) => {


    const attack =(direction,attack1,attack2)=>{
        const newAllCards1={...state.allCards}
        if(attack2){
            if(state.results[direction]){
                if(state.results[direction+10]){
                    newAllCards1.cardOpponent[state.results[direction+10]].value.life+=(attack1);
                    newAllCards1.cardOpponent[state.results[direction+10]].value.life+=(attack2);
                }else{
                    newAllCards1.cardOpponent[state.results[direction+10]].value.life+=(attack1+attack2);
                }
            }else
            if(state.results[direction+10]){
                newAllCards1.cardOpponent[state.results[direction+10]].value.life+=(attack1+attack2);
            }
        }else{
            if(state.results[direction]){
                newAllCards1.cardOpponent[state.results[direction]].value.life+=(attack1);
            }else
            if(state.results[direction+10]){
                newAllCards1.cardOpponent[state.results[direction+10]].value.life+=(attack1);
            }
        }
    }




    switch ( action.type ) {
        case 'PLAY_THE_CARD':
            const newResults={...state.results};
            const newAllCards={...state.allCards}
            newResults[action.id]=action.val;
            newAllCards.cards[action.val].position=action.id;
                return {...state,
                    results:{...newResults},
                    allCards:{...newAllCards},
                }
        case 'GIVEAWAYTHECARS':
            const newState={...state.allCards};
            newState.cards.map((card)=>{
                card.position=30;
                card.value={...cardAttributes.PIXEL};//do zmiany
            });
            newState.cardOpponent.map((card)=>{
                card.position=30;
                card.value={...cardAttributes.PIXEL};//do zmiany
            });
            return{...state,
                allCards:{...newState}};
        case 'ENDTURN':
            const i=0
            if(state.results[i]){
                if(state.results[i+5]){
                    return attack();
                }else{
                    return attack();
                }
            }else
            if(state.results[i+5]){
                return attack();
            }
        default:
            return state;
    }
};

export default reducer;
