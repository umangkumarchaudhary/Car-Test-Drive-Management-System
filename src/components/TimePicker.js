import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TimePicker.css';

const TimePicker = ({ selectedTime, onChange }) => (
  <DatePicker
    selected={selectedTime}
    onChange={onChange}
    showTimeSelect
    showTimeSelectOnly
    timeIntervals={15}
    timeCaption="Time"
    dateFormat="h:mm aa"
    className="custom-time-picker"
    placeholderText="Select Time"
  />
);

export default TimePicker;
