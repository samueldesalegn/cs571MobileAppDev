// import React, { useReducer } from "react";

// // const initState = {count: 0}

// const reducer = (state, action) => {
// 	switch (action.type) {
// 		case "Increment":
// 			return {...state, count: state.count + 1};
// 		case "Decrement":
// 			return {...state, count: state.count - 1};
		
// 		case "Reset":
// 			return {...state, count:0}
// 		default:
// 			return state;
// 	}
// }

// function CounterWithReducer(){
// 	const [state, dispatch] = useReducer(reducer, {count: 0});
// 	const increase = () =>dispatch({type: "Increment"});
// 	const decrease = () =>dispatch({type: "Decrement"});
// 	const reset = () =>dispatch({type: "Reset"});

// 	return (
// 		<div>
// 			<h2>My Reducer App</h2>
// 			<p>Count: {state.count}</p>
// 			<button onClick={increase}>Increment</button>
// 			<button onClick={decrease}>Decrement</button>
// 			<button onClick={reset}>Reset</button>
// 		</div>
// 	)


// }

// export default CounterWithReducer;

import React, { useReducer } from "react";

// Define action types as constants
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLEAR_CART = "CLEAR_CART";

// Reducer function to manage cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the item is already in the cart
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        // If it's in the cart, update the quantity
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If it's not in the cart, add it with quantity 1
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case REMOVE_FROM_CART:
      // Remove the item from the cart
      return state.filter((item) => item.id !== action.payload.id);

    case CLEAR_CART:
      // Clear the entire cart
      return [];

    default:
      return state;
  }
};

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: REMOVE_FROM_CART, payload: item });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => addToCart(item)}>+</button>
            <button onClick={() => removeFromCart(item)}>-</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default ShoppingCart;
