import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendingMachine from './components/VendingMachine';
import Chips from './components/Chips';
import Candy from './components/Candy';
import Soda from './components/Soda';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/snack/chips" element={<Chips />} />
          <Route path="/snack/candy" element={<Candy />} />
          <Route path="/snack/soda" element={<Soda />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
