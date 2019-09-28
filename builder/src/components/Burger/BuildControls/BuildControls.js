import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]


const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {buildControls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added = {() => props.ingredientAdded(ctrl.type)} />
        ))}
    </div>
);

//Mapping each element of the array into the Build Control component
// Need to keep up  with which type the build control

export default buildControls;