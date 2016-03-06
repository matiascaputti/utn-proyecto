'use strict';

var _ = require('lodash');
var Student = require('./student.model');
var operations = {};

operations.getAll = function (querystring) {
    var query;
    if (querystring) {
        query = querystring;
    } else {
        query = ''
    }
    var result = require('mongo-queryfilter').filter(query)
    return Student.find(result)
        .deepPopulate('insurances specialities clinicHistoryField')
        ;
}

operations.getDetail = function (studentId) {
    return Student.findById(studentId)
        ;
}

operations.create = function (student) {
    return Student.create(student);
}

operations.update = function (student) {
    var id = student._id;
    if (student._id) { delete student._id; }
    return Student.findOneAndUpdate({"_id": id}, student, {"new": true})
        .then( function(result) {
            return result;
        })
}

operations.logicalDelete = function(studentId) {
    return Student.findById(studentId)
        .then( function(student) {
            student.available = false;
            return student.save();
        })
}

operations.phisicalDelete = function(studentId) {
    return Student.remove({_id: studentId});
}

module.exports = operations;
