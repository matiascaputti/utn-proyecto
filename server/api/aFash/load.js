'use strict';

var loadTable = require('../commons');
var AFash = require('./aFash.model');
var AFashMaterials = require('./aFashMaterials.model');

var dropCollection = true;

loadTable({	clean: dropCollection,
	  		jsonFile: 'aFash/tbA_FASH.json',
	  		model: AFash});

loadTable({	clean: dropCollection,
	  		jsonFile: 'aFash/tbA_FASHMaterials.json',
	  		model: AFashMaterials});