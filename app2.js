/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
const express = require('express');
const app = express(); // routes attached on this app instance
const { getChart } = require('./billboard-top-100.js');
const fs = require('fs');
app.use(express.static(`${__dirname}/public`));

function createJson() {
  getChart('hot-100', (err, chart) => {
    if (err) console.log(err);
    songs = chart.songs;
    const data = JSON.stringify(songs, null, 2);
    fs.writeFileSync('test.json', data, (err) => {
      if (err) {
        console.log(err);
      }
    });
    console.log('test.json was created!');
  });
}

// CREATES SERVER
app.get('/', (req, res) => {
  console.log(`request was made: ${req.url}`);
  createJson();
  res.sendFile(`${__dirname}/music-charts.html`);
});

app.listen(8080);
console.log('listening to port 8080');
