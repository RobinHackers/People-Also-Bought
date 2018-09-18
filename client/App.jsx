import React from 'react';
import ReactDOM from 'react-dom';
import '../public/stylesheet.css';
import CompanyList from './CompanyList.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCompanies: [],
      companies: [],
      min: 1,
      max: 8,
      priceisUp: true,
      marketisOpen: true,
      showRight: true,
      showLeft: false,
    };

    this.getRandomIntInclusive = this.getRandomIntInclusive.bind(this);
    this.handleArrowClick = this.handleArrowClick.bind(this);
  }

  componentDidMount() {
    axios.get('/people-also-bought', {
      params: {
        group: this.getRandomIntInclusive(1, 8),
      },
    })
      .then((res) => {
        this.setState({
          companies: res.data,
          currentCompanies: res.data.slice(0, 4),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getRandomIntInclusive() {
    const { min } = this.state;
    const { max } = this.state;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handleArrowClick(e) {
    const { showLeft, showRight, companies } = this.state;
    // console.log(e);
    const arrow = e.target.getAttribute('name');
    if (!showLeft) {
      this.setState({
        showLeft: true,
        currentCompanies: companies.slice(4, 8),
      });
    } else if (!showRight) {
      this.setState({
        showRight: true,
        currentCompanies: companies.slice(4, 8),
      });
    } else if (arrow === 'left') {
      this.setState({
        showLeft: false,
        currentCompanies: companies.slice(0, 4),
      });
    } else {
      this.setState({
        showRight: false,
        currentCompanies: companies.slice(8, 12),
      });
    }
  }

  render() {
    const {
      priceisUp,
      marketisOpen,
      currentCompanies,
      showRight,
      showLeft,
    } = this.state;

    return (
      <div>
        <h1>People Also Bought</h1>
        <div>{marketisOpen}</div>
        <div>
          <CompanyList
            companies={currentCompanies}
            price={priceisUp}
            showRight={showRight}
            showLeft={showLeft}
            handleArrowClick={this.handleArrowClick}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
