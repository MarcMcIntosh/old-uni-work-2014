/**
* Premises-managment.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	schema: true,

  attributes: {

  	name: {
  		type: 'string',
  		required: true
  	},

  	// location: {
  	// 	type: 'json',
  	// 	required: true
  	// },

  	address: {
  		type: 'string',
  		required: true
  	},

  	marker: {
  		model: 'marker',
  		required: true
  	}
  }
};

