import React from 'react';
import { Link } from 'react-router-dom';

function Chips() {
  return (
    <div>
      <h1>Chips</h1>
      <p>Delicious salty chips!</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Chips;
