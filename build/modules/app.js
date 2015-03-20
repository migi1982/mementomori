(function() {
  var importModules, routeConfig;

  importModules = ['ui.bootstrap', 'ngRoute', 'ngAnimate', 'services'];

  routeConfig = [
    '$routeProvider', function($routeProvider) {
      $routeProvider.when('/', {
        controller: 'topCtrl',
        templateUrl: 'modules/top/topPanel.html',
        resolve: {
          current: function($rootScope) {
            return $rootScope.currentPage = 'top';
          }
        }
      }).when('/line', {
        controller: 'lineCtrl',
        templateUrl: 'modules/line/linePanel.html',
        resolve: {
          current: function($rootScope) {
            return $rootScope.currentPage = 'line';
          }
        }
      }).when('/about', {
        controller: 'aboutCtrl',
        templateUrl: 'modules/about/aboutPanel.html',
        resolve: {
          current: function($rootScope) {
            return $rootScope.currentPage = 'about';
          }
        }
      }).otherwise({
        redirectTo: '/'
      });
    }
  ];

  angular.module('app', importModules).config(routeConfig);

}).call(this);
