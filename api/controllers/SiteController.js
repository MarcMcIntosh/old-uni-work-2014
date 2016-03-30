/**
 * SiteController
 *
 * @description :: Server-side logic for managing sites
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    /**
     * `SiteController.index()`
     */
    index: function (req, res) {
        res.view({
            layout: 'layout-site'
        });
    },

    about: function (req, res) {
    	res.view({
    		layout: 'layout-site'
    	});
    },
    applications: function (req, res) {
    	res.view({
    		layout: 'layout-site'
    	});
    },
    blog : function (req, res) {
    	res.view({
    		layout: 'layout-site'
    	});
    },
    bio : function (req, res) {
    	res.view({
    		layout: 'layout-site'
    	});
    },
    contact : function (req, res) {
    	res.view({
    		layout: 'layout-site'
    	});
    },
    cv : function (req, res) {
    	res.view({
    		layout: 'layout-site'
    	});
    },
    presentations : function (req, res) {
    	res.view({
    		layout: 'layout-site'
    	});
    },

    tweets : function (req, res) {
    	res.view({
    		layout: 'layout-site'
    	});
    },
    portfolios : function (req, res) {
        res.view({
            layout: 'layout-site'
        });
    },

    gmm : function (req, res) {
        res.view('presentations/gmm', {
            layout: 'layout-presentation-gmm'
        });
    },
    test : function (req, res) {
        res.view('presentations/test', {
            layout: 'layout-presentation'
        });
    },
};

