import React from 'react';
import PropTypes from 'prop-types';
// import EachDay from './EachDay.jsx';

const Company = ({ company }) => (
  <div className="flex-item">
    <div className="company-title">{company.company}</div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="company-details">
      {company.currentDay.map(day => (
        <div>
          {day.currentPrice}
        </div>
      ))}
    </div>
  </div>
);

Company.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string,
    group: PropTypes.number,
    percentage: PropTypes.number,
    currentDay: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Company;
