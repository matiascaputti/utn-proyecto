'use strict';

var studentService = require('./student.service');

// Get list of students
exports.index = function(req, res) {
    studentService.getAll(req.query.querystring)
        .then(function (students) {
            res.status(200).json(students);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

// Get a single student
exports.detail = function(req, res) {
    studentService.getDetail(req.params.id)
        .then(function (studentDetail) {
            res.json(studentDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

// Creates a new student in the DB.
exports.create = function(req, res) {
    studentService.create(req.body)
      .then(function (student) {
          res.status(201).json(student)
      }, function (err) {
          console.error(err);
          handleError(res, err);
      });
};
// Updates an existing student in the DB.
exports.update = function(req, res) {
    studentService.update(req.body)
      .then(function (student) {
          res.status(200).json(student);
      }, function (err) {
          console.error(err);
          handleError(res, err);
      });
};

// Deletes a student from the DB.
exports.destroy = function(req, res) {
    //studentService.logicalDelete(req.params.id)
    studentService.phisicalDelete(req.params.id)
      .then(function () {
          res.status(204).send('No Content');
      }, function (err) {
          console.error(err);
          handleError(res, err);
      });
};

function handleError(res, err) {
    return res.status(500).send(err);
}