import React from 'react';
import Aux from '../../hoc/Aux';
import classes from '../Layout/layout.css'

const layout  = (props) => (
    <Aux>
         <div>Toolbar, Sidedrawer, backdrop</div>
    <main className = {classes.Content}>
        {props.children}
    </main>
    </Aux>
    // Wrapping this in the aux fufills having a wrapping root div, 
    //This is the same thing as having A provider forom redux wrappong around the ap 
)

export default layout;