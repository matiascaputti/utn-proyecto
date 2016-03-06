'use strict';

var _ = require('lodash');
var Assistance = require('./assistance.model');
var operations = {};

operations.getAll = function (querystring) {
    var query;
    if (querystring) {
        query = querystring;
    } else {
        query = ''
    }
    var result = require('mongo-queryfilter').filter(query)
    return Assistance.find(result)
        .deepPopulate('insurances specialities clinicHistoryField')
        ;
}

operations.getDetail = function (assistanceId) {
    return Assistance.findById(assistanceId)
        ;
}

operations.create = function (assistance) {
    return Assistance.create(assistance);
}

operations.update = function (assistance) {
    var id = assistance._id;
    if (assistance._id) { delete assistance._id; }
    return Assistance.findOneAndUpdate({"_id": id}, assistance, {"new": true})
        .then( function(result) {
            return result;
        })
}

operations.logicalDelete = function(assistanceId) {
    return Assistance.findById(assistanceId)
        .then( function(assistance) {
            assistance.available = false;
            return assistance.save();
        })
}

operations.phisicalDelete = function(assistanceId) {
    return Assistance.remove({_id: assistanceId});
}

module.exports = operations;
