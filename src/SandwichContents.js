import React from 'react';
import { getRandomBread, getRandomFilling, getRandomToppingList, getRandomSauceList, getRandomCheese } from './sandwichGenerator';

export class SandwichContents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            bread: getRandomBread(),
            meat: getRandomFilling(),
            cheese: getRandomCheese(),
            toppingList: getRandomToppingList(),
            sauceList: getRandomSauceList(),
        };
    }
    
    render(){
        return(
            <div>   
                <div className={"label"}>Meat:</div>
                {this.state.meat}
                <br/>
                <div className={"label"}>Bread:</div>
                {this.state.bread}
                <br/>
                <div className={"label"}>Cheese:</div>
                {this.state.cheese}
                <br/>
                <div className={"label"}>Veggies:</div>
                {this.state.toppingList}
                <br/>
                <div className={"label"}>Sauces:</div>
                {this.state.sauceList}
            </div>
        )
    }
}