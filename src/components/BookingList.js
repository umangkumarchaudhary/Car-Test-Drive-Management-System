import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './BookingList.css';

const BookingList = () => {
  const { bookings } = useContext(AppContext);

  return (
    <div className="booking-list-container">
      <h2 className="booking-list-title">Booking List</h2>
      <div className="booking-list">
        {bookings.length === 0 ? (
          <p className="no-bookings">No bookings available</p>
        ) : (
          bookings.map((booking, index) => (
            <div className="booking-card" key={index}>
              <h3 className="booking-card-title">Booking #{index + 1}</h3>
              <div className="booking-details">
                <div><strong>Date:</strong> {booking.date.toLocaleDateString()}</div>
                <div><strong>Start Time:</strong> {booking.startTime.toLocaleTimeString()}</div>
                <div><strong>End Time:</strong> {booking.endTime.toLocaleTimeString()}</div>
                <div><strong>Car Model:</strong> {booking.carModel}</div>
                <div><strong>Sales Consultant:</strong> {booking.consultant}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookingList;
