import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';




const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {buildControls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
);

export default buildControls;