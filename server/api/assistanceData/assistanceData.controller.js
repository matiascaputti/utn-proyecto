'use strict';

var assistanceDataService = require('./assistanceData.service');

// Get list of assistanceDatas
exports.index = function(req, res) {
    assistanceDataService.getAll(req.query.querystring)
        .then(function (assistanceDatas) {
            res.status(200).json(assistanceDatas);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

// Get a single assistanceData
exports.detail = function(req, res) {
    assistanceDataService.getDetail(req.params.id)
        .then(function (assistanceDataDetail) {
            res.json(assistanceDataDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

// Creates a new assistanceData in the DB.
exports.create = function(req, res) {
    assistanceDataService.create(req.body)
      .then(function (assistanceData) {
          res.status(201).json(assistanceData)
      }, function (err) {
          console.error(err);
          handleError(res, err);
      });
};
// Updates an existing assistanceData in the DB.
exports.update = function(req, res) {
    assistanceDataService.update(req.body)
      .then(function (assistanceData) {
          res.status(200).json(assistanceData);
      }, function (err) {
          console.error(err);
          handleError(res, err);
      });
};

// Deletes a assistanceData from the DB.
exports.destroy = function(req, res) {
    //assistanceDataService.logicalDelete(req.params.id)
    assistanceDataService.phisicalDelete(req.params.id)
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
