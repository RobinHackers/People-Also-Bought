import React from "react";
import ReactDOM from "react-dom";
import "../public/stylesheet.css";
import CompanyList from './CompanyList.jsx';
import ReactTooltip from 'react-tooltip';
var $ = require("jquery");
// import CompanyItem from './CompanyItem.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [
        {
        company:'Tesla',
        currentDay: {
          percentage: 34,
          currentPrice: 300
        }
      },
        {company:'Apple',
        currentDay: {
          percentage: 23,
          currentPrice: 200
        }
      }, 
        {company: 'Snap', 
        currentDay: {
          percentage: 5,
          currentPrice: 100
        }
      },
        {company: 'HR',
        currentDay: {
          percentage: 10,
          currentPrice: 90
        }
      },
        {company: 'Netflix',
        currentDay: {
          percentage: 12,
          currentPrice: 87
        }
      }]
    };
    // this.handleClick = this.handleClick.bind(this);
  }
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       companies: []
//     };
//     // this.handleClick = this.handleClick.bind(this);
//     this.getCompanies = this.getCompanies.bind(this);
//   }

//   getCompanies() {
//     $.ajax({
//         method: 'GET',
//         url: "http://localhost:3003/people-also-bought",
//         success: (results) => {
//           console.log('RESULTS', results);
//           this.setState({
//             companies: results
//           })
//         }, 
//         error:() => {
//           console.log('GET not successful')
//         }
//     })
//   }
 

  // ActionLink() {
  //   handleClick(e) {
  //     e.preventDefault();
  //     console.log('The link was clicked.');
  //   }
  
  //   return (
  //     <a href="#" onClick={handleClick}>
  //       Click me
  //     </a>
  //   );
  // }
  
  // getCompanies() {
  //   axios.get('http://localhost:3003/people-also-bought')
  //     .then(res => {
  //       console.log('RESPONSE', res)
  //       this.setState({
  //         data: res.data
  //       });
  //     });
  //     console.log('dataaaaa', data)
  // }

  render() {
    return (
      <div>
         <h1 class="marketopen">People also bought</h1>
         <div>
           {/* {this.getCompanies} */}
         <CompanyList companies={this.state.companies}/>
        </div>
      </div>
    )
  }
}


//  render() {
//     return (
//       <div>
//          <h1 class="marketopen">People also bought</h1>
//          <div className="col-md-5">
//          <CompanyList companies={this.state.companies}/>
//          </div>
//       </div>
//     )
//   }
// }

ReactDOM.render(<App />, document.getElementById("app"));


// render() {
//   return (
//     <div>
//        <h1 class="marketopen">People also bought</h1>
//        <div class="carousel-frame">
//         <div class="carousel">
//           <div><span>1</span></div>
//           <div><span>2</span></div>
//           <div><span>3</span></div>
//           <div><span>4</span></div>
//         </div>
//        </div>
//     </div>
//   )
// }
// }


