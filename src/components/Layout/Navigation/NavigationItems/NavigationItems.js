import React from 'react';
import styles from './NavigationItems.module.css'
import NavigationItem from'./NavigationItem/NavigationItem'

const NavigationItems=(props)=>(
    <ul className={styles.NavigationItems}>
        {!props.isAuthenticated
            ? <NavigationItem link="/sign_in">signin</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>}
        <NavigationItem link='/game'> Game </NavigationItem>
        <NavigationItem link='/genesis_of_cards'>Genesis of cards</NavigationItem>
        <NavigationItem link='/how_to_play'> How to play </NavigationItem>
        <NavigationItem link='/abaut'> About </NavigationItem>
    </ul>
)

export default NavigationItems;
