/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
const express = require('express');
const app = express(); // routes attached on this app instance
const { getChart } = require('./billboard-top-100.js');
const { listCharts } = require('./billboard-top-100.js');
const fs = require('fs');
app.use(express.static(`${__dirname}/public`));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));


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
  res.render('music-charts', {topsongtitle: topsong.title, topsongartist: topsong.artist, topsongweeks: topsong.position.weeksOnChart, 
    top100title1: topsong.title, top100artist1: topsong.artist, top100weeks1: topsong.position.weeksOnChart, top100image1: topsong.cover, 
    top100title2: secondsong.title, top100artist2: secondsong.artist, top100weeks2: secondsong.position.weeksOnChart, top100image2: secondsong.cover,
    top100title3: thirdsong.title, top100artist3: thirdsong.artist, top100weeks3: thirdsong.position.weeksOnChart, top100image3: thirdsong.cover,
    top100title4: fourthsong.title, top100artist4: fourthsong.artist, top100weeks4: fourthsong.position.weeksOnChart, top100image4: fourthsong.cover,
    top100title5: fifthsong.title, top100artist5: fifthsong.artist, top100weeks5: fifthsong.position.weeksOnChart, top100image5: fifthsong.cover,
    top100title6: sixthsong.title, top100artist6: sixthsong.artist, top100weeks6: sixthsong.position.weeksOnChart, top100image6: sixthsong.cover,
    top100title7: seventhsong.title, top100artist7: seventhsong.artist, top100weeks7: seventhsong.position.weeksOnChart, top100image7: seventhsong.cover,
    top100title8: eigthsong.title, top100artist8: eigthsong.artist, top100weeks8: eigthsong.position.weeksOnChart, top100image8: eigthsong.cover,
    top100title9: ninthsong.title, top100artist9: ninthsong.artist, top100weeks9: ninthsong.position.weeksOnChart, top100image9: ninthsong.cover,
    top100title10: tenthsong.title, top100artist10: tenthsong.artist, top100weeks10: tenthsong.position.weeksOnChart, top100image10: tenthsong.cover});
    
  //console.log(`request was made: ${req.url}`);
  //res.sendFile(`${__dirname}/music-charts.html`);
});

// CREATES TODAY SERVER
app.get('/today', (req, res) => {
  res.render('music-charts', {title: 'Roddy Richhhh'})
  //console.log(`request was made: ${req.url}`);
  //res.sendFile(`${__dirname}/music-charts.html`);
});
/* 
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
}); */

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
/* 
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
 */
// listCharts((err, charts) => {
//   if (err) console.log(err);
//   console.log(charts); // prints array of all charts
// });

const utilities = require('./testjavascript');

fs.readFile('today.json', (err, data) => {
  if (err) throw err;
  let chart = JSON.parse(data);
  topsong = utilities.testfunc(chart);
  secondsong = utilities.testfunc2(chart);
  thirdsong = utilities.testfunc3(chart);
  fourthsong = utilities.testfunc4(chart);
  fifthsong = utilities.testfunc5(chart);
  sixthsong = utilities.testfunc6(chart);
  seventhsong = utilities.testfunc7(chart);
  eigthsong = utilities.testfunc8(chart);
  ninthsong = utilities.testfunc9(chart);
  tenthsong = utilities.testfunc10(chart);
  console.log(topsong);
  console.log(secondsong);
  console.log(thirdsong);
  console.log(fourthsong);
  console.log(fifthsong);
  console.log(sixthsong);
  console.log(seventhsong);
  console.log(eigthsong);
  console.log(ninthsong);
  console.log(tenthsong);
});

app.listen(8080);
console.log('listening to port 8080');