// src/components/BookingForm.js
import React, { useState, useContext } from 'react';
import CustomDatePicker from './CustomDatePicker';
import TimePicker from './TimePicker';
import CarModelDropdown from './CarModelDropdown';
import SalesConsultantDropdown from './SalesConsultantDropdown';
import { AppContext } from '../context/AppContext';
import './BookingForm.css';

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [selectedCarModel, setSelectedCarModel] = useState(null);
  const [selectedConsultant, setSelectedConsultant] = useState(null);
  const { isCarAvailable, addBooking } = useContext(AppContext);

  const handleSubmit = () => {
    if (!selectedCarModel || !selectedConsultant) {
      alert('Please select both a car model and a sales consultant.');
      return;
    }

    const newBooking = {
      date: selectedDate,
      startTime,
      endTime,
      carModel: selectedCarModel.value,
      consultant: selectedConsultant.value,
    };

    addBooking(newBooking);

    // Reset the form (optional)
    setSelectedDate(new Date());
    setStartTime(new Date());
    setEndTime(new Date());
    setSelectedCarModel(null);
    setSelectedConsultant(null);
  };

  return (
    <div className="booking-form">
      <h2>Book a Test Drive</h2>
      <div className="form-group">
        <label>Date</label>
        <CustomDatePicker selectedDate={selectedDate} onChange={setSelectedDate} />
      </div>
      <div className="form-group">
        <label>Start Time</label>
        <TimePicker selectedTime={startTime} onChange={setStartTime} />
      </div>
      <div className="form-group">
        <label>End Time</label>
        <TimePicker selectedTime={endTime} onChange={setEndTime} />
      </div>
      <div className="form-group">
        <label>Car Model</label>
        <CarModelDropdown 
          onChange={setSelectedCarModel} 
          isCarAvailable={(modelName) => isCarAvailable(modelName, selectedDate)}
          selectedCarModel={selectedCarModel}
        />
      </div>
      <div className="form-group">
        <label>Sales Consultant</label>
        <SalesConsultantDropdown onChange={setSelectedConsultant} />
      </div>
      <button onClick={handleSubmit} className="submit-button">Book Test Drive</button>
    </div>
  );
};

export default BookingForm;
