import React from "react";
import "../public/stylesheet.css";
import ReactTooltip from 'react-tooltip';

var Company = (props) => (
  <div className="flex-item">
        <div className="company-title" >{props.company.company}</div>
        <a data-tip="hello"> ◕‿‿◕   </a>

        <ReactTooltip place="top" type="dark" effect="solid"/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="company-price">${props.company.currentDay.currentPrice}</div>
      </div> 
  );

  export default Company;

//   onClick={() => props.onClick(props.company)}>

// var Company = (props) => (
//   <div className="flex-item">
//         <div className="company-title" >{props.company.company}</div>
//         <div className="company-detail">{props.company.currentDay.currentPrice}</div>
//       </div> 
//   );