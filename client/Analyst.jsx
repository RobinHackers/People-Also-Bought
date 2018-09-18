import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './Tab.css';
import PropTypes from 'prop-types';
// import Icon from '../Misc/Icon.jsx';
import ReactTooltip from 'react-tooltip';

const Analyst = ({ tooltip, display }) => (
  <div>
    <p data-tip={tooltip}>
      <span className="badges">
        <i className="fas fa-tag" />
        {display}
      </span>
    </p>
    <ReactTooltip
      className="tooltip"
      place="bottom"
      type="dark"
      effect="solid"
    />
  </div>
);

Analyst.propTypes = {
  tooltip: PropTypes.number.isRequired,
  display: PropTypes.number.isRequired,
};

export default Analyst;
