import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';




const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key = {igKey + i} type = {igKey}/>;
            })
        }).reduce((arr, el) => {
            return arr.concat(el)
        },[]);
        if (transformedIngredients.length === 0 ){
            transformedIngredients = <p>Please Start adding ingredients!</p>
        } // Keys returns an array, and you can create an array with the spread operator...,
        console.log(transformedIngredients);
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