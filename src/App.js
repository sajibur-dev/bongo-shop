import React from 'react';
import Answers from './Components/Answers/Answers';
import NavBar from './Components/NavBar/NavBar';
import Shop from './Components/Shop/Shop';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Shop/>
      <Answers/>
    </div>
  );
};

export default App;