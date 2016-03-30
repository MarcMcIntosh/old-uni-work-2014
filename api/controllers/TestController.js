/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	dc: function (req, res) {
        res.view('tests/dcjs', {
            layout: 'layout-test'
        });
    },
	
};

