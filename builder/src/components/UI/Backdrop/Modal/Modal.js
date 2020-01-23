import React from "react"

import classes from './Modal.css'

const modal = (props) => ( 
    <div className = {classes.Modale}>
        {props.children}
    </div>
);

export default modal;

