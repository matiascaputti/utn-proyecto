'use strict';

var AFash = require('./aFash.model');
// var IDCategory = require('../sort/sortCategory.model');
// var IDSortSubCategory = require('../sort/sortSubCategory.model');
// var MesurmentUnit = require('../mesurment/mesurment.model');
// var IDOperation = require('../plant/plantPartsSectionsOperations.model');
var AFashMaterials = require('./aFashMaterials.model');
// var IDSort = require('../sort/sort.model');
var operations = {};

operations.getAll = function () {
	return AFash.find().populate('IDCategory IDSortSubCategory IDMUnit IDOperation materials.IDSort')
        .lean().exec();
}

operations.getDetail = function (aFashId) {
    return AFash.findById(aFashId).populate('IDCategory IDSortSubCategory IDMUnit IDOperation materials.IDSort')
        .lean().exec();
}
module.exports = operations;
