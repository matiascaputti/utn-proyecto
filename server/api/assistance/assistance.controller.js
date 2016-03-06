'use strict';

var assistanceService = require('./assistance.service');

// Get list of assistances
exports.index = function(req, res) {
    assistanceService.getAll(req.query.querystring)
        .then(function (assistances) {
            res.status(200).json(assistances);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

// Get a single assistance
exports.detail = function(req, res) {
    assistanceService.getDetail(req.params.id)
        .then(function (assistanceDetail) {
            res.json(assistanceDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

// Creates a new assistance in the DB.
exports.create = function(req, res) {
    assistanceService.create(req.body)
      .then(function (assistance) {
          res.status(201).json(assistance)
      }, function (err) {
          console.error(err);
          handleError(res, err);
      });
};
// Updates an existing assistance in the DB.
exports.update = function(req, res) {
    assistanceService.update(req.body)
      .then(function (assistance) {
          res.status(200).json(assistance);
      }, function (err) {
          console.error(err);
          handleError(res, err);
      });
};

// Deletes a assistance from the DB.
exports.destroy = function(req, res) {
    //assistanceService.logicalDelete(req.params.id)
    assistanceService.phisicalDelete(req.params.id)
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
