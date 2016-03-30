/**
* Qg.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	schema: true,

  attributes: {

  	address: {
  		type: 'text'
  	},


    lng : 'string',
    lat : 'string',
// you'll need to figure out how to combine these somother time


    syntax : {
      type : 'string',
      required : true
    },

    icon : {
      type : 'string',
      required : true
    },

    prefix : {
      type : 'string',
      required : true
    }

  }
};

