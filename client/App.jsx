import React from 'react';
import ReactDOM from 'react-dom';
import '../public/stylesheet.css';
import CompanyList from './CompanyList.jsx';
// import ReactTooltip from 'react-tooltip';
const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
    };
    this.getCompanies = this.getCompanies.bind(this);
  }

  componentDidMount() {
    this.getCompanies();
  }

  getCompanies() {
    axios.get('/people-also-bought', {
      params: {
        group: 1,
      },
    })
      .then((res) => {
        console.log(res);
        this.setState({
          companies: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { companies } = this.state;
    return (
      <div>
        <h1 className="marketopen">People also bought</h1>
        <div>
          <CompanyList
            companies={companies}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
