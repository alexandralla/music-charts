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
    top100title10: tenthsong.title, top100artist10: tenthsong.artist, top100weeks10: tenthsong.position.weeksOnChart, top100image10: tenthsong.cover,
    top100title11: eleventhsong.title, top100artist11: eleventhsong.artist, top100weeks11: eleventhsong.position.weeksOnChart, top100image11: eleventhsong.cover,
    top100title12: twelfthsong.title, top100artist12: twelfthsong.artist, top100weeks12: twelfthsong.position.weeksOnChart, top100image12: twelfthsong.cover,
    top100title13: thirteenthsong.title, top100artist13: thirteenthsong.artist, top100weeks13: thirteenthsong.position.weeksOnChart, top100image13: thirteenthsong.cover,
    top100title14: fourteenthsong.title, top100artist14: fourteenthsong.artist, top100weeks14: fourteenthsong.position.weeksOnChart, top100image14: fourteenthsong.cover,
    top100title15: fifteenthsong.title, top100artist15: fifteenthsong.artist, top100weeks15: fifteenthsong.position.weeksOnChart, top100image15: fifteenthsong.cover,
    top100title16: sixteenthsong.title, top100artist16: sixteenthsong.artist, top100weeks16: sixteenthsong.position.weeksOnChart, top100image16: sixteenthsong.cover,
    top100title17: seventeenthsong.title, top100artist17: seventeenthsong.artist, top100weeks17: seventeenthsong.position.weeksOnChart, top100image17: seventeenthsong.cover,
    top100title18: eigthteenthsong.title, top100artist18: eigthteenthsong.artist, top100weeks18: eigthteenthsong.position.weeksOnChart, top100image18: eigthteenthsong.cover,
    top100title19: ninteenthsong.title, top100artist19: ninteenthsong.artist, top100weeks19: ninteenthsong.position.weeksOnChart, top100image19: ninteenthsong.cover,
    top100title20: twentiethsong.title, top100artist20: twentiethsong.artist, top100weeks20: twentiethsong.position.weeksOnChart, top100image20: twentiethsong.cover,
    top100title21: twentyfirstsong.title, top100artist21: twentyfirstsong.artist, top100weeks21: twentyfirstsong.position.weeksOnChart, top100image21: twentyfirstsong.cover,
    top100title22: twentysecondsong.title, top100artist22: twentysecondsong.artist, top100weeks22: twentysecondsong.position.weeksOnChart, top100image22: twentysecondsong.cover,
    top100title23: twentythirdsong.title, top100artist23: twentythirdsong.artist, top100weeks23: twentythirdsong.position.weeksOnChart, top100image23: twentythirdsong.cover,
    top100title24: twentyfourthsong.title, top100artist24: twentyfourthsong.artist, top100weeks24: twentyfourthsong.position.weeksOnChart, top100image24: twentyfourthsong.cover,
    top100title25: twentyfifthsong.title, top100artist25: twentyfifthsong.artist, top100weeks25: twentyfifthsong.position.weeksOnChart, top100image25: twentyfifthsong.cover,
    top100title26: twentysixthsong.title, top100artist26: twentysixthsong.artist, top100weeks26: twentysixthsong.position.weeksOnChart, top100image26: twentysixthsong.cover,
    top100title27: twentyseventhsong.title, top100artist27: twentyseventhsong.artist, top100weeks27: twentyseventhsong.position.weeksOnChart, top100image27: twentyseventhsong.cover,
    top100title28: twentyeighthsong.title, top100artist28: twentyeighthsong.artist, top100weeks28: twentyeighthsong.position.weeksOnChart, top100image28: twentyeighthsong.cover,
    top100title29: twentyninthsong.title, top100artist29: twentyninthsong.artist, top100weeks29: twentyninthsong.position.weeksOnChart, top100image29: twentyninthsong.cover,
    top100title30: thirtiethsong.title, top100artist30: thirtiethsong.artist, top100weeks30: thirtiethsong.position.weeksOnChart, top100image30: thirtiethsong.cover,
    top100title31: thirtiefirstsong.title, top100artist31: thirtiefirstsong.artist, top100weeks31: thirtiefirstsong.position.weeksOnChart, top100image31: thirtiefirstsong.cover,
    top100title32: thirtiesecondsong.title, top100artist32: thirtiesecondsong.artist, top100weeks32: thirtiesecondsong.position.weeksOnChart, top100image32: thirtiesecondsong.cover,
    top100title33: thirtiethirdsong.title, top100artist33: thirtiethirdsong.artist, top100weeks33: thirtiethirdsong.position.weeksOnChart, top100image33: thirtiethirdsong.cover,
    top100title34: thirtiefourthsong.title, top100artist34: thirtiefourthsong.artist, top100weeks34: thirtiefourthsong.position.weeksOnChart, top100image34: thirtiefourthsong.cover,
    top100title35: thirtiefifthsong.title, top100artist35: thirtiefifthsong.artist, top100weeks35: thirtiefifthsong.position.weeksOnChart, top100image35: thirtiefifthsong.cover,
    top100title36: thirtiesixthsong.title, top100artist36: thirtiesixthsong.artist, top100weeks36: thirtiesixthsong.position.weeksOnChart, top100image36: thirtiesixthsong.cover,
    top100title37: thirtieseventhsong.title, top100artist37: thirtieseventhsong.artist, top100weeks37: thirtieseventhsong.position.weeksOnChart, top100image37: thirtieseventhsong.cover,
    top100title38: thirtieeighthsong.title, top100artist38: thirtieeighthsong.artist, top100weeks38: thirtieeighthsong.position.weeksOnChart, top100image38: thirtieeighthsong.cover,
    top100title39: thirtieninthsong.title, top100artist39: thirtieninthsong.artist, top100weeks39: thirtieninthsong.position.weeksOnChart, top100image39: thirtieninthsong.cover,
    top100title40: fortiethsong.title, top100artist40: fortiethsong.artist, top100weeks40: fortiethsong.position.weeksOnChart, top100image40: fortiethsong.cover,
    top100title41: fortyfirstsong.title, top100artist41: fortyfirstsong.artist, top100weeks41: fortyfirstsong.position.weeksOnChart, top100image41: fortyfirstsong.cover,
    top100title42: fortysecondsong.title, top100artist42: fortysecondsong.artist, top100weeks42: fortysecondsong.position.weeksOnChart, top100image42: fortysecondsong.cover,
    top100title43: fortythirdsong.title, top100artist43: fortythirdsong.artist, top100weeks43: fortythirdsong.position.weeksOnChart, top100image43: fortythirdsong.cover,
    top100title44: fortyfourthsong.title, top100artist44: fortyfourthsong.artist, top100weeks44: fortyfourthsong.position.weeksOnChart, top100image44: fortyfourthsong.cover,
    top100title45: fortyfifthsong.title, top100artist45: fortyfifthsong.artist, top100weeks45: fortyfifthsong.position.weeksOnChart, top100image45: fortyfifthsong.cover,
    top100title46: fortysixthsong.title, top100artist46: fortysixthsong.artist, top100weeks46: fortysixthsong.position.weeksOnChart, top100image46: fortysixthsong.cover,
    top100title47: fortyseventhsong.title, top100artist47: fortyseventhsong.artist, top100weeks47: fortyseventhsong.position.weeksOnChart, top100image47: fortyseventhsong.cover,
    top100title48: fortyeighthsong.title, top100artist48: fortyeighthsong.artist, top100weeks48: fortyeighthsong.position.weeksOnChart, top100image48: fortyeighthsong.cover,
    top100title49: fortyninthsong.title, top100artist49: fortyninthsong.artist, top100weeks49: fortyninthsong.position.weeksOnChart, top100image49: fortyninthsong.cover,
    top100title50: fiftythsong.title, top100artist50: fiftythsong.artist, top100weeks50: fiftythsong.position.weeksOnChart, top100image50: fiftythsong.cover,

});
    
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
  eleventhsong = utilities.testfunc11(chart);
  twelfthsong = utilities.testfunc12(chart);
  thirteenthsong = utilities.testfunc13(chart);
  fourteenthsong = utilities.testfunc14(chart);
  fifteenthsong = utilities.testfunc15(chart);
  sixteenthsong = utilities.testfunc16(chart);
  seventeenthsong = utilities.testfunc17(chart);
  eigthteenthsong = utilities.testfunc18(chart);
  ninteenthsong = utilities.testfunc19(chart);
  twentiethsong = utilities.testfunc20(chart);
  twentyfirstsong = utilities.testfunc21(chart);
  twentysecondsong = utilities.testfunc22(chart);
  twentythirdsong = utilities.testfunc23(chart);
  twentyfourthsong = utilities.testfunc24(chart);
  twentyfifthsong = utilities.testfunc25(chart);
  twentysixthsong = utilities.testfunc26(chart);
  twentyseventhsong = utilities.testfunc27(chart);
  twentyeighthsong = utilities.testfunc28(chart);
  twentyninthsong = utilities.testfunc29(chart);
  thirtiethsong = utilities.testfunc30(chart);
  thirtiefirstsong = utilities.testfunc31(chart);
  thirtiesecondsong = utilities.testfunc32(chart);
  thirtiethirdsong = utilities.testfunc33(chart);
  thirtiefourthsong = utilities.testfunc34(chart);
  thirtiefifthsong = utilities.testfunc35(chart);
  thirtiesixthsong = utilities.testfunc36(chart);
  thirtieseventhsong = utilities.testfunc37(chart);
  thirtieeighthsong = utilities.testfunc38(chart);
  thirtieninthsong = utilities.testfunc39(chart);
  fortiethsong = utilities.testfunc40(chart);
  fortyfirstsong = utilities.testfunc41(chart);
  fortysecondsong = utilities.testfunc42(chart);
  fortythirdsong = utilities.testfunc43(chart);
  fortyfourthsong = utilities.testfunc44(chart);
  fortyfifthsong = utilities.testfunc45(chart);
  fortysixthsong = utilities.testfunc46(chart);
  fortyseventhsong = utilities.testfunc47(chart);
  fortyeighthsong = utilities.testfunc48(chart);
  fortyninthsong = utilities.testfunc49(chart);
  fiftythsong = utilities.testfunc50(chart);
});

app.listen(8080);
console.log('listening to port 8080');