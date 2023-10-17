import React, { useState } from 'react';

function Counter2() {
  const [count, setCount] = useState({ count1: 0, count2: 0 });

  const increase1 = () => {
    setCount((prevCount) => ({
      ...prevCount,
      count1: prevCount.count1 + 1,
    }));
  };

  const increase2 = () => {
    setCount((prevCount) => ({
      ...prevCount,
      count2: prevCount.count2 + 2,
    }));
  };

  return (
    <div>
      <h2>Increments</h2>
      <p>Count1: {count.count1}</p>
      <p>Count2: {count.count2}</p>
      <button onClick={increase1}>Increase By One</button>
      <button onClick={increase2}>Increase By Two</button>
    </div>
  );
}

export default Counter2;

