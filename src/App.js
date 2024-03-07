import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
   <AppProvider>
    <div className="App mx-5">
        <h1>Shopping App</h1>
        <div className = " d-flex gap-3 ">
            <CartValue/>
            <Location/>
        </div>

        <h2>Shopping Cart</h2>
        <ExpenseList></ExpenseList>
        <h2>Add Items</h2>
        <ItemSelected></ItemSelected>
    </div>
</AppProvider>
  );
}

export default App;