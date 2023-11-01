import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Item from "./Item";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [cartItems, setCartItems] = useState([]);
  const [darkMode, setDarkMode] = useState('false')

  const appClass = darkMode ? "App dark" : "App light"
  
  function toggleDarkMode(event){
    setDarkMode(!darkMode);

  }

  function addToCart(itemName){
    setCartItems([...cartItems, itemName])
  }

  function removeFromCart(itemName){
    setCartItems(cartItems.filter((item) => item !== itemName));
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {toggleDarkMode}>Dark Mode</button>
      </header>
      <Item addToCart={addToCart} removeFromCart={removeFromCart} />
      <ShoppingList items={itemData} addToCart={addToCart} />
    </div>
  );
}

export default App;
