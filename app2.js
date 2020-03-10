/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
const express = require('express');
const app = express(); // routes attached on this app instance
const { getChart } = require('./billboard-top-100.js');
const { getCoverFromChartItem } = require('./billboard-top-100');
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
  res.render('music-charts', {topsongvideo: "https://www.youtube.com/embed/UNZqm3dxd2w",topsongtitle: topsong.title, topsongartist: topsong.artist, topsongweeks: topsong.position.weeksOnChart, 
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
    top100title51: fiftyfirstsong.title, top100artist51: fiftyfirstsong.artist, top100weeks51: fiftyfirstsong.position.weeksOnChart, top100image51: fiftyfirstsong.cover,
    top100title52: fiftysecondsong.title, top100artist52: fiftysecondsong.artist, top100weeks52: fiftysecondsong.position.weeksOnChart, top100image52: fiftysecondsong.cover,
    top100title53: fiftythirdsong.title, top100artist53: fiftythirdsong.artist, top100weeks53: fiftythirdsong.position.weeksOnChart, top100image53: fiftythirdsong.cover,
    top100title54: fiftyfourthsong.title, top100artist54: fiftyfourthsong.artist, top100weeks54: fiftyfourthsong.position.weeksOnChart, top100image54: fiftyfourthsong.cover,
    top100title55: fiftyfifthsong.title, top100artist55: fiftyfifthsong.artist, top100weeks55: fiftyfifthsong.position.weeksOnChart, top100image55: fiftyfifthsong.cover,
    top100title56: fiftysixthsong.title, top100artist56: fiftysixthsong.artist, top100weeks56: fiftysixthsong.position.weeksOnChart, top100image56: fiftysixthsong.cover,
    top100title57: fiftyseventhsong.title, top100artist57: fiftyseventhsong.artist, top100weeks57: fiftyseventhsong.position.weeksOnChart, top100image57: fiftyseventhsong.cover,
    top100title58: fiftyeighthsong.title, top100artist58: fiftyeighthsong.artist, top100weeks58: fiftyeighthsong.position.weeksOnChart, top100image58: fiftyeighthsong.cover,
    top100title59: fiftyninthsong.title, top100artist59: fiftyninthsong.artist, top100weeks59: fiftyninthsong.position.weeksOnChart, top100image59: fiftyninthsong.cover,
    top100title60: sixtythsong.title, top100artist60: sixtythsong.artist, top100weeks60: sixtythsong.position.weeksOnChart, top100image60: sixtythsong.cover,
    top100title61: sixtyfirstsong.title, top100artist61: sixtyfirstsong.artist, top100weeks61: sixtyfirstsong.position.weeksOnChart, top100image61: sixtyfirstsong.cover,
    top100title62: sixtysecondsong.title, top100artist62: sixtysecondsong.artist, top100weeks62: sixtysecondsong.position.weeksOnChart, top100image62: sixtysecondsong.cover,
    top100title63: sixtythirdsong.title, top100artist63: sixtythirdsong.artist, top100weeks63: sixtythirdsong.position.weeksOnChart, top100image63: sixtythirdsong.cover,
    top100title64: sixtyfourthsong.title, top100artist64: sixtyfourthsong.artist, top100weeks64: sixtyfourthsong.position.weeksOnChart, top100image64: sixtyfourthsong.cover,
    top100title65: sixtyfifthsong.title, top100artist65: sixtyfifthsong.artist, top100weeks65: sixtyfifthsong.position.weeksOnChart, top100image65: sixtyfifthsong.cover,
    top100title66: sixtysixthsong.title, top100artist66: sixtysixthsong.artist, top100weeks66: sixtysixthsong.position.weeksOnChart, top100image66: sixtysixthsong.cover,
    top100title67: sixtyseventhsong.title, top100artist67: sixtyseventhsong.artist, top100weeks67: sixtyseventhsong.position.weeksOnChart, top100image67: sixtyseventhsong.cover,
    top100title68: sixtyeighthsong.title, top100artist68: sixtyeighthsong.artist, top100weeks68: sixtyeighthsong.position.weeksOnChart, top100image68: sixtyeighthsong.cover,
    top100title69: sixtyninthsong.title, top100artist69: sixtyninthsong.artist, top100weeks69: sixtyninthsong.position.weeksOnChart, top100image69: sixtyninthsong.cover,
    top100title70: seventythsong.title, top100artist70: seventythsong.artist, top100weeks70: seventythsong.position.weeksOnChart, top100image70: seventythsong.cover,
    top100title71: seventyfirstsong.title, top100artist71: seventyfirstsong.artist, top100weeks71: seventyfirstsong.position.weeksOnChart, top100image71: seventyfirstsong.cover,
    top100title72: seventysecondsong.title, top100artist72: seventysecondsong.artist, top100weeks72: seventysecondsong.position.weeksOnChart, top100image72: seventysecondsong.cover,
    top100title73: seventythirdsong.title, top100artist73: seventythirdsong.artist, top100weeks73: seventythirdsong.position.weeksOnChart, top100image73: seventythirdsong.cover,
    top100title74: seventyfourthsong.title, top100artist74: seventyfourthsong.artist, top100weeks74: seventyfourthsong.position.weeksOnChart, top100image74: seventyfourthsong.cover,
    top100title75: seventyfifthsong.title, top100artist75: seventyfifthsong.artist, top100weeks75: seventyfifthsong.position.weeksOnChart, top100image75: seventyfifthsong.cover,
    top100title76: seventysixthsong.title, top100artist76: seventysixthsong.artist, top100weeks76: seventysixthsong.position.weeksOnChart, top100image76: seventysixthsong.cover,
    top100title77: seventyseventhsong.title, top100artist77: seventyseventhsong.artist, top100weeks77: seventyseventhsong.position.weeksOnChart, top100image77: seventyseventhsong.cover,
    top100title78: seventyeighthsong.title, top100artist78: seventyeighthsong.artist, top100weeks78: seventyeighthsong.position.weeksOnChart, top100image78: seventyeighthsong.cover,
    top100title79: seventyninthsong.title, top100artist79: seventyninthsong.artist, top100weeks79: seventyninthsong.position.weeksOnChart, top100image79: seventyninthsong.cover,
    top100title80: eightythsong.title, top100artist80: eightythsong.artist, top100weeks80: eightythsong.position.weeksOnChart, top100image80: eightythsong.cover,
    top100title81: eightyfirstsong.title, top100artist81: eightyfirstsong.artist, top100weeks81: eightyfirstsong.position.weeksOnChart, top100image81: eightyfirstsong.cover,
    top100title82: eightysecondsong.title, top100artist82: eightysecondsong.artist, top100weeks82: eightysecondsong.position.weeksOnChart, top100image82: eightysecondsong.cover,
    top100title83: eightythirdsong.title, top100artist83: eightythirdsong.artist, top100weeks83: eightythirdsong.position.weeksOnChart, top100image83: eightythirdsong.cover,
    top100title84: eightyfourthsong.title, top100artist84: eightyfourthsong.artist, top100weeks84: eightyfourthsong.position.weeksOnChart, top100image84: eightyfourthsong.cover,
    top100title85: eightyfifthsong.title, top100artist85: eightyfifthsong.artist, top100weeks85: eightyfifthsong.position.weeksOnChart, top100image85: eightyfifthsong.cover,
    top100title86: eightysixthsong.title, top100artist86: eightysixthsong.artist, top100weeks86: eightysixthsong.position.weeksOnChart, top100image86: eightysixthsong.cover,
    top100title87: eightyseventhsong.title, top100artist87: eightyseventhsong.artist, top100weeks87: eightyseventhsong.position.weeksOnChart, top100image87: eightyseventhsong.cover,
    top100title88: eightyeighthsong.title, top100artist88: eightyeighthsong.artist, top100weeks88: eightyeighthsong.position.weeksOnChart, top100image88: eightyeighthsong.cover,
    top100title89: eightyninthsong.title, top100artist89: eightyninthsong.artist, top100weeks89: eightyninthsong.position.weeksOnChart, top100image89: eightyninthsong.cover,
    top100title90: nintythsong.title, top100artist90: nintythsong.artist, top100weeks90: nintythsong.position.weeksOnChart, top100image90: nintythsong.cover,
    top100title91: nintyfirstsong.title, top100artist91: nintyfirstsong.artist, top100weeks91: nintyfirstsong.position.weeksOnChart, top100image91: nintyfirstsong.cover,
    top100title92: nintysecondsong.title, top100artist92: nintysecondsong.artist, top100weeks92: nintysecondsong.position.weeksOnChart, top100image92: nintysecondsong.cover,
    top100title93: nintythirdsong.title, top100artist93: nintythirdsong.artist, top100weeks93: nintythirdsong.position.weeksOnChart, top100image93: nintythirdsong.cover,
    top100title94: nintyfourthsong.title, top100artist94: nintyfourthsong.artist, top100weeks94: nintyfourthsong.position.weeksOnChart, top100image94: nintyfourthsong.cover,
    top100title95: nintyfifthsong.title, top100artist95: nintyfifthsong.artist, top100weeks95: nintyfifthsong.position.weeksOnChart, top100image95: nintyfifthsong.cover,
    top100title96: nintysixthsong.title, top100artist96: nintysixthsong.artist, top100weeks96: nintysixthsong.position.weeksOnChart, top100image96: nintysixthsong.cover,
    top100title97: nintyseventhsong.title, top100artist97: nintyseventhsong.artist, top100weeks97: nintyseventhsong.position.weeksOnChart, top100image97: nintyseventhsong.cover,
    top100title98: nintyeighthsong.title, top100artist98: nintyeighthsong.artist, top100weeks98: nintyeighthsong.position.weeksOnChart, top100image98: nintyeighthsong.cover,
    top100title99: nintyninthsong.title, top100artist99: nintyninthsong.artist, top100weeks99: nintyninthsong.position.weeksOnChart, top100image99: nintyninthsong.cover,
    top100title100: onehundredthsong.title, top100artist100: onehundredthsong.artist, top100weeks100: onehundredthsong.position.weeksOnChart, top100image100: onehundredthsong.cover,
    topartist1: topartist.title, topartistimage1: topartist.cover,
    topartist2: topartist2.title, topartistimage2: topartist2.cover,
    topartist3: topartist3.title, topartistimage3: topartist3.cover,
    topartist4: topartist4.title, topartistimage4: topartist4.cover,
    topartist5: topartist5.title, topartistimage5: topartist5.cover,
    topartist6: topartist6.title, topartistimage6: topartist6.cover,
    topartist7: topartist7.title, topartistimage7: topartist7.cover,
    topartist8: topartist8.title, topartistimage8: topartist8.cover,
    topartist9: topartist9.title, topartistimage9: topartist9.cover,
    topartist10: topartist10.title, topartistimage10: topartist10.cover,
  });
});


