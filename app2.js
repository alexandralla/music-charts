/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
const express = require('express');
const app = express(); // routes attached on this app instance
const { getChart } = require('./billboard-top-100.js');
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

function createTodayJson() {
  getChart('hot-100', (err, chart) => {
    if (err) console.log(err);
    songs = chart.songs;
    const data = JSON.stringify(songs, null, 2);
    fs.writeFileSync('today.json', data, (err) => {
      if (err) {
        console.log(err);
      }
    });
    console.log('test.json was created!');
  });
}

function createWeekJson(timeShift) {
  weekDate = getDate(timeShift);
  getChart('hot-100', weekDate, (err, chart) => {
    if (err) console.log(err);
    songs = chart.songs;
    const data = JSON.stringify(songs, null, 2);
    fs.writeFileSync('week.json', data, (err) => {
      if (err) {
        console.log(err);
      }
    });
    console.log('WEEK.json was created!');
  });
}

function createMonthJson(timeShift) {
  monthDate = getDate(timeShift);
  getChart('hot-100', monthDate, (err, chart) => {
    if (err) console.log(err);
    songs = chart.songs;
    const data = JSON.stringify(songs, null, 2);
    fs.writeFileSync('month.json', data, (err) => {
      if (err) {
        console.log(err);
      }
    });
    console.log('MONTH.json was created!');
  });
}

function createYearJson(timeShift) {
  yearDate = getDate(timeShift);
  getChart('hot-100', yearDate, (err, chart) => {
    if (err) console.log(err);
    songs = chart.songs;
    const data = JSON.stringify(songs, null, 2);
    fs.writeFileSync('year.json', data, (err) => {
      if (err) {
        console.log(err);
      }
    });
    console.log('YEAR.json was created!');
  });
}

// CREATES TODAY SERVER
app.get('/', (req, res) => {
  console.log(`request was made: ${req.url}`);
  createTodayJson();
  res.sendFile(`${__dirname}/music-charts.html`);
});

// CREATES TODAY SERVER
app.get('/today', (req, res) => {
  console.log(`request was made: ${req.url}`);
  res.sendFile(`${__dirname}/music-charts.html`);
});

// CREATES WEEK SERVER
app.get('/week', (req, res) => {
  console.log(`request was made: ${req.url}`);
  createWeekJson(7);
  res.sendFile(`${__dirname}/alex.html`);
});

// CREATES MONTH SERVER
app.get('/month', (req, res) => {
  console.log(`request was made: ${req.url}`);
  createMonthJson(30);
  res.sendFile(`${__dirname}/alex.html`);
});

// CREATES YEAR SERVER
app.get('/year', (req, res) => {
  console.log(`request was made: ${req.url}`);
  createYearJson(365);
  res.sendFile(`${__dirname}/alex.html`);
});

app.listen(8080);
console.log('listening to port 8080');


