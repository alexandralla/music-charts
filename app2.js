/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
const express = require('express');
const app = express(); // routes attached on this app instance
const { getChart } = require('./billboard-top-100.js');
const { listCharts } = require('./billboard-top-100.js');
const fs = require('fs');
app.use(express.static(`${__dirname}/public`));

function getDate(timeShift) {
  const d = new Date();
  d.setDate(d.getDate() - timeShift);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
}

// CREATES TODAY SERVER
app.get('/', (req, res) => {
  console.log(`request was made: ${req.url}`);
  res.sendFile(`${__dirname}/music-charts.html`);
});

// CREATES TODAY SERVER
app.get('/today', (req, res) => {
  console.log(`request was made: ${req.url}`);
  res.sendFile(`${__dirname}/music-charts.html`);
});

// CREATES MONTH SERVER
app.get('/month', (req, res) => {
  console.log(`request was made: ${req.url}`);
  res.sendFile(`${__dirname}/music-charts.html`);
});

// CREATES HALFYEAR SERVER
app.get('/halfYear', (req, res) => {
  console.log(`request was made: ${req.url}`);
  res.sendFile(`${__dirname}/music-charts.html`);
});

// CREATES YEAR SERVER
app.get('/year', (req, res) => {
  console.log(`request was made: ${req.url}`);
  res.sendFile(`${__dirname}/music-charts.html`);
});

// CREATE TODAY JSON
getChart('hot-100', (err, chart) => {
  if (err) console.log(err);
  const data = JSON.stringify(chart.songs, null, 2);
  fs.writeFileSync('today.json', data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log('today.json was created!');
});

// CREATE TODAY ARTISTS JSON
getChart('artist-100', (err, chart) => {
  if (err) console.log(err);
  const data = JSON.stringify(chart.songs, null, 2);
  fs.writeFileSync('today-artists.json', data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log('today-artists.json was created!');
});

// CREATE TODAY ALBUMS JSON
getChart('top-album-sales', (err, chart) => {
  if (err) console.log(err);
  const data = JSON.stringify(chart.songs, null, 2);
  fs.writeFileSync('today-albums.json', data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log('today-albums.json was created!');
});

// CREATE MONTH JSON
monthDate = getDate(30);
getChart('hot-100', monthDate, (err, chart) => {
  if (err) console.log(err);
  const data = JSON.stringify(chart.songs, null, 2);
  fs.writeFileSync('month.json', data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log('month.json was created!');
});

// CREATE MONTH ARTISTS JSON
getChart('artist-100', monthDate, (err, chart) => {
  if (err) console.log(err);
  const data = JSON.stringify(chart.songs, null, 2);
  fs.writeFileSync('month-artists.json', data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log('month-artists.json was created!');
});

// CREATE MONTH ALBUMS JSON
getChart('top-album-sales', monthDate, (err, chart) => {
  if (err) console.log(err);
  const data = JSON.stringify(chart.songs, null, 2);
  fs.writeFileSync('month-albums.json', data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log('month-albums.json was created!');
});

// // CREATE HALFYEAR JSON
halfYearDate = getDate(183);
getChart('hot-100', halfYearDate, (err, chart) => {
  if (err) console.log(err);
  const data = JSON.stringify(chart.songs, null, 2);
  fs.writeFileSync('half-year.json', data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log('half-year.json was created!');
});

// CREATE HALF ARTISTS JSON
getChart('artist-100', halfYearDate, (err, chart) => {
  if (err) console.log(err);
  const data = JSON.stringify(chart.songs, null, 2);
  fs.writeFileSync('half-year-artists.json', data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log('half-year-artists.json was created!');
});

// CREATE WEEK ALBUMS JSON
getChart('top-album-sales', halfYearDate, (err, chart) => {
  if (err) console.log(err);
  const data = JSON.stringify(chart.songs, null, 2);
  fs.writeFileSync('half-year-albums.json', data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log('half-year-albums.json was created!');
});

// CREATE YEAR JSON
yearDate = getDate(365);
getChart('hot-100', yearDate, (err, chart) => {
  if (err) console.log(err);
  const data = JSON.stringify(chart.songs, null, 2);
  fs.writeFileSync('year.json', data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log('year.json was created!');
});

// CREATE YEAR ARTISTS JSON
getChart('artist-100', yearDate, (err, chart) => {
  if (err) console.log(err);
  const data = JSON.stringify(chart.songs, null, 2);
  fs.writeFileSync('year-artists.json', data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log('year-artists.json was created!');
});

// CREATE YEAR ALBUMS JSON
getChart('top-album-sales', yearDate, (err, chart) => {
  if (err) console.log(err);
  const data = JSON.stringify(chart.songs, null, 2);
  fs.writeFileSync('year-albums.json', data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log('year-albums.json was created!');
});

// listCharts((err, charts) => {
//   if (err) console.log(err);
//   console.log(charts); // prints array of all charts
// });

app.listen(8080);
console.log('listening to port 8080');