// CREATES MONTH SERVER
app.get('/month', (req, res) => {
    res.render('music-charts', {topsongvideo: "https://www.youtube.com/embed/wXhTHyIgQ_U", topsongtitle: topmonthsong.title, topsongartist: topmonthsong.artist, topsongweeks: topmonthsong.position.weeksOnChart, 
        top100title1: topmonthsong.title, top100artist1: topmonthsong.artist, top100weeks1: topmonthsong.position.weeksOnChart, top100image1: topmonthsong.cover, 
        top100title2: secondmonthsong.title, top100artist2: secondmonthsong.artist, top100weeks2: secondmonthsong.position.weeksOnChart, top100image2: secondmonthsong.cover,
        top100title3: thirdmonthsong.title, top100artist3: thirdmonthsong.artist, top100weeks3: thirdmonthsong.position.weeksOnChart, top100image3: thirdmonthsong.cover,
        top100title4: fourthmonthsong.title, top100artist4: fourthmonthsong.artist, top100weeks4: fourthmonthsong.position.weeksOnChart, top100image4: fourthmonthsong.cover,
        top100title5: fifthmonthsong.title, top100artist5: fifthmonthsong.artist, top100weeks5: fifthmonthsong.position.weeksOnChart, top100image5: fifthmonthsong.cover,
        top100title6: sixthmonthsong.title, top100artist6: sixthmonthsong.artist, top100weeks6: sixthmonthsong.position.weeksOnChart, top100image6: sixthmonthsong.cover,
        top100title7: seventhmonthsong.title, top100artist7: seventhmonthsong.artist, top100weeks7: seventhmonthsong.position.weeksOnChart, top100image7: seventhmonthsong.cover,
        top100title8: eigthmonthsong.title, top100artist8: eigthmonthsong.artist, top100weeks8: eigthmonthsong.position.weeksOnChart, top100image8: eigthmonthsong.cover,
        top100title9: ninthmonthsong.title, top100artist9: ninthmonthsong.artist, top100weeks9: ninthmonthsong.position.weeksOnChart, top100image9: ninthmonthsong.cover,
        top100title10: tenthmonthsong.title, top100artist10: tenthmonthsong.artist, top100weeks10: tenthmonthsong.position.weeksOnChart, top100image10: tenthmonthsong.cover,
        top100title11: eleventhmonthsong.title, top100artist11: eleventhmonthsong.artist, top100weeks11: eleventhmonthsong.position.weeksOnChart, top100image11: eleventhmonthsong.cover,
        top100title12: twelfthmonthsong.title, top100artist12: twelfthmonthsong.artist, top100weeks12: twelfthmonthsong.position.weeksOnChart, top100image12: twelfthmonthsong.cover,
        top100title13: thirteenthmonthsong.title, top100artist13: thirteenthmonthsong.artist, top100weeks13: thirteenthmonthsong.position.weeksOnChart, top100image13: thirteenthmonthsong.cover,
        top100title14: fourteenthmonthsong.title, top100artist14: fourteenthmonthsong.artist, top100weeks14: fourteenthmonthsong.position.weeksOnChart, top100image14: fourteenthmonthsong.cover,
        top100title15: fifteenthmonthsong.title, top100artist15: fifteenthmonthsong.artist, top100weeks15: fifteenthmonthsong.position.weeksOnChart, top100image15: fifteenthmonthsong.cover,
        top100title16: sixteenthmonthsong.title, top100artist16: sixteenthmonthsong.artist, top100weeks16: sixteenthmonthsong.position.weeksOnChart, top100image16: sixteenthmonthsong.cover,
        top100title17: seventeenthmonthsong.title, top100artist17: seventeenthmonthsong.artist, top100weeks17: seventeenthmonthsong.position.weeksOnChart, top100image17: seventeenthmonthsong.cover,
        top100title18: eigthteenthmonthsong.title, top100artist18: eigthteenthmonthsong.artist, top100weeks18: eigthteenthmonthsong.position.weeksOnChart, top100image18: eigthteenthmonthsong.cover,
        top100title19: ninteenthmonthsong.title, top100artist19: ninteenthmonthsong.artist, top100weeks19: ninteenthmonthsong.position.weeksOnChart, top100image19: ninteenthmonthsong.cover,
        top100title20: twentiethmonthsong.title, top100artist20: twentiethmonthsong.artist, top100weeks20: twentiethmonthsong.position.weeksOnChart, top100image20: twentiethmonthsong.cover,
        top100title21: twentyfirstmonthsong.title, top100artist21: twentyfirstmonthsong.artist, top100weeks21: twentyfirstmonthsong.position.weeksOnChart, top100image21: twentyfirstmonthsong.cover,
        top100title22: twentysecondmonthsong.title, top100artist22: twentysecondmonthsong.artist, top100weeks22: twentysecondmonthsong.position.weeksOnChart, top100image22: twentysecondmonthsong.cover,
        top100title23: twentythirdmonthsong.title, top100artist23: twentythirdmonthsong.artist, top100weeks23: twentythirdmonthsong.position.weeksOnChart, top100image23: twentythirdmonthsong.cover,
        top100title24: twentyfourthmonthsong.title, top100artist24: twentyfourthmonthsong.artist, top100weeks24: twentyfourthmonthsong.position.weeksOnChart, top100image24: twentyfourthmonthsong.cover,
        top100title25: twentyfifthmonthsong.title, top100artist25: twentyfifthmonthsong.artist, top100weeks25: twentyfifthmonthsong.position.weeksOnChart, top100image25: twentyfifthmonthsong.cover,
        top100title26: twentysixthmonthsong.title, top100artist26: twentysixthmonthsong.artist, top100weeks26: twentysixthmonthsong.position.weeksOnChart, top100image26: twentysixthmonthsong.cover,
        top100title27: twentyseventhmonthsong.title, top100artist27: twentyseventhmonthsong.artist, top100weeks27: twentyseventhmonthsong.position.weeksOnChart, top100image27: twentyseventhmonthsong.cover,
        top100title28: twentyeighthmonthsong.title, top100artist28: twentyeighthmonthsong.artist, top100weeks28: twentyeighthmonthsong.position.weeksOnChart, top100image28: twentyeighthmonthsong.cover,
        top100title29: twentyninthmonthsong.title, top100artist29: twentyninthmonthsong.artist, top100weeks29: twentyninthmonthsong.position.weeksOnChart, top100image29: twentyninthmonthsong.cover,
        top100title30: thirtiethmonthsong.title, top100artist30: thirtiethmonthsong.artist, top100weeks30: thirtiethmonthsong.position.weeksOnChart, top100image30: thirtiethmonthsong.cover,
        top100title31: thirtiefirstmonthsong.title, top100artist31: thirtiefirstmonthsong.artist, top100weeks31: thirtiefirstmonthsong.position.weeksOnChart, top100image31: thirtiefirstmonthsong.cover,
        top100title32: thirtiesecondmonthsong.title, top100artist32: thirtiesecondmonthsong.artist, top100weeks32: thirtiesecondmonthsong.position.weeksOnChart, top100image32: thirtiesecondmonthsong.cover,
        top100title33: thirtiethirdmonthsong.title, top100artist33: thirtiethirdmonthsong.artist, top100weeks33: thirtiethirdmonthsong.position.weeksOnChart, top100image33: thirtiethirdmonthsong.cover,
        top100title34: thirtiefourthmonthsong.title, top100artist34: thirtiefourthmonthsong.artist, top100weeks34: thirtiefourthmonthsong.position.weeksOnChart, top100image34: thirtiefourthmonthsong.cover,
        top100title35: thirtiefifthmonthsong.title, top100artist35: thirtiefifthmonthsong.artist, top100weeks35: thirtiefifthmonthsong.position.weeksOnChart, top100image35: thirtiefifthmonthsong.cover,
        top100title36: thirtiesixthmonthsong.title, top100artist36: thirtiesixthmonthsong.artist, top100weeks36: thirtiesixthmonthsong.position.weeksOnChart, top100image36: thirtiesixthmonthsong.cover,
        top100title37: thirtieseventhmonthsong.title, top100artist37: thirtieseventhmonthsong.artist, top100weeks37: thirtieseventhmonthsong.position.weeksOnChart, top100image37: thirtieseventhmonthsong.cover,
        top100title38: thirtieeighthmonthsong.title, top100artist38: thirtieeighthmonthsong.artist, top100weeks38: thirtieeighthmonthsong.position.weeksOnChart, top100image38: thirtieeighthmonthsong.cover,
        top100title39: thirtieninthmonthsong.title, top100artist39: thirtieninthmonthsong.artist, top100weeks39: thirtieninthmonthsong.position.weeksOnChart, top100image39: thirtieninthmonthsong.cover,
        top100title40: fortiethmonthsong.title, top100artist40: fortiethmonthsong.artist, top100weeks40: fortiethmonthsong.position.weeksOnChart, top100image40: fortiethmonthsong.cover,
        top100title41: fortyfirstmonthsong.title, top100artist41: fortyfirstmonthsong.artist, top100weeks41: fortyfirstmonthsong.position.weeksOnChart, top100image41: fortyfirstmonthsong.cover,
        top100title42: fortysecondmonthsong.title, top100artist42: fortysecondmonthsong.artist, top100weeks42: fortysecondmonthsong.position.weeksOnChart, top100image42: fortysecondmonthsong.cover,
        top100title43: fortythirdmonthsong.title, top100artist43: fortythirdmonthsong.artist, top100weeks43: fortythirdmonthsong.position.weeksOnChart, top100image43: fortythirdmonthsong.cover,
        top100title44: fortyfourthmonthsong.title, top100artist44: fortyfourthmonthsong.artist, top100weeks44: fortyfourthmonthsong.position.weeksOnChart, top100image44: fortyfourthmonthsong.cover,
        top100title45: fortyfifthmonthsong.title, top100artist45: fortyfifthmonthsong.artist, top100weeks45: fortyfifthmonthsong.position.weeksOnChart, top100image45: fortyfifthmonthsong.cover,
        top100title46: fortysixthmonthsong.title, top100artist46: fortysixthmonthsong.artist, top100weeks46: fortysixthmonthsong.position.weeksOnChart, top100image46: fortysixthmonthsong.cover,
        top100title47: fortyseventhmonthsong.title, top100artist47: fortyseventhmonthsong.artist, top100weeks47: fortyseventhmonthsong.position.weeksOnChart, top100image47: fortyseventhmonthsong.cover,
        top100title48: fortyeighthmonthsong.title, top100artist48: fortyeighthmonthsong.artist, top100weeks48: fortyeighthmonthsong.position.weeksOnChart, top100image48: fortyeighthmonthsong.cover,
        top100title49: fortyninthmonthsong.title, top100artist49: fortyninthmonthsong.artist, top100weeks49: fortyninthmonthsong.position.weeksOnChart, top100image49: fortyninthmonthsong.cover,
        top100title50: fiftythmonthsong.title, top100artist50: fiftythmonthsong.artist, top100weeks50: fiftythmonthsong.position.weeksOnChart, top100image50: fiftythmonthsong.cover,
        top100title51: fiftyfirstmonthsong.title, top100artist51: fiftyfirstmonthsong.artist, top100weeks51: fiftyfirstmonthsong.position.weeksOnChart, top100image51: fiftyfirstmonthsong.cover,
        top100title52: fiftysecondmonthsong.title, top100artist52: fiftysecondmonthsong.artist, top100weeks52: fiftysecondmonthsong.position.weeksOnChart, top100image52: fiftysecondmonthsong.cover,
        top100title53: fiftythirdmonthsong.title, top100artist53: fiftythirdmonthsong.artist, top100weeks53: fiftythirdmonthsong.position.weeksOnChart, top100image53: fiftythirdmonthsong.cover,
        top100title54: fiftyfourthmonthsong.title, top100artist54: fiftyfourthmonthsong.artist, top100weeks54: fiftyfourthmonthsong.position.weeksOnChart, top100image54: fiftyfourthmonthsong.cover,
        top100title55: fiftyfifthmonthsong.title, top100artist55: fiftyfifthmonthsong.artist, top100weeks55: fiftyfifthmonthsong.position.weeksOnChart, top100image55: fiftyfifthmonthsong.cover,
        top100title56: fiftysixthmonthsong.title, top100artist56: fiftysixthmonthsong.artist, top100weeks56: fiftysixthmonthsong.position.weeksOnChart, top100image56: fiftysixthmonthsong.cover,
        top100title57: fiftyseventhmonthsong.title, top100artist57: fiftyseventhmonthsong.artist, top100weeks57: fiftyseventhmonthsong.position.weeksOnChart, top100image57: fiftyseventhmonthsong.cover,
        top100title58: fiftyeighthmonthsong.title, top100artist58: fiftyeighthmonthsong.artist, top100weeks58: fiftyeighthmonthsong.position.weeksOnChart, top100image58: fiftyeighthmonthsong.cover,
        top100title59: fiftyninthmonthsong.title, top100artist59: fiftyninthmonthsong.artist, top100weeks59: fiftyninthmonthsong.position.weeksOnChart, top100image59: fiftyninthmonthsong.cover,
        top100title60: sixtythmonthsong.title, top100artist60: sixtythmonthsong.artist, top100weeks60: sixtythmonthsong.position.weeksOnChart, top100image60: sixtythmonthsong.cover,
        top100title61: sixtyfirstmonthsong.title, top100artist61: sixtyfirstmonthsong.artist, top100weeks61: sixtyfirstmonthsong.position.weeksOnChart, top100image61: sixtyfirstmonthsong.cover,
        top100title62: sixtysecondmonthsong.title, top100artist62: sixtysecondmonthsong.artist, top100weeks62: sixtysecondmonthsong.position.weeksOnChart, top100image62: sixtysecondmonthsong.cover,
        top100title63: sixtythirdmonthsong.title, top100artist63: sixtythirdmonthsong.artist, top100weeks63: sixtythirdmonthsong.position.weeksOnChart, top100image63: sixtythirdmonthsong.cover,
        top100title64: sixtyfourthmonthsong.title, top100artist64: sixtyfourthmonthsong.artist, top100weeks64: sixtyfourthmonthsong.position.weeksOnChart, top100image64: sixtyfourthmonthsong.cover,
        top100title65: sixtyfifthmonthsong.title, top100artist65: sixtyfifthmonthsong.artist, top100weeks65: sixtyfifthmonthsong.position.weeksOnChart, top100image65: sixtyfifthmonthsong.cover,
        top100title66: sixtysixthmonthsong.title, top100artist66: sixtysixthmonthsong.artist, top100weeks66: sixtysixthmonthsong.position.weeksOnChart, top100image66: sixtysixthmonthsong.cover,
        top100title67: sixtyseventhmonthsong.title, top100artist67: sixtyseventhmonthsong.artist, top100weeks67: sixtyseventhmonthsong.position.weeksOnChart, top100image67: sixtyseventhmonthsong.cover,
        top100title68: sixtyeighthmonthsong.title, top100artist68: sixtyeighthmonthsong.artist, top100weeks68: sixtyeighthmonthsong.position.weeksOnChart, top100image68: sixtyeighthmonthsong.cover,
        top100title69: sixtyninthmonthsong.title, top100artist69: sixtyninthmonthsong.artist, top100weeks69: sixtyninthmonthsong.position.weeksOnChart, top100image69: sixtyninthmonthsong.cover,
        top100title70: seventythmonthsong.title, top100artist70: seventythmonthsong.artist, top100weeks70: seventythmonthsong.position.weeksOnChart, top100image70: seventythmonthsong.cover,
        top100title71: seventyfirstmonthsong.title, top100artist71: seventyfirstmonthsong.artist, top100weeks71: seventyfirstmonthsong.position.weeksOnChart, top100image71: seventyfirstmonthsong.cover,
        top100title72: seventysecondmonthsong.title, top100artist72: seventysecondmonthsong.artist, top100weeks72: seventysecondmonthsong.position.weeksOnChart, top100image72: seventysecondmonthsong.cover,
        top100title73: seventythirdmonthsong.title, top100artist73: seventythirdmonthsong.artist, top100weeks73: seventythirdmonthsong.position.weeksOnChart, top100image73: seventythirdmonthsong.cover,
        top100title74: seventyfourthmonthsong.title, top100artist74: seventyfourthmonthsong.artist, top100weeks74: seventyfourthmonthsong.position.weeksOnChart, top100image74: seventyfourthmonthsong.cover,
        top100title75: seventyfifthmonthsong.title, top100artist75: seventyfifthmonthsong.artist, top100weeks75: seventyfifthmonthsong.position.weeksOnChart, top100image75: seventyfifthmonthsong.cover,
        top100title76: seventysixthmonthsong.title, top100artist76: seventysixthmonthsong.artist, top100weeks76: seventysixthmonthsong.position.weeksOnChart, top100image76: seventysixthmonthsong.cover,
        top100title77: seventyseventhmonthsong.title, top100artist77: seventyseventhmonthsong.artist, top100weeks77: seventyseventhmonthsong.position.weeksOnChart, top100image77: seventyseventhmonthsong.cover,
        top100title78: seventyeighthmonthsong.title, top100artist78: seventyeighthmonthsong.artist, top100weeks78: seventyeighthmonthsong.position.weeksOnChart, top100image78: seventyeighthmonthsong.cover,
        top100title79: seventyninthmonthsong.title, top100artist79: seventyninthmonthsong.artist, top100weeks79: seventyninthmonthsong.position.weeksOnChart, top100image79: seventyninthmonthsong.cover,
        top100title80: eightythmonthsong.title, top100artist80: eightythmonthsong.artist, top100weeks80: eightythmonthsong.position.weeksOnChart, top100image80: eightythmonthsong.cover,
        top100title81: eightyfirstmonthsong.title, top100artist81: eightyfirstmonthsong.artist, top100weeks81: eightyfirstmonthsong.position.weeksOnChart, top100image81: eightyfirstmonthsong.cover,
        top100title82: eightysecondmonthsong.title, top100artist82: eightysecondmonthsong.artist, top100weeks82: eightysecondmonthsong.position.weeksOnChart, top100image82: eightysecondmonthsong.cover,
        top100title83: eightythirdmonthsong.title, top100artist83: eightythirdmonthsong.artist, top100weeks83: eightythirdmonthsong.position.weeksOnChart, top100image83: eightythirdmonthsong.cover,
        top100title84: eightyfourthmonthsong.title, top100artist84: eightyfourthmonthsong.artist, top100weeks84: eightyfourthmonthsong.position.weeksOnChart, top100image84: eightyfourthmonthsong.cover,
        top100title85: eightyfifthmonthsong.title, top100artist85: eightyfifthmonthsong.artist, top100weeks85: eightyfifthmonthsong.position.weeksOnChart, top100image85: eightyfifthmonthsong.cover,
        top100title86: eightysixthmonthsong.title, top100artist86: eightysixthmonthsong.artist, top100weeks86: eightysixthmonthsong.position.weeksOnChart, top100image86: eightysixthmonthsong.cover,
        top100title87: eightyseventhmonthsong.title, top100artist87: eightyseventhmonthsong.artist, top100weeks87: eightyseventhmonthsong.position.weeksOnChart, top100image87: eightyseventhmonthsong.cover,
        top100title88: eightyeighthmonthsong.title, top100artist88: eightyeighthmonthsong.artist, top100weeks88: eightyeighthmonthsong.position.weeksOnChart, top100image88: eightyeighthmonthsong.cover,
        top100title89: eightyninthmonthsong.title, top100artist89: eightyninthmonthsong.artist, top100weeks89: eightyninthmonthsong.position.weeksOnChart, top100image89: eightyninthmonthsong.cover,
        top100title90: nintythmonthsong.title, top100artist90: nintythmonthsong.artist, top100weeks90: nintythmonthsong.position.weeksOnChart, top100image90: nintythmonthsong.cover,
        top100title91: nintyfirstmonthsong.title, top100artist91: nintyfirstmonthsong.artist, top100weeks91: nintyfirstmonthsong.position.weeksOnChart, top100image91: nintyfirstmonthsong.cover,
        top100title92: nintysecondmonthsong.title, top100artist92: nintysecondmonthsong.artist, top100weeks92: nintysecondmonthsong.position.weeksOnChart, top100image92: nintysecondmonthsong.cover,
        top100title93: nintythirdmonthsong.title, top100artist93: nintythirdmonthsong.artist, top100weeks93: nintythirdmonthsong.position.weeksOnChart, top100image93: nintythirdmonthsong.cover,
        top100title94: nintyfourthmonthsong.title, top100artist94: nintyfourthmonthsong.artist, top100weeks94: nintyfourthmonthsong.position.weeksOnChart, top100image94: nintyfourthmonthsong.cover,
        top100title95: nintyfifthmonthsong.title, top100artist95: nintyfifthmonthsong.artist, top100weeks95: nintyfifthmonthsong.position.weeksOnChart, top100image95: nintyfifthmonthsong.cover,
        top100title96: nintysixthmonthsong.title, top100artist96: nintysixthmonthsong.artist, top100weeks96: nintysixthmonthsong.position.weeksOnChart, top100image96: nintysixthmonthsong.cover,
        top100title97: nintyseventhmonthsong.title, top100artist97: nintyseventhmonthsong.artist, top100weeks97: nintyseventhmonthsong.position.weeksOnChart, top100image97: nintyseventhmonthsong.cover,
        top100title98: nintyeighthmonthsong.title, top100artist98: nintyeighthmonthsong.artist, top100weeks98: nintyeighthmonthsong.position.weeksOnChart, top100image98: nintyeighthmonthsong.cover,
        top100title99: nintyninthmonthsong.title, top100artist99: nintyninthmonthsong.artist, top100weeks99: nintyninthmonthsong.position.weeksOnChart, top100image99: nintyninthmonthsong.cover,
        top100title100: onehundredthmonthsong.title, top100artist100: onehundredthmonthsong.artist, top100weeks100: onehundredthmonthsong.position.weeksOnChart, top100image100: onehundredthmonthsong.cover,
        });
});


