// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import Dashboard from './components/Dashboard';
import BookingList from './components/BookingList';
import { AppProvider } from './context/AppContext';
import './App.css';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
          </nav>
        </header>
        <div className="app">
          <h1>Test Drive Management System</h1>
          <Routes>
            <Route path="/" element={<BookingForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <BookingList/>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
