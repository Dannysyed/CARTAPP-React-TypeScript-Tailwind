import React from 'react';
import FormCart from './components/bodyForm';
import Navbar from './components/navbar';
import itemData from './models/itemType';

function App() {
  let data: itemData[] = [{ id: 1, title: 'Pizza', quantity: 10 }, { id: 2, title: 'Burger', quantity: 10 }]
  return (
    <div>
      <Navbar data={'FoodBar'} />
      <FormCart itemData={data} />
    </div>
  );
}

export default App;