// CREATES HALFYEAR SERVER
app.get('/halfYear', (req, res) => {
    res.render('music-charts', {topsongvideo: "https://www.youtube.com/embed/P00HMxdsVZI", topsongtitle: tophalfyearsong.title, topsongartist: tophalfyearsong.artist, topsongweeks: tophalfyearsong.position.weeksOnChart, 
        top100title1: tophalfyearsong.title, top100artist1: tophalfyearsong.artist, top100weeks1: tophalfyearsong.position.weeksOnChart, top100image1: tophalfyearsong.cover, 
        top100title2: secondhalfyearsong.title, top100artist2: secondhalfyearsong.artist, top100weeks2: secondhalfyearsong.position.weeksOnChart, top100image2: secondhalfyearsong.cover,
        top100title3: thirdhalfyearsong.title, top100artist3: thirdhalfyearsong.artist, top100weeks3: thirdhalfyearsong.position.weeksOnChart, top100image3: thirdhalfyearsong.cover,
        top100title4: fourthhalfyearsong.title, top100artist4: fourthhalfyearsong.artist, top100weeks4: fourthhalfyearsong.position.weeksOnChart, top100image4: fourthhalfyearsong.cover,
        top100title5: fifthhalfyearsong.title, top100artist5: fifthhalfyearsong.artist, top100weeks5: fifthhalfyearsong.position.weeksOnChart, top100image5: fifthhalfyearsong.cover,
        top100title6: sixthhalfyearsong.title, top100artist6: sixthhalfyearsong.artist, top100weeks6: sixthhalfyearsong.position.weeksOnChart, top100image6: sixthhalfyearsong.cover,
        top100title7: seventhhalfyearsong.title, top100artist7: seventhhalfyearsong.artist, top100weeks7: seventhhalfyearsong.position.weeksOnChart, top100image7: seventhhalfyearsong.cover,
        top100title8: eigthhalfyearsong.title, top100artist8: eigthhalfyearsong.artist, top100weeks8: eigthhalfyearsong.position.weeksOnChart, top100image8: eigthhalfyearsong.cover,
        top100title9: ninthhalfyearsong.title, top100artist9: ninthhalfyearsong.artist, top100weeks9: ninthhalfyearsong.position.weeksOnChart, top100image9: ninthhalfyearsong.cover,
        top100title10: tenthhalfyearsong.title, top100artist10: tenthhalfyearsong.artist, top100weeks10: tenthhalfyearsong.position.weeksOnChart, top100image10: tenthhalfyearsong.cover,
        top100title11: eleventhhalfyearsong.title, top100artist11: eleventhhalfyearsong.artist, top100weeks11: eleventhhalfyearsong.position.weeksOnChart, top100image11: eleventhhalfyearsong.cover,
        top100title12: twelfthhalfyearsong.title, top100artist12: twelfthhalfyearsong.artist, top100weeks12: twelfthhalfyearsong.position.weeksOnChart, top100image12: twelfthhalfyearsong.cover,
        top100title13: thirteenthhalfyearsong.title, top100artist13: thirteenthhalfyearsong.artist, top100weeks13: thirteenthhalfyearsong.position.weeksOnChart, top100image13: thirteenthhalfyearsong.cover,
        top100title14: fourteenthhalfyearsong.title, top100artist14: fourteenthhalfyearsong.artist, top100weeks14: fourteenthhalfyearsong.position.weeksOnChart, top100image14: fourteenthhalfyearsong.cover,
        top100title15: fifteenthhalfyearsong.title, top100artist15: fifteenthhalfyearsong.artist, top100weeks15: fifteenthhalfyearsong.position.weeksOnChart, top100image15: fifteenthhalfyearsong.cover,
        top100title16: sixteenthhalfyearsong.title, top100artist16: sixteenthhalfyearsong.artist, top100weeks16: sixteenthhalfyearsong.position.weeksOnChart, top100image16: sixteenthhalfyearsong.cover,
        top100title17: seventeenthhalfyearsong.title, top100artist17: seventeenthhalfyearsong.artist, top100weeks17: seventeenthhalfyearsong.position.weeksOnChart, top100image17: seventeenthhalfyearsong.cover,
        top100title18: eigthteenthhalfyearsong.title, top100artist18: eigthteenthhalfyearsong.artist, top100weeks18: eigthteenthhalfyearsong.position.weeksOnChart, top100image18: eigthteenthhalfyearsong.cover,
        top100title19: ninteenthhalfyearsong.title, top100artist19: ninteenthhalfyearsong.artist, top100weeks19: ninteenthhalfyearsong.position.weeksOnChart, top100image19: ninteenthhalfyearsong.cover,
        top100title20: twentiethhalfyearsong.title, top100artist20: twentiethhalfyearsong.artist, top100weeks20: twentiethhalfyearsong.position.weeksOnChart, top100image20: twentiethhalfyearsong.cover,
        top100title21: twentyfirsthalfyearsong.title, top100artist21: twentyfirsthalfyearsong.artist, top100weeks21: twentyfirsthalfyearsong.position.weeksOnChart, top100image21: twentyfirsthalfyearsong.cover,
        top100title22: twentysecondhalfyearsong.title, top100artist22: twentysecondhalfyearsong.artist, top100weeks22: twentysecondhalfyearsong.position.weeksOnChart, top100image22: twentysecondhalfyearsong.cover,
        top100title23: twentythirdhalfyearsong.title, top100artist23: twentythirdhalfyearsong.artist, top100weeks23: twentythirdhalfyearsong.position.weeksOnChart, top100image23: twentythirdhalfyearsong.cover,
        top100title24: twentyfourthhalfyearsong.title, top100artist24: twentyfourthhalfyearsong.artist, top100weeks24: twentyfourthhalfyearsong.position.weeksOnChart, top100image24: twentyfourthhalfyearsong.cover,
        top100title25: twentyfifthhalfyearsong.title, top100artist25: twentyfifthhalfyearsong.artist, top100weeks25: twentyfifthhalfyearsong.position.weeksOnChart, top100image25: twentyfifthhalfyearsong.cover,
        top100title26: twentysixthhalfyearsong.title, top100artist26: twentysixthhalfyearsong.artist, top100weeks26: twentysixthhalfyearsong.position.weeksOnChart, top100image26: twentysixthhalfyearsong.cover,
        top100title27: twentyseventhhalfyearsong.title, top100artist27: twentyseventhhalfyearsong.artist, top100weeks27: twentyseventhhalfyearsong.position.weeksOnChart, top100image27: twentyseventhhalfyearsong.cover,
        top100title28: twentyeighthhalfyearsong.title, top100artist28: twentyeighthhalfyearsong.artist, top100weeks28: twentyeighthhalfyearsong.position.weeksOnChart, top100image28: twentyeighthhalfyearsong.cover,
        top100title29: twentyninthhalfyearsong.title, top100artist29: twentyninthhalfyearsong.artist, top100weeks29: twentyninthhalfyearsong.position.weeksOnChart, top100image29: twentyninthhalfyearsong.cover,
        top100title30: thirtiethhalfyearsong.title, top100artist30: thirtiethhalfyearsong.artist, top100weeks30: thirtiethhalfyearsong.position.weeksOnChart, top100image30: thirtiethhalfyearsong.cover,
        top100title31: thirtiefirsthalfyearsong.title, top100artist31: thirtiefirsthalfyearsong.artist, top100weeks31: thirtiefirsthalfyearsong.position.weeksOnChart, top100image31: thirtiefirsthalfyearsong.cover,
        top100title32: thirtiesecondhalfyearsong.title, top100artist32: thirtiesecondhalfyearsong.artist, top100weeks32: thirtiesecondhalfyearsong.position.weeksOnChart, top100image32: thirtiesecondhalfyearsong.cover,
        top100title33: thirtiethirdhalfyearsong.title, top100artist33: thirtiethirdhalfyearsong.artist, top100weeks33: thirtiethirdhalfyearsong.position.weeksOnChart, top100image33: thirtiethirdhalfyearsong.cover,
        top100title34: thirtiefourthhalfyearsong.title, top100artist34: thirtiefourthhalfyearsong.artist, top100weeks34: thirtiefourthhalfyearsong.position.weeksOnChart, top100image34: thirtiefourthhalfyearsong.cover,
        top100title35: thirtiefifthhalfyearsong.title, top100artist35: thirtiefifthhalfyearsong.artist, top100weeks35: thirtiefifthhalfyearsong.position.weeksOnChart, top100image35: thirtiefifthhalfyearsong.cover,
        top100title36: thirtiesixthhalfyearsong.title, top100artist36: thirtiesixthhalfyearsong.artist, top100weeks36: thirtiesixthhalfyearsong.position.weeksOnChart, top100image36: thirtiesixthhalfyearsong.cover,
        top100title37: thirtieseventhhalfyearsong.title, top100artist37: thirtieseventhhalfyearsong.artist, top100weeks37: thirtieseventhhalfyearsong.position.weeksOnChart, top100image37: thirtieseventhhalfyearsong.cover,
        top100title38: thirtieeighthhalfyearsong.title, top100artist38: thirtieeighthhalfyearsong.artist, top100weeks38: thirtieeighthhalfyearsong.position.weeksOnChart, top100image38: thirtieeighthhalfyearsong.cover,
        top100title39: thirtieninthhalfyearsong.title, top100artist39: thirtieninthhalfyearsong.artist, top100weeks39: thirtieninthhalfyearsong.position.weeksOnChart, top100image39: thirtieninthhalfyearsong.cover,
        top100title40: fortiethhalfyearsong.title, top100artist40: fortiethhalfyearsong.artist, top100weeks40: fortiethhalfyearsong.position.weeksOnChart, top100image40: fortiethhalfyearsong.cover,
        top100title41: fortyfirsthalfyearsong.title, top100artist41: fortyfirsthalfyearsong.artist, top100weeks41: fortyfirsthalfyearsong.position.weeksOnChart, top100image41: fortyfirsthalfyearsong.cover,
        top100title42: fortysecondhalfyearsong.title, top100artist42: fortysecondhalfyearsong.artist, top100weeks42: fortysecondhalfyearsong.position.weeksOnChart, top100image42: fortysecondhalfyearsong.cover,
        top100title43: fortythirdhalfyearsong.title, top100artist43: fortythirdhalfyearsong.artist, top100weeks43: fortythirdhalfyearsong.position.weeksOnChart, top100image43: fortythirdhalfyearsong.cover,
        top100title44: fortyfourthhalfyearsong.title, top100artist44: fortyfourthhalfyearsong.artist, top100weeks44: fortyfourthhalfyearsong.position.weeksOnChart, top100image44: fortyfourthhalfyearsong.cover,
        top100title45: fortyfifthhalfyearsong.title, top100artist45: fortyfifthhalfyearsong.artist, top100weeks45: fortyfifthhalfyearsong.position.weeksOnChart, top100image45: fortyfifthhalfyearsong.cover,
        top100title46: fortysixthhalfyearsong.title, top100artist46: fortysixthhalfyearsong.artist, top100weeks46: fortysixthhalfyearsong.position.weeksOnChart, top100image46: fortysixthhalfyearsong.cover,
        top100title47: fortyseventhhalfyearsong.title, top100artist47: fortyseventhhalfyearsong.artist, top100weeks47: fortyseventhhalfyearsong.position.weeksOnChart, top100image47: fortyseventhhalfyearsong.cover,
        top100title48: fortyeighthhalfyearsong.title, top100artist48: fortyeighthhalfyearsong.artist, top100weeks48: fortyeighthhalfyearsong.position.weeksOnChart, top100image48: fortyeighthhalfyearsong.cover,
        top100title49: fortyninthhalfyearsong.title, top100artist49: fortyninthhalfyearsong.artist, top100weeks49: fortyninthhalfyearsong.position.weeksOnChart, top100image49: fortyninthhalfyearsong.cover,
        top100title50: fiftythhalfyearsong.title, top100artist50: fiftythhalfyearsong.artist, top100weeks50: fiftythhalfyearsong.position.weeksOnChart, top100image50: fiftythhalfyearsong.cover,
        top100title51: fiftyfirsthalfyearsong.title, top100artist51: fiftyfirsthalfyearsong.artist, top100weeks51: fiftyfirsthalfyearsong.position.weeksOnChart, top100image51: fiftyfirsthalfyearsong.cover,
        top100title52: fiftysecondhalfyearsong.title, top100artist52: fiftysecondhalfyearsong.artist, top100weeks52: fiftysecondhalfyearsong.position.weeksOnChart, top100image52: fiftysecondhalfyearsong.cover,
        top100title53: fiftythirdhalfyearsong.title, top100artist53: fiftythirdhalfyearsong.artist, top100weeks53: fiftythirdhalfyearsong.position.weeksOnChart, top100image53: fiftythirdhalfyearsong.cover,
        top100title54: fiftyfourthhalfyearsong.title, top100artist54: fiftyfourthhalfyearsong.artist, top100weeks54: fiftyfourthhalfyearsong.position.weeksOnChart, top100image54: fiftyfourthhalfyearsong.cover,
        top100title55: fiftyfifthhalfyearsong.title, top100artist55: fiftyfifthhalfyearsong.artist, top100weeks55: fiftyfifthhalfyearsong.position.weeksOnChart, top100image55: fiftyfifthhalfyearsong.cover,
        top100title56: fiftysixthhalfyearsong.title, top100artist56: fiftysixthhalfyearsong.artist, top100weeks56: fiftysixthhalfyearsong.position.weeksOnChart, top100image56: fiftysixthhalfyearsong.cover,
        top100title57: fiftyseventhhalfyearsong.title, top100artist57: fiftyseventhhalfyearsong.artist, top100weeks57: fiftyseventhhalfyearsong.position.weeksOnChart, top100image57: fiftyseventhhalfyearsong.cover,
        top100title58: fiftyeighthhalfyearsong.title, top100artist58: fiftyeighthhalfyearsong.artist, top100weeks58: fiftyeighthhalfyearsong.position.weeksOnChart, top100image58: fiftyeighthhalfyearsong.cover,
        top100title59: fiftyninthhalfyearsong.title, top100artist59: fiftyninthhalfyearsong.artist, top100weeks59: fiftyninthhalfyearsong.position.weeksOnChart, top100image59: fiftyninthhalfyearsong.cover,
        top100title60: sixtythhalfyearsong.title, top100artist60: sixtythhalfyearsong.artist, top100weeks60: sixtythhalfyearsong.position.weeksOnChart, top100image60: sixtythhalfyearsong.cover,
        top100title61: sixtyfirsthalfyearsong.title, top100artist61: sixtyfirsthalfyearsong.artist, top100weeks61: sixtyfirsthalfyearsong.position.weeksOnChart, top100image61: sixtyfirsthalfyearsong.cover,
        top100title62: sixtysecondhalfyearsong.title, top100artist62: sixtysecondhalfyearsong.artist, top100weeks62: sixtysecondhalfyearsong.position.weeksOnChart, top100image62: sixtysecondhalfyearsong.cover,
        top100title63: sixtythirdhalfyearsong.title, top100artist63: sixtythirdhalfyearsong.artist, top100weeks63: sixtythirdhalfyearsong.position.weeksOnChart, top100image63: sixtythirdhalfyearsong.cover,
        top100title64: sixtyfourthhalfyearsong.title, top100artist64: sixtyfourthhalfyearsong.artist, top100weeks64: sixtyfourthhalfyearsong.position.weeksOnChart, top100image64: sixtyfourthhalfyearsong.cover,
        top100title65: sixtyfifthhalfyearsong.title, top100artist65: sixtyfifthhalfyearsong.artist, top100weeks65: sixtyfifthhalfyearsong.position.weeksOnChart, top100image65: sixtyfifthhalfyearsong.cover,
        top100title66: sixtysixthhalfyearsong.title, top100artist66: sixtysixthhalfyearsong.artist, top100weeks66: sixtysixthhalfyearsong.position.weeksOnChart, top100image66: sixtysixthhalfyearsong.cover,
        top100title67: sixtyseventhhalfyearsong.title, top100artist67: sixtyseventhhalfyearsong.artist, top100weeks67: sixtyseventhhalfyearsong.position.weeksOnChart, top100image67: sixtyseventhhalfyearsong.cover,
        top100title68: sixtyeighthhalfyearsong.title, top100artist68: sixtyeighthhalfyearsong.artist, top100weeks68: sixtyeighthhalfyearsong.position.weeksOnChart, top100image68: sixtyeighthhalfyearsong.cover,
        top100title69: sixtyninthhalfyearsong.title, top100artist69: sixtyninthhalfyearsong.artist, top100weeks69: sixtyninthhalfyearsong.position.weeksOnChart, top100image69: sixtyninthhalfyearsong.cover,
        top100title70: seventythhalfyearsong.title, top100artist70: seventythhalfyearsong.artist, top100weeks70: seventythhalfyearsong.position.weeksOnChart, top100image70: seventythhalfyearsong.cover,
        top100title71: seventyfirsthalfyearsong.title, top100artist71: seventyfirsthalfyearsong.artist, top100weeks71: seventyfirsthalfyearsong.position.weeksOnChart, top100image71: seventyfirsthalfyearsong.cover,
        top100title72: seventysecondhalfyearsong.title, top100artist72: seventysecondhalfyearsong.artist, top100weeks72: seventysecondhalfyearsong.position.weeksOnChart, top100image72: seventysecondhalfyearsong.cover,
        top100title73: seventythirdhalfyearsong.title, top100artist73: seventythirdhalfyearsong.artist, top100weeks73: seventythirdhalfyearsong.position.weeksOnChart, top100image73: seventythirdhalfyearsong.cover,
        top100title74: seventyfourthhalfyearsong.title, top100artist74: seventyfourthhalfyearsong.artist, top100weeks74: seventyfourthhalfyearsong.position.weeksOnChart, top100image74: seventyfourthhalfyearsong.cover,
        top100title75: seventyfifthhalfyearsong.title, top100artist75: seventyfifthhalfyearsong.artist, top100weeks75: seventyfifthhalfyearsong.position.weeksOnChart, top100image75: seventyfifthhalfyearsong.cover,
        top100title76: seventysixthhalfyearsong.title, top100artist76: seventysixthhalfyearsong.artist, top100weeks76: seventysixthhalfyearsong.position.weeksOnChart, top100image76: seventysixthhalfyearsong.cover,
        top100title77: seventyseventhhalfyearsong.title, top100artist77: seventyseventhhalfyearsong.artist, top100weeks77: seventyseventhhalfyearsong.position.weeksOnChart, top100image77: seventyseventhhalfyearsong.cover,
        top100title78: seventyeighthhalfyearsong.title, top100artist78: seventyeighthhalfyearsong.artist, top100weeks78: seventyeighthhalfyearsong.position.weeksOnChart, top100image78: seventyeighthhalfyearsong.cover,
        top100title79: seventyninthhalfyearsong.title, top100artist79: seventyninthhalfyearsong.artist, top100weeks79: seventyninthhalfyearsong.position.weeksOnChart, top100image79: seventyninthhalfyearsong.cover,
        top100title80: eightythhalfyearsong.title, top100artist80: eightythhalfyearsong.artist, top100weeks80: eightythhalfyearsong.position.weeksOnChart, top100image80: eightythhalfyearsong.cover,
        top100title81: eightyfirsthalfyearsong.title, top100artist81: eightyfirsthalfyearsong.artist, top100weeks81: eightyfirsthalfyearsong.position.weeksOnChart, top100image81: eightyfirsthalfyearsong.cover,
        top100title82: eightysecondhalfyearsong.title, top100artist82: eightysecondhalfyearsong.artist, top100weeks82: eightysecondhalfyearsong.position.weeksOnChart, top100image82: eightysecondhalfyearsong.cover,
        top100title83: eightythirdhalfyearsong.title, top100artist83: eightythirdhalfyearsong.artist, top100weeks83: eightythirdhalfyearsong.position.weeksOnChart, top100image83: eightythirdhalfyearsong.cover,
        top100title84: eightyfourthhalfyearsong.title, top100artist84: eightyfourthhalfyearsong.artist, top100weeks84: eightyfourthhalfyearsong.position.weeksOnChart, top100image84: eightyfourthhalfyearsong.cover,
        top100title85: eightyfifthhalfyearsong.title, top100artist85: eightyfifthhalfyearsong.artist, top100weeks85: eightyfifthhalfyearsong.position.weeksOnChart, top100image85: eightyfifthhalfyearsong.cover,
        top100title86: eightysixthhalfyearsong.title, top100artist86: eightysixthhalfyearsong.artist, top100weeks86: eightysixthhalfyearsong.position.weeksOnChart, top100image86: eightysixthhalfyearsong.cover,
        top100title87: eightyseventhhalfyearsong.title, top100artist87: eightyseventhhalfyearsong.artist, top100weeks87: eightyseventhhalfyearsong.position.weeksOnChart, top100image87: eightyseventhhalfyearsong.cover,
        top100title88: eightyeighthhalfyearsong.title, top100artist88: eightyeighthhalfyearsong.artist, top100weeks88: eightyeighthhalfyearsong.position.weeksOnChart, top100image88: eightyeighthhalfyearsong.cover,
        top100title89: eightyninthhalfyearsong.title, top100artist89: eightyninthhalfyearsong.artist, top100weeks89: eightyninthhalfyearsong.position.weeksOnChart, top100image89: eightyninthhalfyearsong.cover,
        top100title90: nintythhalfyearsong.title, top100artist90: nintythhalfyearsong.artist, top100weeks90: nintythhalfyearsong.position.weeksOnChart, top100image90: nintythhalfyearsong.cover,
        top100title91: nintyfirsthalfyearsong.title, top100artist91: nintyfirsthalfyearsong.artist, top100weeks91: nintyfirsthalfyearsong.position.weeksOnChart, top100image91: nintyfirsthalfyearsong.cover,
        top100title92: nintysecondhalfyearsong.title, top100artist92: nintysecondhalfyearsong.artist, top100weeks92: nintysecondhalfyearsong.position.weeksOnChart, top100image92: nintysecondhalfyearsong.cover,
        top100title93: nintythirdhalfyearsong.title, top100artist93: nintythirdhalfyearsong.artist, top100weeks93: nintythirdhalfyearsong.position.weeksOnChart, top100image93: nintythirdhalfyearsong.cover,
        top100title94: nintyfourthhalfyearsong.title, top100artist94: nintyfourthhalfyearsong.artist, top100weeks94: nintyfourthhalfyearsong.position.weeksOnChart, top100image94: nintyfourthhalfyearsong.cover,
        top100title95: nintyfifthhalfyearsong.title, top100artist95: nintyfifthhalfyearsong.artist, top100weeks95: nintyfifthhalfyearsong.position.weeksOnChart, top100image95: nintyfifthhalfyearsong.cover,
        top100title96: nintysixthhalfyearsong.title, top100artist96: nintysixthhalfyearsong.artist, top100weeks96: nintysixthhalfyearsong.position.weeksOnChart, top100image96: nintysixthhalfyearsong.cover,
        top100title97: nintyseventhhalfyearsong.title, top100artist97: nintyseventhhalfyearsong.artist, top100weeks97: nintyseventhhalfyearsong.position.weeksOnChart, top100image97: nintyseventhhalfyearsong.cover,
        top100title98: nintyeighthhalfyearsong.title, top100artist98: nintyeighthhalfyearsong.artist, top100weeks98: nintyeighthhalfyearsong.position.weeksOnChart, top100image98: nintyeighthhalfyearsong.cover,
        top100title99: nintyninthhalfyearsong.title, top100artist99: nintyninthhalfyearsong.artist, top100weeks99: nintyninthhalfyearsong.position.weeksOnChart, top100image99: nintyninthhalfyearsong.cover,
        top100title100: onehundredthhalfyearsong.title, top100artist100: onehundredthhalfyearsong.artist, top100weeks100: onehundredthhalfyearsong.position.weeksOnChart, top100image100: onehundredthhalfyearsong.cover,
        });

});


