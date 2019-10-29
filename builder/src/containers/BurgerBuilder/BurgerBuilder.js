import React, { Component } from 'react'
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5, 
    bacon: 0.4, 
    cheese: 0.5, 
    meat: 1.3
}

//All capital letter variables are global


class BurgerBuilder extends Component{
    state = { 
        ingredients: {
            salad: 0,
            bacon: 0, 
            cheese: 0, 
            meat: 0
        },
        totalPrice: 4,
    }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        //Type is going to be the name of the ingredient. \
        const updatedCounted = oldCount + 1;
        updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice  = this.state.totalPrice;
        const newPrice = oldPrice + PriceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    }

    removeIngredientHandler = (type) => {

    }
    
    render(){
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls ingredientsAdded = {this.addIngredientsHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;