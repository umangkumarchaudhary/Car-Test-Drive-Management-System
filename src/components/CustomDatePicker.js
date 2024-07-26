import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomDatePicker.css';

const CustomDatePicker = ({ selectedDate, onChange }) => (
  <DatePicker
    selected={selectedDate}
    onChange={onChange}
    className="custom-date-picker"
  />
);

export default CustomDatePicker;
