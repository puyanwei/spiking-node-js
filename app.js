let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/profile/:name', (req, res) => {
  let data = {
    age: 222,
    job: 'old man',
    hobbies: ['being old', 'old walks', 'old nostagia']
  };
  res.render('profile', { name: req.params.name, data: data });
});

app.listen(3000);
