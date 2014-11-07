'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  color:String,
  posX: Number,
  posY: Number
});

module.exports = mongoose.model('Thing', ThingSchema);
