'use strict';

//in this module, we will manage all of the routes for the note resource!
const Router = require('express').Router;
//invoke .json to parse our request out!
const jsonParser = require('body-parser').json();

//create a router for every endpoint we have, then export our methods
//this has all the methods available to it.
const noteRouter = module.exports = new Router();
const Note = require('../model/note.js');

//register our routes
//json parser makes our json'ed res.body(sent in json over the wire) into json (accumulates onto the body)
noteRouter.post('/api/notes', jsonParser, function(req, res, next){
  console.log(req.body.name, '   => req.body.name');
  return new Note(req.body.name, req.body.content).save()
  .then(note => {
    console.log(note, ' ===> note');
    //send back to user
    res.json(note);
  }).catch(next);
  //save as .catch(err => next(err));
});
