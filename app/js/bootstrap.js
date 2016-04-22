/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
define([
    'require',
    'angular',
    'app',
    'routes',
    'impl'
], function (require, ng, app) {
    'use strict';

    app.run(['$rootScope', '$state', 'Auth', function ($rootScope, $state, Auth) {

        // any functions or variables to declare at runtime

        // change page title based on state
        $rootScope.$on('$stateChangeSuccess', function(event, toState) {
            if(toState.title) {
                $rootScope.pageTitle = toState.title;
            }
        });

        $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
            console.log(toState.authenticate, Auth.isLoggedIn(), fromState.authenticate);
            if (toState.authenticate && !Auth.isLoggedIn()){
              // User isn’t authenticated
              $state.go("login");
              event.preventDefault();
            }
        });

    }]);

    require(['domReady!'], function (document) {
        return ng.bootstrap(document, ['app']);
    });
});
