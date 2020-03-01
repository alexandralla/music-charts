var http = require('http');
var fs = require('fs');
const { getChart } = require('./billboard-top-100.js');

var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url)

    //outputsjson
    res.writeHead(200, {'Content-Type': 'application/json'});
    getChart('hot-100', (err, chart) => {
      if (err) console.log(err);
      
      console.log(chart.songs[0]);

      var roddyRich = chart.songs[0];
      console.log(JSON.stringify(roddyRich));

      // var data = chart.songs;
      // console.log(chart.songs[0].artist);
      // console.log(JSON.stringify(data));
      res.end(JSON.stringify(chart.songs));

    });

    //outputs html
    //res.writeHead(200, {'Content-Type': 'text/html'});
    // var myReadStream = fs.createReadStream(__dirname + '/headass.html', 'utf8');
    // myReadStream.pipe(res);
    
    // prints inputed text to server
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('head ass')  //send data back into client, expects string or buffer
});



getChart('hot-100', (err, chart) => {
    if (err) console.log(err);
    // console.log(chart.songs); 
});


function done() {
  // const { getChart } = require('./billboard-top-100.js');
  // var roddyRich;
  //   getChart('hot-100', (err, chart) => {
  //     if (err) console.log(err);
  //     roddyRich = chart.songs[0];
  //   });
  return '{"rank":1,"title":"The Box","artist":"Roddy Ricch","cover":"https://charts-static.billboard.com/img/2019/12/roddy-ricch-eqp-the-box-2k7-53x53.jpg","position":{"positionLastWeek":1,"peakPosition":1,"weeksOnChart":11}}';
}
  
server.listen(8080, '127.0.0.1');
console.log('listening to port 8080');