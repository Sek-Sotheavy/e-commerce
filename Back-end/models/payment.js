"use strict"
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var paymentSchema = new mongoose.Schema({
  title: String,
  price: Number,
  payment: {
    type: Schema.Types.ObjectId,
    ref: 'Payments'
  },
  
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  
}, {
  timestamps: true,
});

paymentSchema.index({ title: 'text' });
var Posts = mongoose.model('Payments', paymentSchema);
module.exports = Posts;