
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Error from './pages/Error';
import Button from '@mui/material/Button'; // Додайте цей імпорт

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Button component={Link} to="/login">Login</Button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