// CREATES YEAR SERVER
app.get('/year', (req, res) => {
    res.render('music-charts', {topsongvideo: "https://www.youtube.com/embed/CnAmeh0-E-U", topsongtitle: topyearsong.title, topsongartist: topyearsong.artist, topsongweeks: topyearsong.position.weeksOnChart, 
        top100title1: topyearsong.title, top100artist1: topyearsong.artist, top100weeks1: topyearsong.position.weeksOnChart, top100image1: topyearsong.cover, 
        top100title2: secondyearsong.title, top100artist2: secondyearsong.artist, top100weeks2: secondyearsong.position.weeksOnChart, top100image2: secondyearsong.cover,
        top100title3: thirdyearsong.title, top100artist3: thirdyearsong.artist, top100weeks3: thirdyearsong.position.weeksOnChart, top100image3: thirdyearsong.cover,
        top100title4: fourthyearsong.title, top100artist4: fourthyearsong.artist, top100weeks4: fourthyearsong.position.weeksOnChart, top100image4: fourthyearsong.cover,
        top100title5: fifthyearsong.title, top100artist5: fifthyearsong.artist, top100weeks5: fifthyearsong.position.weeksOnChart, top100image5: fifthyearsong.cover,
        top100title6: sixthyearsong.title, top100artist6: sixthyearsong.artist, top100weeks6: sixthyearsong.position.weeksOnChart, top100image6: sixthyearsong.cover,
        top100title7: seventhyearsong.title, top100artist7: seventhyearsong.artist, top100weeks7: seventhyearsong.position.weeksOnChart, top100image7: seventhyearsong.cover,
        top100title8: eigthyearsong.title, top100artist8: eigthyearsong.artist, top100weeks8: eigthyearsong.position.weeksOnChart, top100image8: eigthyearsong.cover,
        top100title9: ninthyearsong.title, top100artist9: ninthyearsong.artist, top100weeks9: ninthyearsong.position.weeksOnChart, top100image9: ninthyearsong.cover,
        top100title10: tenthyearsong.title, top100artist10: tenthyearsong.artist, top100weeks10: tenthyearsong.position.weeksOnChart, top100image10: tenthyearsong.cover,
        top100title11: eleventhyearsong.title, top100artist11: eleventhyearsong.artist, top100weeks11: eleventhyearsong.position.weeksOnChart, top100image11: eleventhyearsong.cover,
        top100title12: twelfthyearsong.title, top100artist12: twelfthyearsong.artist, top100weeks12: twelfthyearsong.position.weeksOnChart, top100image12: twelfthyearsong.cover,
        top100title13: thirteenthyearsong.title, top100artist13: thirteenthyearsong.artist, top100weeks13: thirteenthyearsong.position.weeksOnChart, top100image13: thirteenthyearsong.cover,
        top100title14: fourteenthyearsong.title, top100artist14: fourteenthyearsong.artist, top100weeks14: fourteenthyearsong.position.weeksOnChart, top100image14: fourteenthyearsong.cover,
        top100title15: fifteenthyearsong.title, top100artist15: fifteenthyearsong.artist, top100weeks15: fifteenthyearsong.position.weeksOnChart, top100image15: fifteenthyearsong.cover,
        top100title16: sixteenthyearsong.title, top100artist16: sixteenthyearsong.artist, top100weeks16: sixteenthyearsong.position.weeksOnChart, top100image16: sixteenthyearsong.cover,
        top100title17: seventeenthyearsong.title, top100artist17: seventeenthyearsong.artist, top100weeks17: seventeenthyearsong.position.weeksOnChart, top100image17: seventeenthyearsong.cover,
        top100title18: eigthteenthyearsong.title, top100artist18: eigthteenthyearsong.artist, top100weeks18: eigthteenthyearsong.position.weeksOnChart, top100image18: eigthteenthyearsong.cover,
        top100title19: ninteenthyearsong.title, top100artist19: ninteenthyearsong.artist, top100weeks19: ninteenthyearsong.position.weeksOnChart, top100image19: ninteenthyearsong.cover,
        top100title20: twentiethyearsong.title, top100artist20: twentiethyearsong.artist, top100weeks20: twentiethyearsong.position.weeksOnChart, top100image20: twentiethyearsong.cover,
        top100title21: twentyfirstyearsong.title, top100artist21: twentyfirstyearsong.artist, top100weeks21: twentyfirstyearsong.position.weeksOnChart, top100image21: twentyfirstyearsong.cover,
        top100title22: twentysecondyearsong.title, top100artist22: twentysecondyearsong.artist, top100weeks22: twentysecondyearsong.position.weeksOnChart, top100image22: twentysecondyearsong.cover,
        top100title23: twentythirdyearsong.title, top100artist23: twentythirdyearsong.artist, top100weeks23: twentythirdyearsong.position.weeksOnChart, top100image23: twentythirdyearsong.cover,
        top100title24: twentyfourthyearsong.title, top100artist24: twentyfourthyearsong.artist, top100weeks24: twentyfourthyearsong.position.weeksOnChart, top100image24: twentyfourthyearsong.cover,
        top100title25: twentyfifthyearsong.title, top100artist25: twentyfifthyearsong.artist, top100weeks25: twentyfifthyearsong.position.weeksOnChart, top100image25: twentyfifthyearsong.cover,
        top100title26: twentysixthyearsong.title, top100artist26: twentysixthyearsong.artist, top100weeks26: twentysixthyearsong.position.weeksOnChart, top100image26: twentysixthyearsong.cover,
        top100title27: twentyseventhyearsong.title, top100artist27: twentyseventhyearsong.artist, top100weeks27: twentyseventhyearsong.position.weeksOnChart, top100image27: twentyseventhyearsong.cover,
        top100title28: twentyeighthyearsong.title, top100artist28: twentyeighthyearsong.artist, top100weeks28: twentyeighthyearsong.position.weeksOnChart, top100image28: twentyeighthyearsong.cover,
        top100title29: twentyninthyearsong.title, top100artist29: twentyninthyearsong.artist, top100weeks29: twentyninthyearsong.position.weeksOnChart, top100image29: twentyninthyearsong.cover,
        top100title30: thirtiethyearsong.title, top100artist30: thirtiethyearsong.artist, top100weeks30: thirtiethyearsong.position.weeksOnChart, top100image30: thirtiethyearsong.cover,
        top100title31: thirtiefirstyearsong.title, top100artist31: thirtiefirstyearsong.artist, top100weeks31: thirtiefirstyearsong.position.weeksOnChart, top100image31: thirtiefirstyearsong.cover,
        top100title32: thirtiesecondyearsong.title, top100artist32: thirtiesecondyearsong.artist, top100weeks32: thirtiesecondyearsong.position.weeksOnChart, top100image32: thirtiesecondyearsong.cover,
        top100title33: thirtiethirdyearsong.title, top100artist33: thirtiethirdyearsong.artist, top100weeks33: thirtiethirdyearsong.position.weeksOnChart, top100image33: thirtiethirdyearsong.cover,
        top100title34: thirtiefourthyearsong.title, top100artist34: thirtiefourthyearsong.artist, top100weeks34: thirtiefourthyearsong.position.weeksOnChart, top100image34: thirtiefourthyearsong.cover,
        top100title35: thirtiefifthyearsong.title, top100artist35: thirtiefifthyearsong.artist, top100weeks35: thirtiefifthyearsong.position.weeksOnChart, top100image35: thirtiefifthyearsong.cover,
        top100title36: thirtiesixthyearsong.title, top100artist36: thirtiesixthyearsong.artist, top100weeks36: thirtiesixthyearsong.position.weeksOnChart, top100image36: thirtiesixthyearsong.cover,
        top100title37: thirtieseventhyearsong.title, top100artist37: thirtieseventhyearsong.artist, top100weeks37: thirtieseventhyearsong.position.weeksOnChart, top100image37: thirtieseventhyearsong.cover,
        top100title38: thirtieeighthyearsong.title, top100artist38: thirtieeighthyearsong.artist, top100weeks38: thirtieeighthyearsong.position.weeksOnChart, top100image38: thirtieeighthyearsong.cover,
        top100title39: thirtieninthyearsong.title, top100artist39: thirtieninthyearsong.artist, top100weeks39: thirtieninthyearsong.position.weeksOnChart, top100image39: thirtieninthyearsong.cover,
        top100title40: fortiethyearsong.title, top100artist40: fortiethyearsong.artist, top100weeks40: fortiethyearsong.position.weeksOnChart, top100image40: fortiethyearsong.cover,
        top100title41: fortyfirstyearsong.title, top100artist41: fortyfirstyearsong.artist, top100weeks41: fortyfirstyearsong.position.weeksOnChart, top100image41: fortyfirstyearsong.cover,
        top100title42: fortysecondyearsong.title, top100artist42: fortysecondyearsong.artist, top100weeks42: fortysecondyearsong.position.weeksOnChart, top100image42: fortysecondyearsong.cover,
        top100title43: fortythirdyearsong.title, top100artist43: fortythirdyearsong.artist, top100weeks43: fortythirdyearsong.position.weeksOnChart, top100image43: fortythirdyearsong.cover,
        top100title44: fortyfourthyearsong.title, top100artist44: fortyfourthyearsong.artist, top100weeks44: fortyfourthyearsong.position.weeksOnChart, top100image44: fortyfourthyearsong.cover,
        top100title45: fortyfifthyearsong.title, top100artist45: fortyfifthyearsong.artist, top100weeks45: fortyfifthyearsong.position.weeksOnChart, top100image45: fortyfifthyearsong.cover,
        top100title46: fortysixthyearsong.title, top100artist46: fortysixthyearsong.artist, top100weeks46: fortysixthyearsong.position.weeksOnChart, top100image46: fortysixthyearsong.cover,
        top100title47: fortyseventhyearsong.title, top100artist47: fortyseventhyearsong.artist, top100weeks47: fortyseventhyearsong.position.weeksOnChart, top100image47: fortyseventhyearsong.cover,
        top100title48: fortyeighthyearsong.title, top100artist48: fortyeighthyearsong.artist, top100weeks48: fortyeighthyearsong.position.weeksOnChart, top100image48: fortyeighthyearsong.cover,
        top100title49: fortyninthyearsong.title, top100artist49: fortyninthyearsong.artist, top100weeks49: fortyninthyearsong.position.weeksOnChart, top100image49: fortyninthyearsong.cover,
        top100title50: fiftythyearsong.title, top100artist50: fiftythyearsong.artist, top100weeks50: fiftythyearsong.position.weeksOnChart, top100image50: fiftythyearsong.cover,
        top100title51: fiftyfirstyearsong.title, top100artist51: fiftyfirstyearsong.artist, top100weeks51: fiftyfirstyearsong.position.weeksOnChart, top100image51: fiftyfirstyearsong.cover,
        top100title52: fiftysecondyearsong.title, top100artist52: fiftysecondyearsong.artist, top100weeks52: fiftysecondyearsong.position.weeksOnChart, top100image52: fiftysecondyearsong.cover,
        top100title53: fiftythirdyearsong.title, top100artist53: fiftythirdyearsong.artist, top100weeks53: fiftythirdyearsong.position.weeksOnChart, top100image53: fiftythirdyearsong.cover,
        top100title54: fiftyfourthyearsong.title, top100artist54: fiftyfourthyearsong.artist, top100weeks54: fiftyfourthyearsong.position.weeksOnChart, top100image54: fiftyfourthyearsong.cover,
        top100title55: fiftyfifthyearsong.title, top100artist55: fiftyfifthyearsong.artist, top100weeks55: fiftyfifthyearsong.position.weeksOnChart, top100image55: fiftyfifthyearsong.cover,
        top100title56: fiftysixthyearsong.title, top100artist56: fiftysixthyearsong.artist, top100weeks56: fiftysixthyearsong.position.weeksOnChart, top100image56: fiftysixthyearsong.cover,
        top100title57: fiftyseventhyearsong.title, top100artist57: fiftyseventhyearsong.artist, top100weeks57: fiftyseventhyearsong.position.weeksOnChart, top100image57: fiftyseventhyearsong.cover,
        top100title58: fiftyeighthyearsong.title, top100artist58: fiftyeighthyearsong.artist, top100weeks58: fiftyeighthyearsong.position.weeksOnChart, top100image58: fiftyeighthyearsong.cover,
        top100title59: fiftyninthyearsong.title, top100artist59: fiftyninthyearsong.artist, top100weeks59: fiftyninthyearsong.position.weeksOnChart, top100image59: fiftyninthyearsong.cover,
        top100title60: sixtythyearsong.title, top100artist60: sixtythyearsong.artist, top100weeks60: sixtythyearsong.position.weeksOnChart, top100image60: sixtythyearsong.cover,
        top100title61: sixtyfirstyearsong.title, top100artist61: sixtyfirstyearsong.artist, top100weeks61: sixtyfirstyearsong.position.weeksOnChart, top100image61: sixtyfirstyearsong.cover,
        top100title62: sixtysecondyearsong.title, top100artist62: sixtysecondyearsong.artist, top100weeks62: sixtysecondyearsong.position.weeksOnChart, top100image62: sixtysecondyearsong.cover,
        top100title63: sixtythirdyearsong.title, top100artist63: sixtythirdyearsong.artist, top100weeks63: sixtythirdyearsong.position.weeksOnChart, top100image63: sixtythirdyearsong.cover,
        top100title64: sixtyfourthyearsong.title, top100artist64: sixtyfourthyearsong.artist, top100weeks64: sixtyfourthyearsong.position.weeksOnChart, top100image64: sixtyfourthyearsong.cover,
        top100title65: sixtyfifthyearsong.title, top100artist65: sixtyfifthyearsong.artist, top100weeks65: sixtyfifthyearsong.position.weeksOnChart, top100image65: sixtyfifthyearsong.cover,
        top100title66: sixtysixthyearsong.title, top100artist66: sixtysixthyearsong.artist, top100weeks66: sixtysixthyearsong.position.weeksOnChart, top100image66: sixtysixthyearsong.cover,
        top100title67: sixtyseventhyearsong.title, top100artist67: sixtyseventhyearsong.artist, top100weeks67: sixtyseventhyearsong.position.weeksOnChart, top100image67: sixtyseventhyearsong.cover,
        top100title68: sixtyeighthyearsong.title, top100artist68: sixtyeighthyearsong.artist, top100weeks68: sixtyeighthyearsong.position.weeksOnChart, top100image68: sixtyeighthyearsong.cover,
        top100title69: sixtyninthyearsong.title, top100artist69: sixtyninthyearsong.artist, top100weeks69: sixtyninthyearsong.position.weeksOnChart, top100image69: sixtyninthyearsong.cover,
        top100title70: seventythyearsong.title, top100artist70: seventythyearsong.artist, top100weeks70: seventythyearsong.position.weeksOnChart, top100image70: seventythyearsong.cover,
        top100title71: seventyfirstyearsong.title, top100artist71: seventyfirstyearsong.artist, top100weeks71: seventyfirstyearsong.position.weeksOnChart, top100image71: seventyfirstyearsong.cover,
        top100title72: seventysecondyearsong.title, top100artist72: seventysecondyearsong.artist, top100weeks72: seventysecondyearsong.position.weeksOnChart, top100image72: seventysecondyearsong.cover,
        top100title73: seventythirdyearsong.title, top100artist73: seventythirdyearsong.artist, top100weeks73: seventythirdyearsong.position.weeksOnChart, top100image73: seventythirdyearsong.cover,
        top100title74: seventyfourthyearsong.title, top100artist74: seventyfourthyearsong.artist, top100weeks74: seventyfourthyearsong.position.weeksOnChart, top100image74: seventyfourthyearsong.cover,
        top100title75: seventyfifthyearsong.title, top100artist75: seventyfifthyearsong.artist, top100weeks75: seventyfifthyearsong.position.weeksOnChart, top100image75: seventyfifthyearsong.cover,
        top100title76: seventysixthyearsong.title, top100artist76: seventysixthyearsong.artist, top100weeks76: seventysixthyearsong.position.weeksOnChart, top100image76: seventysixthyearsong.cover,
        top100title77: seventyseventhyearsong.title, top100artist77: seventyseventhyearsong.artist, top100weeks77: seventyseventhyearsong.position.weeksOnChart, top100image77: seventyseventhyearsong.cover,
        top100title78: seventyeighthyearsong.title, top100artist78: seventyeighthyearsong.artist, top100weeks78: seventyeighthyearsong.position.weeksOnChart, top100image78: seventyeighthyearsong.cover,
        top100title79: seventyninthyearsong.title, top100artist79: seventyninthyearsong.artist, top100weeks79: seventyninthyearsong.position.weeksOnChart, top100image79: seventyninthyearsong.cover,
        top100title80: eightythyearsong.title, top100artist80: eightythyearsong.artist, top100weeks80: eightythyearsong.position.weeksOnChart, top100image80: eightythyearsong.cover,
        top100title81: eightyfirstyearsong.title, top100artist81: eightyfirstyearsong.artist, top100weeks81: eightyfirstyearsong.position.weeksOnChart, top100image81: eightyfirstyearsong.cover,
        top100title82: eightysecondyearsong.title, top100artist82: eightysecondyearsong.artist, top100weeks82: eightysecondyearsong.position.weeksOnChart, top100image82: eightysecondyearsong.cover,
        top100title83: eightythirdyearsong.title, top100artist83: eightythirdyearsong.artist, top100weeks83: eightythirdyearsong.position.weeksOnChart, top100image83: eightythirdyearsong.cover,
        top100title84: eightyfourthyearsong.title, top100artist84: eightyfourthyearsong.artist, top100weeks84: eightyfourthyearsong.position.weeksOnChart, top100image84: eightyfourthyearsong.cover,
        top100title85: eightyfifthyearsong.title, top100artist85: eightyfifthyearsong.artist, top100weeks85: eightyfifthyearsong.position.weeksOnChart, top100image85: eightyfifthyearsong.cover,
        top100title86: eightysixthyearsong.title, top100artist86: eightysixthyearsong.artist, top100weeks86: eightysixthyearsong.position.weeksOnChart, top100image86: eightysixthyearsong.cover,
        top100title87: eightyseventhyearsong.title, top100artist87: eightyseventhyearsong.artist, top100weeks87: eightyseventhyearsong.position.weeksOnChart, top100image87: eightyseventhyearsong.cover,
        top100title88: eightyeighthyearsong.title, top100artist88: eightyeighthyearsong.artist, top100weeks88: eightyeighthyearsong.position.weeksOnChart, top100image88: eightyeighthyearsong.cover,
        top100title89: eightyninthyearsong.title, top100artist89: eightyninthyearsong.artist, top100weeks89: eightyninthyearsong.position.weeksOnChart, top100image89: eightyninthyearsong.cover,
        top100title90: nintythyearsong.title, top100artist90: nintythyearsong.artist, top100weeks90: nintythyearsong.position.weeksOnChart, top100image90: nintythyearsong.cover,
        top100title91: nintyfirstyearsong.title, top100artist91: nintyfirstyearsong.artist, top100weeks91: nintyfirstyearsong.position.weeksOnChart, top100image91: nintyfirstyearsong.cover,
        top100title92: nintysecondyearsong.title, top100artist92: nintysecondyearsong.artist, top100weeks92: nintysecondyearsong.position.weeksOnChart, top100image92: nintysecondyearsong.cover,
        top100title93: nintythirdyearsong.title, top100artist93: nintythirdyearsong.artist, top100weeks93: nintythirdyearsong.position.weeksOnChart, top100image93: nintythirdyearsong.cover,
        top100title94: nintyfourthyearsong.title, top100artist94: nintyfourthyearsong.artist, top100weeks94: nintyfourthyearsong.position.weeksOnChart, top100image94: nintyfourthyearsong.cover,
        top100title95: nintyfifthyearsong.title, top100artist95: nintyfifthyearsong.artist, top100weeks95: nintyfifthyearsong.position.weeksOnChart, top100image95: nintyfifthyearsong.cover,
        top100title96: nintysixthyearsong.title, top100artist96: nintysixthyearsong.artist, top100weeks96: nintysixthyearsong.position.weeksOnChart, top100image96: nintysixthyearsong.cover,
        top100title97: nintyseventhyearsong.title, top100artist97: nintyseventhyearsong.artist, top100weeks97: nintyseventhyearsong.position.weeksOnChart, top100image97: nintyseventhyearsong.cover,
        top100title98: nintyeighthyearsong.title, top100artist98: nintyeighthyearsong.artist, top100weeks98: nintyeighthyearsong.position.weeksOnChart, top100image98: nintyeighthyearsong.cover,
        top100title99: nintyninthyearsong.title, top100artist99: nintyninthyearsong.artist, top100weeks99: nintyninthyearsong.position.weeksOnChart, top100image99: nintyninthyearsong.cover,
        top100title100: onehundredthyearsong.title, top100artist100: onehundredthyearsong.artist, top100weeks100: onehundredthyearsong.position.weeksOnChart, top100image100: onehundredthyearsong.cover,
        });
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

  fs.readFile('today.json', (err, data) => {
    console.log("IN READFILE");
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
    fiftyfirstsong = utilities.testfunc51(chart);
    fiftysecondsong = utilities.testfunc52(chart);
    fiftythirdsong = utilities.testfunc53(chart);
    fiftyfourthsong = utilities.testfunc54(chart);
    fiftyfifthsong = utilities.testfunc55(chart);
    fiftysixthsong = utilities.testfunc56(chart);
    fiftyseventhsong = utilities.testfunc57(chart);
    fiftyeighthsong = utilities.testfunc58(chart);
    fiftyninthsong = utilities.testfunc59(chart);
    sixtythsong = utilities.testfunc60(chart);
    sixtyfirstsong = utilities.testfunc61(chart);
    sixtysecondsong = utilities.testfunc62(chart);
    sixtythirdsong = utilities.testfunc63(chart);
    sixtyfourthsong = utilities.testfunc64(chart);
    sixtyfifthsong = utilities.testfunc65(chart);
    sixtysixthsong = utilities.testfunc66(chart);
    sixtyseventhsong = utilities.testfunc67(chart);
    sixtyeighthsong = utilities.testfunc68(chart);
    sixtyninthsong = utilities.testfunc69(chart);
    seventythsong = utilities.testfunc60(chart);
    seventyfirstsong = utilities.testfunc71(chart);
    seventysecondsong = utilities.testfunc72(chart);
    seventythirdsong = utilities.testfunc73(chart);
    seventyfourthsong = utilities.testfunc74(chart);
    seventyfifthsong = utilities.testfunc75(chart);
    seventysixthsong = utilities.testfunc76(chart);
    seventyseventhsong = utilities.testfunc77(chart);
    seventyeighthsong = utilities.testfunc78(chart);
    seventyninthsong = utilities.testfunc79(chart);
    eightythsong = utilities.testfunc80(chart);
    eightyfirstsong = utilities.testfunc81(chart);
    eightysecondsong = utilities.testfunc82(chart);
    eightythirdsong = utilities.testfunc83(chart);
    eightyfourthsong = utilities.testfunc84(chart);
    eightyfifthsong = utilities.testfunc85(chart);
    eightysixthsong = utilities.testfunc86(chart);
    eightyseventhsong = utilities.testfunc87(chart);
    eightyeighthsong = utilities.testfunc88(chart);
    eightyninthsong = utilities.testfunc89(chart);
    nintythsong = utilities.testfunc90(chart);
    nintyfirstsong = utilities.testfunc91(chart);
    nintysecondsong = utilities.testfunc92(chart);
    nintythirdsong = utilities.testfunc93(chart);
    nintyfourthsong = utilities.testfunc94(chart);
    nintyfifthsong = utilities.testfunc95(chart);
    nintysixthsong = utilities.testfunc96(chart);
    nintyseventhsong = utilities.testfunc97(chart);
    nintyeighthsong = utilities.testfunc98(chart);
    nintyninthsong = utilities.testfunc99(chart);
    onehundredthsong = utilities.testfunc100(chart);
  });
  
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

  fs.readFile('today-artists.json', (err, data) => {
    console.log("IN READFILE");
    if (err) throw err;
    let chart = JSON.parse(data);
    topartist = utilities.testfunc(chart);
    var newCover = topartist.cover.replace('53', '180');
    var newCover2 = newCover.replace('53', '180');
    topartist.cover = newCover2;
    topartist2 = utilities.testfunc2(chart);
    var newCover_2 = topartist2.cover.replace('53', '180');
    var newCover2_2 = newCover_2.replace('53', '180');
    topartist2.cover = newCover2_2;
    topartist3 = utilities.testfunc3(chart);
    var newCover_3 = topartist3.cover.replace('53', '180');
    var newCover2_3 = newCover_3.replace('53', '180');
    topartist3.cover = newCover2_3;
    topartist4 = utilities.testfunc4(chart);
    var newCover_4 = topartist4.cover.replace('53', '180');
    var newCover2_4 = newCover_4.replace('53', '180');
    topartist4.cover = newCover2_4;
    topartist5 = utilities.testfunc5(chart);
    var newCover_5 = topartist5.cover.replace('53', '180');
    var newCover2_5 = newCover_5.replace('53', '180');
    topartist5.cover = newCover2_5;
    topartist6 = utilities.testfunc6(chart);
    var newCover_6 = topartist6.cover.replace('53', '180');
    var newCover2_6 = newCover_6.replace('53', '180');
    topartist6.cover = newCover2_6;
    topartist7 = utilities.testfunc7(chart);
    var newCover_7 = topartist7.cover.replace('53', '180');
    var newCover2_7 = newCover_7.replace('53', '180');
    topartist7.cover = newCover2_7;
    topartist8 = utilities.testfunc8(chart);
    var newCover_8 = topartist8.cover.replace('53', '180');
    var newCover2_8 = newCover_8.replace('53', '180');
    topartist8.cover = newCover2_8;
    topartist9 = utilities.testfunc9(chart);
    var newCover_9 = topartist9.cover.replace('53', '180');
    var newCover2_9 = newCover_9.replace('53', '180');
    topartist9.cover = newCover2_9;
    topartist10 = utilities.testfunc10(chart);
    var newCover_10 = topartist10.cover.replace('53', '180');
    var newCover2_10 = newCover_10.replace('53', '180');
    topartist10.cover = newCover2_10;
  })
});
/*
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

*/

