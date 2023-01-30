import React from 'react';
import ToggleLangs from './components/btnLang'
import Layout from './components/layout';
import './App.css';
import MonContext from './context/myContext';





function App() {
  return (
    <div className="App">
    <MonContext>
      <ToggleLangs />
      <Layout />
    </MonContext>
    </div>
  );
}

export default App;
