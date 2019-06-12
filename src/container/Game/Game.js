import React, { Component } from 'react';
import Cards from '../../components/Game/Cards/Cards';
import styles from './Game.module.css';
import math from 'mathjs';
import Table from '../../components/Game/Table/Table';
import { connect } from 'react-redux';
import LeftPanel from '../../components/Game/Panels/LeftPanel/LeftPanel';
import ButtonGame from '../../components/Game/ButtonGame/ButtonGame';
class Builder extends Component{
    state={
        aray:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        valueButton:"Start Game",
        hoverCardBlock:false,
    }//^^ta dablica nie potrzebna !!!
    game={
        hoverCard:false,
        fieldPlayed:false,
    }
    action=()=>{
        this.setState({valueButton:"Pass"});
        this.props.giveAwayTheCards();
    }
    playTheCard=(id)=>{
        if(this.game.hoverCard && !this.props.results[id]){
            this.setState({valueButton:"End Turn",hoverCardBlock:true});
            this.game.fieldPlayed=id;
            this.props.playTheCard(this.game.hoverCard,this.game.fieldPlayed);
        }
    }
    endTur=()=>{
        this.setState({valueButton:"Pass",hoverCardBlock:false})
        this.props.endTurn();
        this.game.hoverCard=false;
    }
    hoverCard=(id,position)=>{
        if(40!==position && !this.state.hoverCardBlock){
            this.game.hoverCard=id;
            this.setState({hoverCardBlock:true})
        }
    }
    tableNuber=(position)=>{if(position<5)
        return(5);
    else
        return(10);}
    pass=()=>{
        this.setState({valueButton:"New Game"});
        this.props.pass()
    }
    newGame=()=>{
        this.props.newGame()
        this.setState({valueButton:"Start Game"});
    }
    cardGo=(position)=>{
        if(this.game.hoverCard){
            this.props.cardGo(this.game.hoverCard,position);
            this.setState({hoverCardBlock:false,valueButton:"Pass"})
        }
    }
    render(){
        const card=this.props.allCards.cards.map((counter,i)=>{
            const lenght=this.props.allCards.cards.length;
            let styleCard=null;
            if(counter.position===50){
                styleCard={transform:"translate3d(-"+(-i*(300/lenght)+650)+"%,"+(155+math.abs(i-lenght/2)*(70/lenght))+"%,"+(i+30)+"px) rotate("+(-30+(60/(lenght-1))*i)+"deg)",display: 'block'};//do prawy Y i x
            }else
            if(counter.position>=0 && 20>=counter.position){
                styleCard={transform:"translate3d(-"+(326+76*(this.tableNuber(counter.position)-counter.position))+"%,"+(34+(this.tableNuber(counter.position)-5)*11.5)+"%,"+(i+5)+"px) rotate(0deg) scale(0.5)",display: 'block'};//do prawy Y i x
            }
            if(counter.position===40){
                return <Cards clicked={()=>{this.hoverCard(i,counter.position)}} key={i} stylesCard={styleCard}></Cards>
            }
            return <Cards clicked={()=>{this.hoverCard(i,counter.position)}} key={i} stylesCard={styleCard} valCards={counter.value}>{counter.pictures}</Cards>
        })


        const cardOpponent=this.props.allCards.cardOpponent.map((counter,i)=>{
            const lenght=this.props.allCards.cardOpponent.length;
            let styleCard=null;
            if(counter.position===50){
                styleCard={transform:"translate3d(-"+(i*(300/lenght)+400)+"%,"+(-160-math.abs(i-lenght/2)*(70/lenght))+"%,"+(i+5)+"px) rotate("+(-30+(60/(lenght-1))*i)+"deg)",display: 'block'};//do prawy Y i x
            }
            if(counter.position>=0 && 20>=counter.position){
                styleCard={transform:"translate3d(-"+(326+76*((this.tableNuber(counter.position-10)-(counter.position-10))))+"%,"+((this.tableNuber(counter.position-10))*(-11.5)+36)+"%,"+(i+5)+"px) rotate(0deg) scale(0.5)",display: 'block'};//do prawy Y i x
                return <Cards clicked={()=>{this.hoverCard(i,0)}} key={i} stylesCard={styleCard} valCards={counter.value}>{counter.pictures}</Cards>
            }
            return <Cards clicked={()=>{this.hoverCard(i,0)}} key={i} stylesCard={styleCard}></Cards>
        })
        const functionButton=()=>{
            if(this.state.valueButton==='Start Game'){return this.action()}else
            if(this.state.valueButton==='Pass'){return this.pass()}else
            if(this.state.valueButton==='End Turn'){return this.endTur()}else
            if(this.state.valueButton==='New Game'){return this.newGame()}
        }
        return(
            <div className={styles.GameDiv}>
                {cardOpponent}
            <Table clicked={this.playTheCard} field={this.state.aray}/>
                {card}
                <LeftPanel>
                    <div className={styles.cardOptions0} onClick={()=>{this.cardGo(40)}}><i className="demo-icon icon-trash"></i></div>
                    <ButtonGame onClick={functionButton}>{this.state.valueButton}</ButtonGame>
                    <div className={styles.cardOptions1} onClick={()=>{this.cardGo(50)}}><i className="demo-icon icon-reply-all"></i></div>
                </LeftPanel>
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
        pass: () =>dispatch({type: 'PASS'}),
        newGame: () =>dispatch({type: 'NEWGAME'}),
        cardGo: (hoverCard,val) =>dispatch({type: 'CARDGO', val: hoverCard,fieldPlayed: val}),
    }
};

export default connect(mapStateToProps ,mapDispatchToProps)(Builder);
