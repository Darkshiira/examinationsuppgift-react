import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

import Home from './pages/Home';
import List from './pages/List';
import Creature from './pages/Creature';
import Add from './pages/Add';

function App() {
  return (
    <div className= "App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/list/:id" element={<Creature />} />
          <Route path="/add" element={<Add />} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
