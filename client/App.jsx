import React from "react";
import ReactDOM from "react-dom";
const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    return (
      <div>
         <h1>hello ruby</h1>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("app"));
