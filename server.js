const express = require('express');
const app = express();
const path = require('path');
const https = require('https');
const link = 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json';

let payload;

https.get(link, (resp) => {
  let data = '';
 
  resp.on('data', (chunk) => {
    data += chunk;
  });
 
  resp.on('end', () => {
    payload = data;
    // console.log(payload)
  });
 
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public'), 'index.html')
  res.end()
})

app.get('/api', (req, res) => {
  res.send(payload)
})

app.listen(3000, () => console.log('WS-challenge listening on port 3000!'))