import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredients.css';

//This lets the burgerIngredients become, dynamic b y setting up a swtitch case function.





class BurgerIngredients extends React.Component {
    render (){
        let ingredient =null; // This is to protect for if something invalid is passed in
                          // THis ends up being changed when the proper, case is put in.

    switch(this.props.type){
        case('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case('bread-top'): 
            ingredient = (
                <div className ={classes.BreadTop}>
                    <div className = {classes.Seeds1}></div>
                    <div className = {classes.Seeds2}></div>
                </div>
            );
            break;
            case('meat'):
                ingredient = <div className= {classes.Meat}></div>;
                break;
            case ('cheese'): 
                ingredient = <div className = {classes.Cheese}></div>;
                break;
            case('salad'):
                ingredient = <div className = {classes.Salad}></div>;
                break;
            case ('bacon'):
                ingredient = <div className = {classes.Bacon}></div>
                break;
            default: 
                ingredient = null;
    }
    return ingredient;
    }
}

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
}


export default BurgerIngredients;