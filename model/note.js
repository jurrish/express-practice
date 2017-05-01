'use strict';

const uuid = require('node-uuid');

module.exports = function(name, content){
  this.name = name;
  this.content = content;
  this.id = uuid.v4();
};
