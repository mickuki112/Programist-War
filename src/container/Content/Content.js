import React, { Component } from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';
import Game from '../Game/Game';
import Abaut from '../../components/Abaut/Abaut'
import Sign_in from '../Sign_in/Sign_in';

class Content extends Component{
    render(){
        return(
            <Switch>
                <Route path='/sign_in' exact  component={Sign_in}/>
                <Route path='/abaut' exact  component={Abaut}/>
                <Route path='/game' component={Game}/>
                <Redirect from="/" to="/game"  />
            </Switch>
        );
    }
}
export default Content;
