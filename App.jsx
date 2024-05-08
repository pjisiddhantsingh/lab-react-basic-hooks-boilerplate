// App.jsx
import React, { useState } from 'react';
import './App.css';
import TaskComponent from './TaskComponent';
import ThemeContext from './ThemeContext';

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(prevTheme => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <button onClick={toggleTheme}>Toggle Theme</button>
        <TaskComponent />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
