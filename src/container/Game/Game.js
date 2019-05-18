import React, { Component } from 'react';
import Cards from '../../components/Game/Cards/Cards';
import styles from './Game.module.css';
import math from 'mathjs';
import Table from '../../components/Game/Table/Table';
import * as cardAttributes from '../../components/Game/Cards/cardAttributes';
import { connect } from 'react-redux';


class Builder extends Component{
    state={
        aray:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    }//^^ta dablica nie potrzebna !!!
    game={
        hoverCard:false,
        fieldPlayed:false,
    }
    action=()=>{
        this.props.giveAwayTheCards();
    }
    playTheCard=(id)=>{
        this.game.fieldPlayed=id;
        this.props.playTheCard(this.game.hoverCard,this.game.fieldPlayed);
    }
    endTur=()=>{
        this.props.endTurn();
    }
    hoverCard=(id)=>{
        this.game.hoverCard=id;
    }
    tableNuber=(position)=>{if(position<5)
        return(5);
    else
        return(10);}
    render(){
        const card=this.props.allCards.cards.map((counter,i)=>{
            const lenght=this.props.allCards.cards.length;
            let styleCard=null;
            if(counter.position==50){
                styleCard={transform:"translate3d(-"+(-i*(300/lenght)+650)+"%,"+(155+math.abs(i-lenght/2)*(70/lenght))+"%,"+(i+30)+"px) rotate("+(-30+(60/(lenght-1))*i)+"deg)",};//do prawy Y i x
            }else
            if(counter.position>=0 && 20>=counter.position){
                styleCard={transform:"translate3d(-"+(326+76*(this.tableNuber(counter.position)-counter.position))+"%,"+(34+(this.tableNuber(counter.position)-5)*11.5)+"%,"+(i+5)+"px) rotate(0deg) scale(0.5)",};//do prawy Y i x
            }
            return <Cards clicked={()=>{this.hoverCard(i)}} key={i} stylesCard={styleCard} valCards={counter.value}/>
        })


        const cardOpponent=this.props.allCards.cardOpponent.map((counter,i)=>{
            const lenght=this.props.allCards.cardOpponent.length;
            let styleCard=null;
            if(counter.position==50){
                styleCard={transform:"translate3d(-"+(i*(300/lenght)+400)+"%,"+(-160-math.abs(i-lenght/2)*(70/lenght))+"%,"+(i+5)+"px) rotate("+(-30+(60/(lenght-1))*i)+"deg)",};//do prawy Y i x
            }
            if(counter.position>=0 && 20>=counter.position){
                styleCard={transform:"translate3d(-"+(326+76*((this.tableNuber(counter.position-10)-(counter.position-10))))+"%,"+((this.tableNuber(counter.position-10))*(-11.5)+36)+"%,"+(i+5)+"px) rotate(0deg) scale(0.5)",};//do prawy Y i x
            }
            return <Cards clicked={()=>{this.hoverCard(i)}} key={i} stylesCard={styleCard} valCards={counter.value}/>
        })


        return(
            <div className={styles.GameDiv}>
                {cardOpponent}
            <Table clicked={this.playTheCard} field={this.state.aray}/>
                {card}
                <button onClick={this.action}>Start Game</button>
                <button onClick={this.endTur}>endTur</button>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        allCards: state.table.allCards,
        results: state.table.results,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        playTheCard: (hoverCard,fieldPlayed) => dispatch({type: 'PLAY_THE_CARD', val: hoverCard, id: fieldPlayed }),
        giveAwayTheCards: () =>dispatch({type: 'GIVEAWAYTHECARS'}),
        endTurn: () =>dispatch({type: 'ENDTURN'}),
    }
};

export default connect(mapStateToProps ,mapDispatchToProps)(Builder);
