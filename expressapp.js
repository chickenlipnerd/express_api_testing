import express from 'express';

const cors = require('cors');
const csv = require('csv-parser');
const fs = require('fs');
const app = express();
const PORT = 3001;
const DATA = './data/companies.csv';
const COMPANY_EP = '/companies';

app.use(cors());

app.get(COMPANY_EP, (req, res) => {
  const results = [];
  fs.createReadStream(DATA)
    .pipe(csv())
    .on('data', (data) => {
      let record = {
        ticker: data['ticker'],
      };
      results.push(record);
    })
    .on('end', () => {
      console.log(results);
      res.send(results);
    });
});

app.get(COMPANY_EP + '/:ticker', (req, res) => {
  const results = [];
  fs.createReadStream('./data/companies.csv')
    .pipe(csv())
    .on('data', (data) => {
      console.log(`ticker ${data["ticker"]}`)
      if (data["ticker"] === req.params.ticker) {
        let { ticker, ['company name']: company, description, ['website']: url } = data;
        let record = {
          'ticker': ticker,
          'company name': company,
          'description': description,
          'url': url
        };
        results.push(record);
      }
    })
    .on('end', () => {
      console.log(results);
      res.send(results);
    });
});

app.get('/', (req, res) =>
  res.send(`a get request with / route on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Your server is running on port ${PORT}`)
);