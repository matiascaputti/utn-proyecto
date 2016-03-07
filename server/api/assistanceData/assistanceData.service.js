'use strict';

var _ = require('lodash');
var AssistanceData = require('./assistanceData.model');
var operations = {};

operations.getAll = function (querystring) {
    var query;
    if (querystring) {
        query = querystring;
    } else {
        query = ''
    }
    var result = require('mongo-queryfilter').filter(query)
    return AssistanceData.find(result)
        .deepPopulate('insurances specialities clinicHistoryField')
        ;
}

operations.getDetail = function (assistanceDataId) {
    return AssistanceData.findById(assistanceDataId)
        ;
}

operations.create = function (assistanceData) {
    return AssistanceData.create(assistanceData);
}

operations.update = function (assistanceData) {
    var id = assistanceData._id;
    if (assistanceData._id) { delete assistanceData._id; }
    return AssistanceData.findOneAndUpdate({"_id": id}, assistanceData, {"new": true})
        .then( function(result) {
            return result;
        })
}

operations.logicalDelete = function(assistanceDataId) {
    return AssistanceData.findById(assistanceDataId)
        .then( function(assistanceData) {
            assistanceData.available = false;
            return assistanceData.save();
        })
}

operations.phisicalDelete = function(assistanceDataId) {
    return AssistanceData.remove({_id: assistanceDataId});
}

module.exports = operations;
