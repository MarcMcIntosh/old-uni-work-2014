/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

//  '/': {
//    view: 'homepage'
//  },

//site
    '/': 'SiteController.index',
    '/presentations': 'SiteController.presentations',
    '/applications': 'SiteController.applications',
    '/tweets': 'SiteController.tweets',
    '/contact': 'SiteController.contact',
    '/bio': 'SiteController.bio',
    '/cv': 'SiteController.cv',
    '/about': 'SiteController.about',
    '/blog' : 'SiteController.blog',
    '/gmm-presentation' : 'SiteController.gmm',
    '/test-presentation' : 'SiteController.test',

    'get /login': 'AuthController.login',
    'get /logout': 'AuthController.logout',
    'get /register': 'AuthController.register',

    'post /auth/local': 'AuthController.callback',
    'post /auth/local/:action': 'AuthController.callback',

    'get /auth/:provider': 'AuthController.provider',
    'get /auth/:provider/callback': 'AuthController.callback',

  '/account' : {
    controller : 'auth',
    action : 'index'
  },

  '/Qg' : {
    controller : 'qg',
    action : 'index'
  },

  '/Qg-management': {
    controller : 'qg',
    action : 'man'
  },
  '/Qg-pad':{
    controller :'qg',
    action : 'pad'
  },
  '/Qg-PRC' : {
    controller :'qg',
    action : 'prc'
  },

  '/event-man' : {
    controller : 'portfolio',
    action : 'index'
  },

  '/ebusiness' : {
    controller : 'ebusiness',
    action : 'index'
  },

  '/ebusiness-strategy' : {
    controller : 'ebusiness',
    action : 'all'
  },

  '/ebusiness-plan' : {
    controller : 'ebusiness',
    action: 'plan'
  },

  '/ebusiness-model' : {
    controller: 'ebusiness',
    action: 'canvas'
  },

  '/test-dc' : {
    controller: 'test',
    action: 'dc'
  },


  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
