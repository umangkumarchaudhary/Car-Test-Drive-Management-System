// src/components/Dashboard.js
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Calendar from 'react-calendar'; // You can use any calendar library you prefer
import 'react-calendar/dist/Calendar.css'; // Styles for the calendar

const Dashboard = () => {
  const { bookings } = useContext(AppContext);
  const [date, setDate] = useState(new Date());

  // Format bookings to be used by the calendar
  const events = bookings.map(booking => ({
    start: new Date(booking.date),
    end: new Date(booking.date),
    title: `${booking.carModel} with ${booking.consultant}`,
  }));

  return (
    <div className="dashboard">
      <h2>Booked Test Drives</h2>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={({ date, view }) => {
          // Show events on calendar days
          const event = events.find(event => event.start.toDateString() === date.toDateString());
          return event ? <div className="event">{event.title}</div> : null;
        }}
      />
      <div className="events-list">
        {events.filter(event => event.start.toDateString() === date.toDateString())
          .map((event, index) => (
            <div key={index} className="event">
              {event.title}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
