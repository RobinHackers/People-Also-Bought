import React from "react";
import Company from './Company.jsx';
import "../public/stylesheet.css";

var CompanyList = (props) => (
  <div class="flex-container">
 {props.companies.map(company => 
        <Company company={company} />
      )}
  </div>
  );

  export default CompanyList;


//   onClick={props.onClick}

// var CompanyList = (props) => (
//   <div className="company-list">
//     {props.companies.map(company => 
//       <Company company={company} />
//     )}
//   </div>
// );