import React, { createContext, useState } from 'react';

// Create a Context for the app
export const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  // State to store available car models and their availability
  const [availableModels, setAvailableModels] = useState({
    'A200': {},
    'A200d': {},
    'C200': {},
    'C220d': {},
    'C300': {},
    'E200': {},
    'E220d': {},
    'E350d': {},
    'S350': {},
    'GLA': {},
    'GLC': {},
    'GLB': {},
    'GLS': {},
    'EQA': {},
    'EQB': {},
    'EQS': {},
  });

  // State to store sales consultants
  const [salesConsultants] = useState([
    { name: 'Shefali Jain' },
    { name: 'Harsh' },
    { name: 'Amogh' },
    { name: 'Aditya' },
    { name: 'Anusmita' },
    { name: 'Ajinkya' },
    { name: 'Nidhi' },
    { name: 'Anmol' },
    { name: 'Vaibhav' },
    { name: 'Durgesh' },
    { name: 'Imaad' },
    { name: 'Sushil' },
  ]);

  // State to store bookings
  const [bookings, setBookings] = useState([]);

  // Function to format date to a string
  const formatDate = (date) => date.toDateString();

  // Check if a car model is available on a specific date
  const isCarAvailable = (modelName, date) => {
    const dateString = formatDate(date);
    return !availableModels[modelName] || !availableModels[modelName][dateString];
  };

  // Update availability for a car model on a specific date
  const updateAvailability = (modelName, date, availability) => {
    setAvailableModels(prevModels => ({
      ...prevModels,
      [modelName]: {
        ...prevModels[modelName],
        [formatDate(date)]: !availability,
      }
    }));
  };

  // Add a booking and update the car availability
  const addBooking = (booking) => {
    setBookings(prevBookings => [...prevBookings, booking]);
    updateAvailability(booking.carModel, new Date(booking.date), false);
  };

  return (
    <AppContext.Provider value={{ availableModels, isCarAvailable, updateAvailability, salesConsultants, bookings, addBooking }}>
      {children}
    </AppContext.Provider>
  );
};
