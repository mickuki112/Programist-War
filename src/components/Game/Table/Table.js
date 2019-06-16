import React from 'react';
import Add from './Add/Add';
import styles from './Table.module.css';

const Table=(props)=>{
    const style={opacity:'0',}
    const table0=props.field.map((_,i)=>{
    if(5>i){
        return <Add key={i}
            styles={_ ? style : null}
            clicked={(()=>props.clicked(i))}/>
    }
    })
    const table1=props.field.map((_,i)=>{
    if(5<=i && i<10){
        return <Add key={i}
            styles={_ ? style : null}
            clicked={(()=>props.clicked(i))}/>
    }
    })
    const table2=props.field.map((_,i)=>{
    if(10<=i && i<15){
        return <Add key={i}
            styles={_ ? style : null}
            clicked={(()=>props.clicked(i))}/>
    }
    })
    const table3=props.field.map((_,i)=>{
    if(15<=i && i<20){
        return <Add key={i}
            styles={_ ? style : null}
            clicked={(()=>props.clicked(i))}/>
    }
    })
    return(
    <React.Fragment>
    <div className={styles.Buffor}></div>
    <div className={styles.TableRow}>
        {table3}
    </div>
    <div className={styles.TableRow}>
        {table2}
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
