import React from 'react';
import FormCart from './components/bodyForm';
import Navbar from './components/navbar';

function App() {
  let data = [{ id: 1, title: 'Pizza' }, { id: 2, title: 'Burger' }]
  return (
    <div>
      <Navbar data={'FoodBar'} />
      <FormCart itemData={data} />
    </div>
  );
}

export default App;
