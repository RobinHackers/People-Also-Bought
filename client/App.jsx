import React from "react";
import ReactDOM from "react-dom";
import "../public/stylesheet.css";
import CompanyList from './CompanyList.jsx';
import Company from './Company.jsx';
const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [
        {
        company:'Tesla',
        currentDay: {
          currentPrice: 300
        }
      },
        {company:'Apple',
        currentDay: {
          currentPrice: 200
        }
      }, 
        {company: 'Snap', 
        currentDay: {
          currentPrice: 100
        }
      },
        {company: 'HR',
        currentDay: {
          currentPrice: 90
        }
      }]
    };
    // this.handleClick = this.handleClick.bind(this);
  }

 

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
  //     // console.log('dataaaaa', data)
  // }

  render() {
    return (
      <div>
         <h1 class="marketopen">People also bought</h1>
         <div>
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