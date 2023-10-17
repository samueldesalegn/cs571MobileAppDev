import React from 'react';
import './App.css';
// import Counter1 from './Counter1'; 
import Counter2 from './Counter2'; 
import FocusInput from './refExample'; 
import CounterWithReducer from './CountReducer'

function App() {
  return (
    <div className="App">
      <h1>React Counter App</h1>
      {/* <Counter1 /> */}
      <Counter2 />
      <FocusInput />
      <CounterWithReducer />
    </div>
  );
}

export default App;