// CREATE MONTH JSON
monthDate = getDate(60);
getChart('hot-100', monthDate, (err, chart) => {
  if (err) console.log(err);
  const data = JSON.stringify(chart.songs, null, 2);
  fs.writeFileSync('month.json', data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log('month.json was created!');

  fs.readFile('month.json', (err, data) => {
    console.log("IN READFILE");
    if (err) throw err;
    let chart = JSON.parse(data);
    topmonthsong = utilities.testfunc(chart);
    secondmonthsong = utilities.testfunc2(chart);
    thirdmonthsong = utilities.testfunc3(chart);
    fourthmonthsong = utilities.testfunc4(chart);
    fifthmonthsong = utilities.testfunc5(chart);
    sixthmonthsong = utilities.testfunc6(chart);
    seventhmonthsong = utilities.testfunc7(chart);
    eigthmonthsong = utilities.testfunc8(chart);
    ninthmonthsong = utilities.testfunc9(chart);
    tenthmonthsong = utilities.testfunc10(chart);
    eleventhmonthsong = utilities.testfunc11(chart);
    twelfthmonthsong = utilities.testfunc12(chart);
    thirteenthmonthsong = utilities.testfunc13(chart);
    fourteenthmonthsong = utilities.testfunc14(chart);
    fifteenthmonthsong = utilities.testfunc15(chart);
    sixteenthmonthsong = utilities.testfunc16(chart);
    seventeenthmonthsong = utilities.testfunc17(chart);
    eigthteenthmonthsong = utilities.testfunc18(chart);
    ninteenthmonthsong = utilities.testfunc19(chart);
    twentiethmonthsong = utilities.testfunc20(chart);
    twentyfirstmonthsong = utilities.testfunc21(chart);
    twentysecondmonthsong = utilities.testfunc22(chart);
    twentythirdmonthsong = utilities.testfunc23(chart);
    twentyfourthmonthsong = utilities.testfunc24(chart);
    twentyfifthmonthsong = utilities.testfunc25(chart);
    twentysixthmonthsong = utilities.testfunc26(chart);
    twentyseventhmonthsong = utilities.testfunc27(chart);
    twentyeighthmonthsong = utilities.testfunc28(chart);
    twentyninthmonthsong = utilities.testfunc29(chart);
    thirtiethmonthsong = utilities.testfunc30(chart);
    thirtiefirstmonthsong = utilities.testfunc31(chart);
    thirtiesecondmonthsong = utilities.testfunc32(chart);
    thirtiethirdmonthsong = utilities.testfunc33(chart);
    thirtiefourthmonthsong = utilities.testfunc34(chart);
    thirtiefifthmonthsong = utilities.testfunc35(chart);
    thirtiesixthmonthsong = utilities.testfunc36(chart);
    thirtieseventhmonthsong = utilities.testfunc37(chart);
    thirtieeighthmonthsong = utilities.testfunc38(chart);
    thirtieninthmonthsong = utilities.testfunc39(chart);
    fortiethmonthsong = utilities.testfunc40(chart);
    fortyfirstmonthsong = utilities.testfunc41(chart);
    fortysecondmonthsong = utilities.testfunc42(chart);
    fortythirdmonthsong = utilities.testfunc43(chart);
    fortyfourthmonthsong = utilities.testfunc44(chart);
    fortyfifthmonthsong = utilities.testfunc45(chart);
    fortysixthmonthsong = utilities.testfunc46(chart);
    fortyseventhmonthsong = utilities.testfunc47(chart);
    fortyeighthmonthsong = utilities.testfunc48(chart);
    fortyninthmonthsong = utilities.testfunc49(chart);
    fiftythmonthsong = utilities.testfunc50(chart);
    fiftyfirstmonthsong = utilities.testfunc51(chart);
    fiftysecondmonthsong = utilities.testfunc52(chart);
    fiftythirdmonthsong = utilities.testfunc53(chart);
    fiftyfourthmonthsong = utilities.testfunc54(chart);
    fiftyfifthmonthsong = utilities.testfunc55(chart);
    fiftysixthmonthsong = utilities.testfunc56(chart);
    fiftyseventhmonthsong = utilities.testfunc57(chart);
    fiftyeighthmonthsong = utilities.testfunc58(chart);
    fiftyninthmonthsong = utilities.testfunc59(chart);
    sixtythmonthsong = utilities.testfunc60(chart);
    sixtyfirstmonthsong = utilities.testfunc61(chart);
    sixtysecondmonthsong = utilities.testfunc62(chart);
    sixtythirdmonthsong = utilities.testfunc63(chart);
    sixtyfourthmonthsong = utilities.testfunc64(chart);
    sixtyfifthmonthsong = utilities.testfunc65(chart);
    sixtysixthmonthsong = utilities.testfunc66(chart);
    sixtyseventhmonthsong = utilities.testfunc67(chart);
    sixtyeighthmonthsong = utilities.testfunc68(chart);
    sixtyninthmonthsong = utilities.testfunc69(chart);
    seventythmonthsong = utilities.testfunc60(chart);
    seventyfirstmonthsong = utilities.testfunc71(chart);
    seventysecondmonthsong = utilities.testfunc72(chart);
    seventythirdmonthsong = utilities.testfunc73(chart);
    seventyfourthmonthsong = utilities.testfunc74(chart);
    seventyfifthmonthsong = utilities.testfunc75(chart);
    seventysixthmonthsong = utilities.testfunc76(chart);
    seventyseventhmonthsong = utilities.testfunc77(chart);
    seventyeighthmonthsong = utilities.testfunc78(chart);
    seventyninthmonthsong = utilities.testfunc79(chart);
    eightythmonthsong = utilities.testfunc80(chart);
    eightyfirstmonthsong = utilities.testfunc81(chart);
    eightysecondmonthsong = utilities.testfunc82(chart);
    eightythirdmonthsong = utilities.testfunc83(chart);
    eightyfourthmonthsong = utilities.testfunc84(chart);
    eightyfifthmonthsong = utilities.testfunc85(chart);
    eightysixthmonthsong = utilities.testfunc86(chart);
    eightyseventhmonthsong = utilities.testfunc87(chart);
    eightyeighthmonthsong = utilities.testfunc88(chart);
    eightyninthmonthsong = utilities.testfunc89(chart);
    nintythmonthsong = utilities.testfunc90(chart);
    nintyfirstmonthsong = utilities.testfunc91(chart);
    nintysecondmonthsong = utilities.testfunc92(chart);
    nintythirdmonthsong = utilities.testfunc93(chart);
    nintyfourthmonthsong = utilities.testfunc94(chart);
    nintyfifthmonthsong = utilities.testfunc95(chart);
    nintysixthmonthsong = utilities.testfunc96(chart);
    nintyseventhmonthsong = utilities.testfunc97(chart);
    nintyeighthmonthsong = utilities.testfunc98(chart);
    nintyninthmonthsong = utilities.testfunc99(chart);
    onehundredthmonthsong = utilities.testfunc100(chart);
    });
});


/*
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

*/
// CREATE HALFYEAR JSON
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

  fs.readFile('half-year.json', (err, data) => {
    console.log("IN READFILE");
    if (err) throw err;
    let chart = JSON.parse(data);
    tophalfyearsong = utilities.testfunc(chart);
    secondhalfyearsong = utilities.testfunc2(chart);
    thirdhalfyearsong = utilities.testfunc3(chart);
    fourthhalfyearsong = utilities.testfunc4(chart);
    fifthhalfyearsong = utilities.testfunc5(chart);
    sixthhalfyearsong = utilities.testfunc6(chart);
    seventhhalfyearsong = utilities.testfunc7(chart);
    eigthhalfyearsong = utilities.testfunc8(chart);
    ninthhalfyearsong = utilities.testfunc9(chart);
    tenthhalfyearsong = utilities.testfunc10(chart);
    eleventhhalfyearsong = utilities.testfunc11(chart);
    twelfthhalfyearsong = utilities.testfunc12(chart);
    thirteenthhalfyearsong = utilities.testfunc13(chart);
    fourteenthhalfyearsong = utilities.testfunc14(chart);
    fifteenthhalfyearsong = utilities.testfunc15(chart);
    sixteenthhalfyearsong = utilities.testfunc16(chart);
    seventeenthhalfyearsong = utilities.testfunc17(chart);
    eigthteenthhalfyearsong = utilities.testfunc18(chart);
    ninteenthhalfyearsong = utilities.testfunc19(chart);
    twentiethhalfyearsong = utilities.testfunc20(chart);
    twentyfirsthalfyearsong = utilities.testfunc21(chart);
    twentysecondhalfyearsong = utilities.testfunc22(chart);
    twentythirdhalfyearsong = utilities.testfunc23(chart);
    twentyfourthhalfyearsong = utilities.testfunc24(chart);
    twentyfifthhalfyearsong = utilities.testfunc25(chart);
    twentysixthhalfyearsong = utilities.testfunc26(chart);
    twentyseventhhalfyearsong = utilities.testfunc27(chart);
    twentyeighthhalfyearsong = utilities.testfunc28(chart);
    twentyninthhalfyearsong = utilities.testfunc29(chart);
    thirtiethhalfyearsong = utilities.testfunc30(chart);
    thirtiefirsthalfyearsong = utilities.testfunc31(chart);
    thirtiesecondhalfyearsong = utilities.testfunc32(chart);
    thirtiethirdhalfyearsong = utilities.testfunc33(chart);
    thirtiefourthhalfyearsong = utilities.testfunc34(chart);
    thirtiefifthhalfyearsong = utilities.testfunc35(chart);
    thirtiesixthhalfyearsong = utilities.testfunc36(chart);
    thirtieseventhhalfyearsong = utilities.testfunc37(chart);
    thirtieeighthhalfyearsong = utilities.testfunc38(chart);
    thirtieninthhalfyearsong = utilities.testfunc39(chart);
    fortiethhalfyearsong = utilities.testfunc40(chart);
    fortyfirsthalfyearsong = utilities.testfunc41(chart);
    fortysecondhalfyearsong = utilities.testfunc42(chart);
    fortythirdhalfyearsong = utilities.testfunc43(chart);
    fortyfourthhalfyearsong = utilities.testfunc44(chart);
    fortyfifthhalfyearsong = utilities.testfunc45(chart);
    fortysixthhalfyearsong = utilities.testfunc46(chart);
    fortyseventhhalfyearsong = utilities.testfunc47(chart);
    fortyeighthhalfyearsong = utilities.testfunc48(chart);
    fortyninthhalfyearsong = utilities.testfunc49(chart);
    fiftythhalfyearsong = utilities.testfunc50(chart);
    fiftyfirsthalfyearsong = utilities.testfunc51(chart);
    fiftysecondhalfyearsong = utilities.testfunc52(chart);
    fiftythirdhalfyearsong = utilities.testfunc53(chart);
    fiftyfourthhalfyearsong = utilities.testfunc54(chart);
    fiftyfifthhalfyearsong = utilities.testfunc55(chart);
    fiftysixthhalfyearsong = utilities.testfunc56(chart);
    fiftyseventhhalfyearsong = utilities.testfunc57(chart);
    fiftyeighthhalfyearsong = utilities.testfunc58(chart);
    fiftyninthhalfyearsong = utilities.testfunc59(chart);
    sixtythhalfyearsong = utilities.testfunc60(chart);
    sixtyfirsthalfyearsong = utilities.testfunc61(chart);
    sixtysecondhalfyearsong = utilities.testfunc62(chart);
    sixtythirdhalfyearsong = utilities.testfunc63(chart);
    sixtyfourthhalfyearsong = utilities.testfunc64(chart);
    sixtyfifthhalfyearsong = utilities.testfunc65(chart);
    sixtysixthhalfyearsong = utilities.testfunc66(chart);
    sixtyseventhhalfyearsong = utilities.testfunc67(chart);
    sixtyeighthhalfyearsong = utilities.testfunc68(chart);
    sixtyninthhalfyearsong = utilities.testfunc69(chart);
    seventythhalfyearsong = utilities.testfunc60(chart);
    seventyfirsthalfyearsong = utilities.testfunc71(chart);
    seventysecondhalfyearsong = utilities.testfunc72(chart);
    seventythirdhalfyearsong = utilities.testfunc73(chart);
    seventyfourthhalfyearsong = utilities.testfunc74(chart);
    seventyfifthhalfyearsong = utilities.testfunc75(chart);
    seventysixthhalfyearsong = utilities.testfunc76(chart);
    seventyseventhhalfyearsong = utilities.testfunc77(chart);
    seventyeighthhalfyearsong = utilities.testfunc78(chart);
    seventyninthhalfyearsong = utilities.testfunc79(chart);
    eightythhalfyearsong = utilities.testfunc80(chart);
    eightyfirsthalfyearsong = utilities.testfunc81(chart);
    eightysecondhalfyearsong = utilities.testfunc82(chart);
    eightythirdhalfyearsong = utilities.testfunc83(chart);
    eightyfourthhalfyearsong = utilities.testfunc84(chart);
    eightyfifthhalfyearsong = utilities.testfunc85(chart);
    eightysixthhalfyearsong = utilities.testfunc86(chart);
    eightyseventhhalfyearsong = utilities.testfunc87(chart);
    eightyeighthhalfyearsong = utilities.testfunc88(chart);
    eightyninthhalfyearsong = utilities.testfunc89(chart);
    nintythhalfyearsong = utilities.testfunc90(chart);
    nintyfirsthalfyearsong = utilities.testfunc91(chart);
    nintysecondhalfyearsong = utilities.testfunc92(chart);
    nintythirdhalfyearsong = utilities.testfunc93(chart);
    nintyfourthhalfyearsong = utilities.testfunc94(chart);
    nintyfifthhalfyearsong = utilities.testfunc95(chart);
    nintysixthhalfyearsong = utilities.testfunc96(chart);
    nintyseventhhalfyearsong = utilities.testfunc97(chart);
    nintyeighthhalfyearsong = utilities.testfunc98(chart);
    nintyninthhalfyearsong = utilities.testfunc99(chart);
    onehundredthhalfyearsong = utilities.testfunc100(chart);
  });
});

