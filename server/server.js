const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs')
const https = require('https')

var options = {
    key: fs.readFileSync('./server/ssl/key.pem'),
    cert: fs.readFileSync('./server/ssl/cert.pem')
}

app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

var httpsServer = https.createServer(options, app);

app.listen(80, () => {
    console.log("Productive Frontend running on port 80 (http)")
});

httpsServer.listen(443, () => {
    console.log("Productive Frontend running on port 443 (https)")
})