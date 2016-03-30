/**
 * PortfolioController
 *
 * @description :: Server-side logic for managing portfolios
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	index : function (req, res) {
    	res.view('portfolios/event-man',{
    		layout: 'layout-portfolios'
    	});
    },
};

