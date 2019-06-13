import cardAttributes from '../../components/Game/Cards/cardAttributes';
import cardPictures from '../../components/Game/Cards/cardPictures';


const initialState = {
    pass:[false,false],
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
            //const def1=newAllCards1[state.results[direction]].value.defense
            //const def2=newAllCards1[state.results[direction+5]].value.defense
            //for optimization!!!
            if(state.results[direction]){
                const def1=newAllCards1[state.results[direction]].value.defense
                if(state.results[direction+5]){
                    const def2=newAllCards1[state.results[direction+5]].value.defense
                    if(attack1>def1){newAllCards1[state.results[direction]].value.life-=(attack1-def1);}
                    if(attack1>def2){newAllCards1[state.results[direction+5]].value.life-=(attack2-def2);}
                }else{
                    if((attack1+attack2)>def1){newAllCards1[state.results[direction]].value.life-=(attack1+attack2-def1);}
                }
            }else
            if(state.results[direction+5]){
                const def2=newAllCards1[state.results[direction+5]].value.defense
                if((attack1+attack2)>def2){newAllCards1[state.results[direction+5]].value.life-=(attack1+attack2-def2);}
            }
        }else if(attack1){
            if(state.results[direction]){
                const def1=newAllCards1[state.results[direction]].value.defense
                if(attack1>def1){newAllCards1[state.results[direction]].value.life-=(attack1-def1);}
            }else
            if(state.results[direction+5]){
                const def2=newAllCards1[state.results[direction+5]].value.defense
                if(attack1>def2){newAllCards1[state.results[direction+5]].value.life-=(attack1-def2);}
            }
        }
        return newAllCards1;
    }
    const delteCard=(newCards)=>{
        newCards.map((card,i)=>{
            if(card.value.life<=0){
                        return state.results.map((val,j)=>{
                            if(card.position===j){
                                card.position=40;
                                state.results[j]=false;
                            }
                        })
            }
        })
        return newCards
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
    const playOponents=()=>{
        if(state.pass[1]===false){//bott x=id pola y karta
        let x;
        let pass=0;
        for(;;){
            x=Math.floor(Math.random() * 10)+10;
            if(state.results[x]===false){break;}
            pass++;
            if(pass>30){return state.pass[1]=true;}
        }
        let y;
        pass=0;
        const theNumberOfCards=state.allCards.cardOpponent.length
        for(;;){
            y=Math.floor(Math.random() * theNumberOfCards)
            if(state.allCards.cardOpponent[y].position===50){break;}
            pass++;
            if(pass>30){return state.pass[1]=true;}
        }

        const newResults4=state.results;
        const newAllCards2={...state.allCards}
        newResults4[x]=y;
        newAllCards2.cardOpponent[y].position=x;
            return {...state,
                results:newResults4,
                allCards:{...newAllCards2},
            }
    }}
    const endTurn=(newAllCards1,newAllCards2)=>{
        playOponents();
        newAllCards1=defense(newAllCards1,0,10,newAllCards2)
        newAllCards2=defense(newAllCards2,10,0,newAllCards1)
        newAllCards1=delteCard(newAllCards1)
        newAllCards2=delteCard(newAllCards2)
        return {...state,
            allCards:{
                cardOpponent:newAllCards1,
                cards:newAllCards2,
        }}
    }
    const endGame=(newState)=>{
        console.log('endGame')
        let lifePlayer=0;
        let lifeOpponent=0;
        newState.allCards.cards.map((card)=>{
            if(card.position<=20){
                 lifePlayer=lifePlayer+card.value.life
            }

        })
        newState.allCards.cardOpponent.map((card)=>{
            if(card.position<=20){
                 lifeOpponent=lifeOpponent+card.value.life
            }

        })
        if(lifePlayer>lifeOpponent){
            alert('winnner')
        }else{
            if(lifePlayer<lifeOpponent){
                alert('failed')
            }
            else{
                alert('remis')
            }
        }
    }
    const distributionCard=()=>{
        const theNumberOfCards=cardAttributes.length
        const newState={...state.allCards};
        newState.cards.map((card)=>{
            const idCard=Math.floor(Math.random() * theNumberOfCards)
            card.position=50;
            card.value={...cardAttributes[idCard]};
            card.pictures=cardPictures[idCard]
        });
        newState.cardOpponent.map((card)=>{
            const idCard=Math.floor(Math.random() * theNumberOfCards)
            card.position=50;
            card.value={...cardAttributes[idCard]};
            card.pictures=cardPictures[idCard]
        });
        return{allCards:{...newState}};
    }
    switch ( action.type ) {
        case 'PLAY_THE_CARD':
            const newResults=state.results;
            const newAllCards={...state.allCards}
            newResults[action.id]=action.val;
            if(newAllCards.cards[action.val].position<=20){
                newResults[newAllCards.cards[action.val].position]=false;
            }
            newAllCards.cards[action.val].position=action.id;
                return {...state,
                    results:newResults,
                    allCards:{...newAllCards},
                }
        case 'CARDGO':
            const newResults3=state.results;
            const newAllCard={...state.allCards}
            newResults3[newAllCard.cards[action.val].position]=false;
            newAllCard.cards[action.val].position=action.fieldPlayed;
                return {...state,
                    results:newResults3,
                    allCards:{...newAllCard},
                }
        case 'PASS':
            if(state.pass[1]){
                endGame({...state});
            }else{
                let newAllCards1={...state}
                for(;!state.pass[1];){
                    newAllCards1={...endTurn(
                        newAllCards1.allCards.cardOpponent,
                        newAllCards1.allCards.cards)}
                }
                endGame({...newAllCards1});
                return {
                    ...state,
                    ...newAllCards1}

            }
            break
        case 'NEWGAME':
            const newResults1=state.results.map((value,i)=>{return value=false})
            return{...state,
                results:newResults1,
                ...distributionCard(),
                pass:[false,false],};
        case 'GIVEAWAYTHECARS':
            return{...state,
                ...distributionCard()};
        case 'ENDTURN':
                let newAllCards1=state.allCards.cardOpponent//mozliwe do poprawy !!!
                let newAllCards2=state.allCards.cards
                return {...endTurn(newAllCards1,newAllCards2)}
        default:
            return state;
    }
};

export default reducer;
