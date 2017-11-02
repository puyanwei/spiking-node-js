var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('welcome to the my awesome webpage');
});

app.get('/contact', (req, res) => {
  res.send('contact me for some swaaaag');
});

app.get('/profile/:id', (req, res) => {
  res.send('You requested to see id profile ' + req.params.id);
});

app.listen(3000);