/*
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

*/
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

  fs.readFile('year.json', (err, data) => {
    console.log("IN READFILE");
    if (err) throw err;
    let chart = JSON.parse(data);
    topyearsong = utilities.testfunc(chart);
    secondyearsong = utilities.testfunc2(chart);
    thirdyearsong = utilities.testfunc3(chart);
    fourthyearsong = utilities.testfunc4(chart);
    fifthyearsong = utilities.testfunc5(chart);
    sixthyearsong = utilities.testfunc6(chart);
    seventhyearsong = utilities.testfunc7(chart);
    eigthyearsong = utilities.testfunc8(chart);
    ninthyearsong = utilities.testfunc9(chart);
    tenthyearsong = utilities.testfunc10(chart);
    eleventhyearsong = utilities.testfunc11(chart);
    twelfthyearsong = utilities.testfunc12(chart);
    thirteenthyearsong = utilities.testfunc13(chart);
    fourteenthyearsong = utilities.testfunc14(chart);
    fifteenthyearsong = utilities.testfunc15(chart);
    sixteenthyearsong = utilities.testfunc16(chart);
    seventeenthyearsong = utilities.testfunc17(chart);
    eigthteenthyearsong = utilities.testfunc18(chart);
    ninteenthyearsong = utilities.testfunc19(chart);
    twentiethyearsong = utilities.testfunc20(chart);
    twentyfirstyearsong = utilities.testfunc21(chart);
    twentysecondyearsong = utilities.testfunc22(chart);
    twentythirdyearsong = utilities.testfunc23(chart);
    twentyfourthyearsong = utilities.testfunc24(chart);
    twentyfifthyearsong = utilities.testfunc25(chart);
    twentysixthyearsong = utilities.testfunc26(chart);
    twentyseventhyearsong = utilities.testfunc27(chart);
    twentyeighthyearsong = utilities.testfunc28(chart);
    twentyninthyearsong = utilities.testfunc29(chart);
    thirtiethyearsong = utilities.testfunc30(chart);
    thirtiefirstyearsong = utilities.testfunc31(chart);
    thirtiesecondyearsong = utilities.testfunc32(chart);
    thirtiethirdyearsong = utilities.testfunc33(chart);
    thirtiefourthyearsong = utilities.testfunc34(chart);
    thirtiefifthyearsong = utilities.testfunc35(chart);
    thirtiesixthyearsong = utilities.testfunc36(chart);
    thirtieseventhyearsong = utilities.testfunc37(chart);
    thirtieeighthyearsong = utilities.testfunc38(chart);
    thirtieninthyearsong = utilities.testfunc39(chart);
    fortiethyearsong = utilities.testfunc40(chart);
    fortyfirstyearsong = utilities.testfunc41(chart);
    fortysecondyearsong = utilities.testfunc42(chart);
    fortythirdyearsong = utilities.testfunc43(chart);
    fortyfourthyearsong = utilities.testfunc44(chart);
    fortyfifthyearsong = utilities.testfunc45(chart);
    fortysixthyearsong = utilities.testfunc46(chart);
    fortyseventhyearsong = utilities.testfunc47(chart);
    fortyeighthyearsong = utilities.testfunc48(chart);
    fortyninthyearsong = utilities.testfunc49(chart);
    fiftythyearsong = utilities.testfunc50(chart);
    fiftyfirstyearsong = utilities.testfunc51(chart);
    fiftysecondyearsong = utilities.testfunc52(chart);
    fiftythirdyearsong = utilities.testfunc53(chart);
    fiftyfourthyearsong = utilities.testfunc54(chart);
    fiftyfifthyearsong = utilities.testfunc55(chart);
    fiftysixthyearsong = utilities.testfunc56(chart);
    fiftyseventhyearsong = utilities.testfunc57(chart);
    fiftyeighthyearsong = utilities.testfunc58(chart);
    fiftyninthyearsong = utilities.testfunc59(chart);
    sixtythyearsong = utilities.testfunc60(chart);
    sixtyfirstyearsong = utilities.testfunc61(chart);
    sixtysecondyearsong = utilities.testfunc62(chart);
    sixtythirdyearsong = utilities.testfunc63(chart);
    sixtyfourthyearsong = utilities.testfunc64(chart);
    sixtyfifthyearsong = utilities.testfunc65(chart);
    sixtysixthyearsong = utilities.testfunc66(chart);
    sixtyseventhyearsong = utilities.testfunc67(chart);
    sixtyeighthyearsong = utilities.testfunc68(chart);
    sixtyninthyearsong = utilities.testfunc69(chart);
    seventythyearsong = utilities.testfunc60(chart);
    seventyfirstyearsong = utilities.testfunc71(chart);
    seventysecondyearsong = utilities.testfunc72(chart);
    seventythirdyearsong = utilities.testfunc73(chart);
    seventyfourthyearsong = utilities.testfunc74(chart);
    seventyfifthyearsong = utilities.testfunc75(chart);
    seventysixthyearsong = utilities.testfunc76(chart);
    seventyseventhyearsong = utilities.testfunc77(chart);
    seventyeighthyearsong = utilities.testfunc78(chart);
    seventyninthyearsong = utilities.testfunc79(chart);
    eightythyearsong = utilities.testfunc80(chart);
    eightyfirstyearsong = utilities.testfunc81(chart);
    eightysecondyearsong = utilities.testfunc82(chart);
    eightythirdyearsong = utilities.testfunc83(chart);
    eightyfourthyearsong = utilities.testfunc84(chart);
    eightyfifthyearsong = utilities.testfunc85(chart);
    eightysixthyearsong = utilities.testfunc86(chart);
    eightyseventhyearsong = utilities.testfunc87(chart);
    eightyeighthyearsong = utilities.testfunc88(chart);
    eightyninthyearsong = utilities.testfunc89(chart);
    nintythyearsong = utilities.testfunc90(chart);
    nintyfirstyearsong = utilities.testfunc91(chart);
    nintysecondyearsong = utilities.testfunc92(chart);
    nintythirdyearsong = utilities.testfunc93(chart);
    nintyfourthyearsong = utilities.testfunc94(chart);
    nintyfifthyearsong = utilities.testfunc95(chart);
    nintysixthyearsong = utilities.testfunc96(chart);
    nintyseventhyearsong = utilities.testfunc97(chart);
    nintyeighthyearsong = utilities.testfunc98(chart);
    nintyninthyearsong = utilities.testfunc99(chart);
    onehundredthyearsong = utilities.testfunc100(chart);
  });
});

/*
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


app.listen(8080);
console.log('listening to port 8080');