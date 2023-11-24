require('dotenv').config();
const express = require('express');
const app = express();

const USER={
    "name":"Priya",
    "age":25,
}

app.get('/', function (req, res) {
  res.send('Hello World');
})
app.get('/profile', function (req, res) {
    res.send('Hello From Profile');
  })
  app.get('/jsonres', function (req, res) {
    res.json({ user: 'geek' });
});
app.get('/jsonexample', function (req, res) {
    res.json(USER);
});
app.get('/profile/:user', function (req, res) {
    res.send( "Hello from "+req.params.user);
  })


app.listen(4000);