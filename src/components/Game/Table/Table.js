import React from 'react';
import Add from './Add/Add';
import styles from './Table.module.css';

const Table=(props)=>{
    const table=props.field.map((_,i)=>{
        return <Add key={i} clicked={(()=>props.clicked(i))}/>
    })
    return(
    <React.Fragment>
        <div className={styles.TableRow}>
            {table}
        </div>
    </React.Fragment>
);}

export default Table;
