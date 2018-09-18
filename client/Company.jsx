import React from 'react';
import PropTypes from 'prop-types';
import Analyst from './Analyst.jsx';

const Company = ({ company }) => (
  <div className="flex-item">
    <div className="company-title">{company.company}</div>
    <div>
      <Analyst
        display={`${company.percentage}%`}
        tooltip={`${company.percentage}% anaylsts agree that
        ${company.company} is a buy.`}
      />
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div>
      {company.currentDay.map(day => (
        <div className="company-price">
          {day.currentPrice}
        </div>
      ))}
    </div>
    <div className="differences">{`${company.diff}%`}</div>
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
