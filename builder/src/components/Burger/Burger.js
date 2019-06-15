import React from 'reat';



class Burger extends React.Component{
    constructor(){
        super();
        this.state = {
            currentBurgerIngredients = []
        }
    }
    
    render(){
        return(
            <div className = 'burger-create'>
                <BurgerIngredients />
            </div>
        )
    }
   

}




export default Burger;