import React, { useRef, useState } from 'react';

function FocusInput() {
  const inputRef = useRef(null);
  const [enteredText, setEnteredText] = useState('');

  const updateEnteredText = () => {
    if (inputRef.current) {
      setEnteredText(inputRef.current.value);
    }
  };

  return (
    <div>
      <h2>Display Entered Text</h2>
      <input ref={inputRef} type="text" placeholder="Enter text" />
      <button onClick={updateEnteredText}>Display Entered Text</button>
      <p>You entered: {enteredText}</p>
    </div>
  );
}

export default FocusInput;

