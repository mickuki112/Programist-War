import React, { Component } from 'react';
import Cards from '../../components/Game/Cards/Cards';
import styles from './Game.module.css';
import math from 'mathjs';
import Table from '../../components/Game/Table/Table';
class Builder extends Component{
    state={
        cards:[{position:false},
            {position:false},
            {position:false},
            {position:false},
            {position:false},
            {position:false}]
    }
    game={
        hoverCard:false,
        fieldPlayed:false,
        field:[false,false,false,false,false,false,false,false,false,false],
    }
    action=()=>{
        this.setState({
            cards:[{position:1},{position:1},{position:1},{position:1},{position:1},{position:1},]
        });
    }
    playTheCard=(id)=>{
        this.game.field[id]=true;
        this.game.fieldPlayed=id;
        const arayCards={...this.state}
        arayCards.cards[this.game.hoverCard].position=id;
        this.setState({...arayCards})
    }
    hoverCard=(id)=>{
        this.game.hoverCard=id;
    }
    render(){
        const card=this.state.cards.map((counter,i)=>{
            const lenght=this.state.cards.length;
            let styleCard=null;
            if(counter.position){
                styleCard={transform:"translate3d(-"+(-i*(300/lenght)+650)+"%,"+(-50+math.abs(i-lenght/2)*(70/lenght))+"px,"+(i+5)+"px) rotate("+(-30+(60/(lenght-1))*i)+"deg)",};//do prawy Y i x
            }
            if(counter.position>1){
                styleCard={transform:"translate3d(-"+(-i*(300/lenght)+650)+"%,"+(-300)+"%,"+(i+5)+"px) rotate("+(-30+(60/(lenght-1))*i)+"deg)",};//do prawy Y i x
            }
            return <Cards clicked={()=>{this.hoverCard(i)}} key={i} stylesCard={styleCard}/>
        })
        return(
            <div className={styles.GameDiv}>
            <button onClick={this.action}>Start Game</button>
            <Table clicked={this.playTheCard} field={this.game.field}/>
                {card}
            </div>
        );
    }
}

export default Builder;
