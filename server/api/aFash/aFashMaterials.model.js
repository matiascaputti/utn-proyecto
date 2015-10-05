'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var aFashMaterials = new Schema({
	'IDA_FASHMaterials': { type: String, required: true, unique: true },
	'IDA_FASH': { type: Schema.Types.String, ref: 'AFash' },
	'IDSort': { type: Schema.Types.String, ref: 'Sort' },
	'Sxolia': String,
	'IDA_FASHQuantity': Number,
	'IDA_FASHLoose': Number,
	'IDA_FASHRecipe': Boolean,
	'IDA_FASHDelete': Boolean
});

aFashMaterials.plugin(populatePlugin, {
    IDSort: {
        ref: 'Sort',
        foreignKey: 'IDSort',
        localKey: 'IDSort',
        singular: true
    }
});

module.exports = mongoose.model('AFashMaterials', aFashMaterials);
