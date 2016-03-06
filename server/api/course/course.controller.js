'use strict';

var courseService = require('./course.service');

// Get list of courses
exports.index = function(req, res) {
    courseService.getAll(req.query.querystring)
        .then(function (courses) {
            res.status(200).json(courses);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

// Get a single course
exports.detail = function(req, res) {
    courseService.getDetail(req.params.id)
        .then(function (courseDetail) {
            res.json(courseDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

// Creates a new course in the DB.
exports.create = function(req, res) {
    courseService.create(req.body)
      .then(function (course) {
          res.status(201).json(course)
      }, function (err) {
          console.error(err);
          handleError(res, err);
      });
};
// Updates an existing course in the DB.
exports.update = function(req, res) {
    courseService.update(req.body)
      .then(function (course) {
          res.status(200).json(course);
      }, function (err) {
          console.error(err);
          handleError(res, err);
      });
};

// Deletes a course from the DB.
exports.destroy = function(req, res) {
    //courseService.logicalDelete(req.params.id)
    courseService.phisicalDelete(req.params.id)
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
