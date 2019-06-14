import React, { Component } from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';
import Game from '../Game/Game';
import Abaut from '../../components/Abaut/Abaut'
import Auth from '../Auth/Auth';
import { connect } from 'react-redux';
import Layout from '../../components/Layout/Layout'
import Logout from '../Auth/Logout/Logout';
import GenesisOfCards from '../GenesisOfCards/GenesisOfCards';
import HowToPlay from '../HowToPlay/HowToPlay';
class Content extends Component{
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }
    render(){
        return(
            <Layout
            userInf={this.props.userInf}
            isAuth={this.props.isAuthenticated}>
                <Switch>
                    <Route path='/sign_in' exact  component={Auth}/>
                    <Route path='/abaut' exact  component={Abaut}/>
                    <Route path="/logout" component={Logout} />
                    <Route path='/genesis_of_cards' component={GenesisOfCards}/>
                    <Route path='/how_to_play' component={HowToPlay}/>
                    <Route path='/game' component={Game}/>
                    <Redirect from="/" to="/game"  />
                </Switch>
            </Layout>
        );
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        userInf: state.auth.email
    };
};
export default connect( mapStateToProps )(Content);
