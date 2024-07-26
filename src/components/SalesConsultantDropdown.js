// src/components/SalesConsultantDropdown.js
import React, { useContext } from 'react';
import Select from 'react-select';
import { AppContext } from '../context/AppContext';
import './SalesConsultantDropdown.css';

const SalesConsultantDropdown = ({ onChange }) => {
  const { salesConsultants } = useContext(AppContext);

  const options = salesConsultants?.map(consultant => ({
    value: consultant.name,
    label: consultant.name,
  }));

  return <Select options={options} onChange={onChange} className="custom-select" />;
};

export default SalesConsultantDropdown;
