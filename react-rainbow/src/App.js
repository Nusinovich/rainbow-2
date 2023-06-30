import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {
  let [colors, setColors] = useState (['blue', 'green', 'yellow', 'orange', 'red'])
  
  let colorMap = colors.map((color, i)=> {
    return(
      <ColorBlock color={color} />
    )
  })

  let addColor = (newColor) => {
    setColors(['blue', 'green', 'yellow', 'orange', 'red', newColor])
  }

  return(
    <div className="App">
     {colorMap}
     <ColorForm addColor={addColor} />
    </div>
  )
}

export default App;

//test
