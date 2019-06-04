import React from 'react';
import sytles from './LeftProps.module.css';

const LeftPanel=(props)=>(
    <div className={sytles.LeftPanelBack}>
        <div className={sytles.LeftPanel}>
            <div className={sytles.Button}>
                {props.children}
            </div>
        </div>
    </div>
)

export default LeftPanel;
