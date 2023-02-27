import React from 'react';
import FormCart from './components/bodyForm';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar data={'FoodBar'} />
      <FormCart />
    </div>
  );
}

export default App;
