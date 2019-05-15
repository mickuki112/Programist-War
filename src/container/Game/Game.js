import React, { Component } from 'react';
import Cards from '../../components/Game/Cards/Cards';
import styles from './Game.module.css';
import math from 'mathjs';
import Table from '../../components/Game/Table/Table';
import * as cardAttributes from '../../components/Game/Cards/cardAttributes';
import { connect } from 'react-redux';


class Builder extends Component{
    state={
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
    game={
        hoverCard:false,
        fieldPlayed:false,
        field:[false,false,false,false,false,false,false,false,false,false],
    }
    action=()=>{
        const newState={...this.state};
        newState.cards.map((card)=>{
            card.position=30;
        });
        newState.cardOpponent.map((card)=>{
            card.position=30;
        });
        this.setState({...newState});
    }
    playTheCard=(id)=>{
        this.game.fieldPlayed=id;
        const arayCards={...this.state}
        arayCards.cards[this.game.hoverCard].position=id;
        this.setState({...arayCards})

        this.props.playTheCard(this.game.hoverCard,this.game.fieldPlayed);
    }
    hoverCard=(id)=>{
        this.game.hoverCard=id;
    }
    tableNuber=(position)=>{if(position<5)
        return(5);
    else
        return(10);}
    render(){
        const card=this.state.cards.map((counter,i)=>{
            const lenght=this.state.cards.length;
            let styleCard=null;
            if(counter.position==30){
                styleCard={transform:"translate3d(-"+(-i*(300/lenght)+650)+"%,"+(155+math.abs(i-lenght/2)*(70/lenght))+"%,"+(i+30)+"px) rotate("+(-30+(60/(lenght-1))*i)+"deg)",};//do prawy Y i x
            }else
            if(counter.position>=0 && 10>=counter.position){
                styleCard={transform:"translate3d(-"+(326+76*(this.tableNuber(counter.position)-counter.position))+"%,"+(34+(this.tableNuber(counter.position)-5)*11.5)+"%,"+(i+5)+"px) rotate(0deg) scale(0.5)",};//do prawy Y i x
            }
            return <Cards clicked={()=>{this.hoverCard(i)}} key={i} stylesCard={styleCard}/>
        })


        const cardOpponent=this.state.cardOpponent.map((counter,i)=>{
            const lenght=this.state.cardOpponent.length;
            let styleCard=null;
            if(counter.position==30){
                styleCard={transform:"translate3d(-"+(i*(300/lenght)+400)+"%,"+(-160-math.abs(i-lenght/2)*(70/lenght))+"%,"+(i+5)+"px) rotate("+(-30+(60/(lenght-1))*i)+"deg)",};//do prawy Y i x
            }
            if(counter.position>=0 && 10>=counter.position){
                styleCard={transform:"translate3d(-"+(-i*(300/lenght)+650)+"%,"+(-300)+"%,"+(i+5)+"px) rotate("+(-30+(60/(lenght-1))*i)+"deg)",};//do prawy Y i x
            }
            return <Cards clicked={()=>{this.hoverCard(i)}} key={i} stylesCard={styleCard}/>
        })


        return(
            <div className={styles.GameDiv}>
                {cardOpponent}
            <Table clicked={this.playTheCard} field={this.game.field}/>
                {card}
                <button onClick={this.action}>Start Game</button>

            </div>
        );
    }
}



const mapDispatchToProps = dispatch => {
    return {
        playTheCard: (hoverCard,fieldPlayed) => dispatch({type: 'PLAY_THE_CARD', val: hoverCard, id: fieldPlayed }),
    }
};

export default connect(null ,mapDispatchToProps)(Builder);
