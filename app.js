var http = require('http');
const { getChart } = require('./billboard-top-100.js');

var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('head ass')
});

getChart('hot-100', (err, chart) => {
    if (err) console.log(err);

    console.log(chart.songs); 
    
  });
  
server.listen(8080, '127.0.0.1');
console.log('listening to port 8080');