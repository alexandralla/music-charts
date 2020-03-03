/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
const express = require('express');
const app = express(); // routes attached on this app instance
const { getChart } = require('./billboard-top-100.js');

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  console.log(`request was made: ${req.url}`);
  res.sendFile(`${__dirname}/music-charts.html`);
});

app.listen(8080);
console.log('listening to port 8080');

getChart('hot-100', (err, chart) => {
  if (err) console.log(err);
  roddyRicch = chart.songs[0];
  console.log(JSON.stringify(roddyRicch));
});

function done() {
  // var roddyRicch;
  //   getChart('hot-100', (err, chart) => {
  //     if (err) console.log(err);
  //     roddyRicch = chart.songs[0];
  //     console.log(JSON.stringify(roddyRicch));
  //   });
  return {
    rank: 1, title: 'The Box', artist: 'Roddy Ricch', cover: 'https://charts-static.billboard.com/img/2019/12/roddy-ricch-eqp-the-box-2k7-53x53.jpg', position: { positionLastWeek: 1, peakPosition: 1, weeksOnChart: 11 },
  };
}
