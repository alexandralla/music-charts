/* eslint-disable no-console */
const http = require('http');
const fs = require('fs');
const { getChart } = require('./billboard-top-100.js');

const server = http.createServer((req, res) => {
  console.log(`request was made: ${req.url}`);

  // outputsjson
  res.writeHead(200, { 'Content-Type': 'application/json' });
  getChart('hot-100', (err, chart) => {
    if (err) console.log(err);

    console.log(chart.songs[0]);

    const roddyRicch = chart.songs[0];
    console.log(JSON.stringify(roddyRicch));


    res.end(JSON.stringify(chart.songs));
  });

  // outputs html
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // const myReadStream = fs.createReadStream(`${__dirname}/music-charts.html`, 'utf8');
  // myReadStream.pipe(res);

  // prints inputed text to server
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.end('head ass')  //send data back into client, expects string or buffer
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

server.listen(8080, '127.0.0.1');
console.log('listening to port 8080');
