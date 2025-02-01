import './App.css'
import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Cora from './pages/Cora';
import Honeybud from './pages/Honeybud';
import Innod from './pages/Innod';
import Pathway from './pages/Pathway';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cora" element={<Cora />} />
            <Route path="/honeybud" element={<Honeybud />} />
            <Route path="/pathway" element={<Pathway />} />
            <Route path="/innod" element={<Innod />} />
        </Routes>
    </Router>
);
}

export default App
