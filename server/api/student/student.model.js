'use strict';

var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var Schema = mongoose.Schema;

var student = new Schema({
    firstname: { type: String, lowercase: true },
    lastname: { type: String, lowercase: true },
    mail1: { type: String },
    mail2: { type: String },
    birth: { type: String },
    dni: { type: String },
    address: { type: String },
    telephone: { type: String },
    mobile: { type: String },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }
});

student.plugin(deepPopulate, {});

module.exports = mongoose.model('Student', student);