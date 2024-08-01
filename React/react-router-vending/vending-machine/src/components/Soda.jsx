import React from 'react';
import { Link } from 'react-router-dom';

function Soda() {
  return (
    <div>
      <h1>Soda</h1>
      <p>Refreshing fizzy soda!</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Soda;
