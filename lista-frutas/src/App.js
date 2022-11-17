
import { useState } from 'react';
import './App.css';
import {ButtonFilter, Fruits, TotalPrice} from '../src/components/Fruits'

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  function filterRedFruits(){
    const redFruits = fruits.filter(fruit =>{
      if(fruit.color === "red"){
       
        return fruit
      }
    })
    setFruits(redFruits)
  }

  function someFruits(){
    const prices = fruits.map(fruit =>{
      return fruit.price
    })
  
    const totalPrice = prices.reduce((acc, cur) =>{
      return acc + cur
    },0)
    
    return totalPrice
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <TotalPrice total={someFruits()}/>
        {
          fruits.map((fruit, index) =>{
            return(
              <Fruits key={index} name={fruit.name} />
            )
          })
        }
        <ButtonFilter onClick={filterRedFruits}/>
        
      </header>
    </div>
  );
}

export default App;
