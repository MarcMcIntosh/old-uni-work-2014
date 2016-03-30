/**
 * QgController
 *
 * @description :: Server-side logic for managing qgs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	index : function (req, res) {
        res.view('apps/Qg-index', {
            layout: 'layout-Qg'
        });
    },

    man : function (req, res) {
        res.view('apps/Qg-man', {
            layout: 'layout-Qg-man'
        });
    },

    pad : function (req, res) {
        res.view('apps/Qg-pad', {
            layout: 'layout-Qg-pad'
        });
    },

    prc : function (req, res) {
        res.view('apps/Qg-index', {
            layout: 'layout-Qg-PRC'
        });
    },
	
};

