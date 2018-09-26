const fetch = require('node-fetch');

const company = {
  _id: 102,
  company: 'Hack Reactor',
  companyAbbr: 'HRSF3',
  percentage: 100,
  group: 1,
  currentDay: [
    {
      currentTime: '06:00 am',
      currentPrice: 500,
    },
    {
      currentTime: '07:00 am',
      currentPrice: 600,
    },
  ],
};

// fetch('http://localhost:7878/api/company', {
//   method: 'POST',
//   body: JSON.stringify(company),
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// fetch('http://localhost:7878/api/people-also-bought/Hack%20Reactor2', {
//   method: 'DELETE',
// });

fetch('http://localhost:7878/api/people-also-bought/Hack%20Reactor')
  .then(response => response.json())
  .then(data => console.log(data));
