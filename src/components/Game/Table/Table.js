import React from 'react';
import Add from './Add/Add';
import styles from './Table.module.css';

const Table=(props)=>{
    const table0=props.field.map((_,i)=>{
    if(5>i){
        return <Add key={i} clicked={(()=>props.clicked(i))}/>
    }
    })
    const table1=props.field.map((_,i)=>{
    if(5<=i){
        return <Add key={i} clicked={(()=>props.clicked(i))}/>
    }
    })
    return(
    <React.Fragment>
    <div className={styles.Buffor}></div>
    <div className={styles.TableRow}>
        {table0}
    </div>
    <div className={styles.TableRow}>
        {table1}
    </div>
        <div className={styles.TableRow}>
            {table0}
        </div>
        <div className={styles.TableRow}>
            {table1}
        </div>
    </React.Fragment>
);}

export default Table;
