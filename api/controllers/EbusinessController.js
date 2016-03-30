/**
 * EbusinessController
 *
 * @description :: Server-side logic for managing ebusinesses
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	index : function (req, res) {
    	res.view('ebusiness/index',{
    		layout: 'layout-ebusiness',
    	});
    },


    all : function (req, res) {
        res.view('ebusiness/all',{
            layout: 'layout-ebusiness',
        });
    },

    plan : function (req, res) {
        res.view('ebusiness/plan',{
            layout: 'layout-ebusiness',
        });
    },

    canvas : function (req, res) {
        res.view('ebusiness/modelcanvas',{
            layout: 'layout-impress',
        });
    },
	
};

