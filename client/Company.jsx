import React from "react";
import "../public/stylesheet.css";

var Company = (props) => (
  
    // <div className="company media">
    //   <div className="media-left media-middle">
    //   </div>
      <div className="flex-item">
        <div className="company-title" >{props.company.company}</div>
        <div className="company-detail">{props.company.currentDay.currentPrice}</div>
      </div>
    // </div>   
  );

  export default Company;

//   onClick={() => props.onClick(props.company)}>