'use strict';

var _ = require('lodash');
var Course = require('./course.model');
var operations = {};

operations.getAll = function (querystring) {
    var query;
    if (querystring) {
        query = querystring;
    } else {
        query = ''
    }
    var result = require('mongo-queryfilter').filter(query)
    return Course.find(result)
        .deepPopulate('insurances specialities clinicHistoryField')
        ;
}

operations.getDetail = function (courseId) {
    return Course.findById(courseId)
        ;
}

operations.create = function (course) {
    return Course.create(course);
}

operations.update = function (course) {
    var id = course._id;
    if (course._id) { delete course._id; }
    return Course.findOneAndUpdate({"_id": id}, course, {"new": true})
        .then( function(result) {
            return result;
        })
}

operations.logicalDelete = function(courseId) {
    return Course.findById(courseId)
        .then( function(course) {
            course.available = false;
            return course.save();
        })
}

operations.phisicalDelete = function(courseId) {
    return Course.remove({_id: courseId});
}

module.exports = operations;
