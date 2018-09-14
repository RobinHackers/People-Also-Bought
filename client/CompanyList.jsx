import React from 'react';
import PropTypes from 'prop-types';
import Company from './Company.jsx';
// import Slider from "react-slick";
// import App from './App.jsx';

const CompanyList = ({ companies }) => (
  <div className="flex-container">
    {companies.map(company => (
      <Company company={company} />
    ))}
  </div>
);

export default CompanyList;

CompanyList.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
