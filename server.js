'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/api/notes', function(req, res, next){
  //returns an array of ALL notes
  console.log('req.url: ', req.url);
  console.log('req.query: ', req.query);
  console.log('req.path: ', req.path);
  console.log('req.params: ', req.params);
  //res.send the notes back
  res.send('hello world');
});

app.get('/api/notes/:id', function(req, res, next){
  //if i hit this route /api/notes/1234/lulwat
  //req.params looks like {id:1234, name:lulwat};
  //req.params is useful if you just need an id or one thing to configure, NOT A LOT OF configurations! (if youre doing that, use querystring)
  //THIS WOULD RETRIEVE A SPECIFIC RESOURCE/NOTE by their ID property
  console.log('req.url : ', req.url);
  console.log('req.path : ', req.path);
  console.log('req.params: ', req.params);
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`server up on: ${PORT}`);
});
