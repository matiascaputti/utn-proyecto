'use strict';

var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var Schema = mongoose.Schema;

var assistanceData = new Schema({
    assistance: {type: Schema.Types.Mixed},
    student: {type: Schema.Types.Mixed },
    status: {type: Boolean, default: false},
    signed: {type: Boolean, default: false},
    justified: {type: Boolean, default: false}
});

assistanceData.plugin(deepPopulate, {});

module.exports = mongoose.model('AssistanceData', assistanceData);