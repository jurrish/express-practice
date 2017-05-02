'use strict';
const storage = require('../lib/storage.js');
const uuid = require('node-uuid');
const createError = require('http-errors');

const Note = module.exports = function(name, content){
  this.name = name;
  this.content = content;
  this.id = uuid.v4();
};

Note.fetchAll = function(){
  return storage.availIDs('notes');
};

//static method (works on the constructor)
Note.findById = function(id){
  return storage.fetchItem('notes', id);
};

//instance method (works on the instance of the constructor)
Note.prototype.deleteById = function(id){
  return storage.deleteItem('notes', id);
};

//new Note({//pass in some options}).save();
//this will save a returned promise from mongoDB
Note.prototype.save = function(){
  console.log(this, '   => this');
  if(!this.name || !this.content)
    return Promise.reject(createError(400, 'expected name and content'));
  return storage.createItem('notes', this);
};
