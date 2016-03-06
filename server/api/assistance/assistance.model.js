'use strict';

var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var Schema = mongoose.Schema;

var assistance = new Schema({
    course: {type: Schema.Types.Mixed },
    preceptor: {type: Schema.Types.Mixed },
    students: {type: Schema.Types.Mixed }
});

assistance.plugin(deepPopulate, {});

module.exports = mongoose.model('Assistance', assistance);