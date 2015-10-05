'use strict';

var aFashService = require('./aFash.service');

exports.index = function(req, res) {
	aFashService.getAll()
    	.then(function (fashes) {
        	return res.status(200).json(fashes);
	    }, function (err) {
	    	handleError(res, err);
	    });
};

exports.detail = function(req, res) {
	aFashService.getDetail(req.params.id)
		.then(function (aFashDetail) {
			res.json(aFashDetail);
		}, function (err) {
	  		console.error(err);
	    	handleError(res, err);
	    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
