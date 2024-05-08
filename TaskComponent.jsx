// TaskComponent.jsx
import React, { useState, useEffect, useContext } from 'react';
import ThemeContext from './ThemeContext';

function TaskComponent() {
  const [count, setCount] = useState(0);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  const themeStyle = {
    backgroundColor: theme ? 'black' : 'grey',
    color: theme ? 'grey' : 'black',
    padding: '2rem',
    margin: '2rem',
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <div style={themeStyle}>
        This is made by Kalvium
      </div>
    </div>
  );
}

export default TaskComponent;
