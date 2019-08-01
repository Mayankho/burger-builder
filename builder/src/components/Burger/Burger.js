import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';




const Burger = (props) => {
    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type ="bread-top"/>
            <BurgerIngredient type = "cheese" />
            <BurgerIngredient type = "meat"/>
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