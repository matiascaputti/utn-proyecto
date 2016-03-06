'use strict';

var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var Schema = mongoose.Schema;

var course = new Schema({
    year: { type: String },
    division: { type: String },
    students: [{type: Schema.Types.Mixed }]
});

course.plugin(deepPopulate, {});

module.exports = mongoose.model('Course', course);