/**
* Icons.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	schema: true,

  attributes: {

  		prefix : { type: 'string', required: true},
  		icon : { type: 'string', required: true},
  		syntax : { type: 'string', required: true}
  }
};