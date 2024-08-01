import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine() {
  return (
    <div>
      <h1>Vending Machine</h1>
      <ul>
        <li><Link to="/snack/chips">Chips</Link></li>
        <li><Link to="/snack/candy">Candy</Link></li>
        <li><Link to="/snack/soda">Soda</Link></li>
      </ul>
    </div>
  );
}

export default VendingMachine;