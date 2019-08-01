import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';




const Burger = (props) => {
    const transformedIngredients = Object.key(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingresients[igKey])].map((_, i) => {
                return <BurgerIngredient key = {igKey + i} type = {igKey}/>;
            })
        }); // Keys returns an array, and you can create an array with the spread operator...,
        //
    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type ="bread-top"/>
           {transformedIngredients}
            <BurgerIngredient type = "bread-bottom"/>
        </div>
    );
};





// class Burger extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             currentBurgerIngredients = []
//         }
//     }
//     render(){
//         return(
//             <div className = 'burger-create'>
//                 <BurgerIngredients />
//             </div>
//         )
//     }
// }

// Reason for this component --> Defines the wi

export default Burger;