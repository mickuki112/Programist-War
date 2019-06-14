import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css'
import Backdrop from '../../../UI/Modal/Backdrop/Backdrop';

const SideDrawer =(props)=>{
    let attachedClasses=[styles.SideDrawer,styles.Close]
    if(props.open){
        attachedClasses=[styles.SideDrawer, styles.Open]
    }
    return(
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={styles.Logo}>

                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth} userInf={props.userInf}/>
                </nav>
            </div>
        </React.Fragment>
    );
};
export default SideDrawer;
