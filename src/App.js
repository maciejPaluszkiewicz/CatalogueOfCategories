import React from 'react';
import './App.css';
import ListOfCategories from './components/ListOfCategories';
import Controls from './components/Controls';

function App() {
  return (
    <div className="App">
      <ListOfCategories />
      <Controls />
    </div>
  );
}

export default App;
