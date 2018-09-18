import React from 'react';
import PropTypes from 'prop-types';
import Company from './Company.jsx';

const CompanyList = ({
  showLeft,
  companies,
  showRight,
  handleArrowClick,
}) => (
  <div className="flex-container">
    <div className={`clickers ${showLeft ? 'visible' : null}`}>
      <a href onClick={handleArrowClick} className="leftArrow"><i name="left" className="fas fa-angle-left" /></a>
    </div>
    {companies.map(company => (
      <Company company={company} />
    ))}
    <div className={`clickers ${showRight ? 'visible' : null}`}>
      <a href onClick={handleArrowClick} className="rightArrow"><i name="right" className="fas fa-angle-right" /></a>
    </div>
  </div>
);

export default CompanyList;

CompanyList.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
  showLeft: PropTypes.bool.isRequired,
  showRight: PropTypes.bool.isRequired,
  handleArrowClick: PropTypes.func.isRequired,
};
