(function() {
  var importModules, loader, routeConfig;

  importModules = ['ui.bootstrap', 'ngRoute', 'ng.httpLoader', 'services', 'filters'];

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
      }).when('/transition', {
        controller: 'transitionCtrl',
        templateUrl: 'modules/transition/transitionPanel.html',
        resolve: {
          current: function($rootScope) {
            return $rootScope.currentPage = 'transition';
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

  loader = [
    'httpMethodInterceptorProvider', function(httpMethodInterceptorProvider) {
      httpMethodInterceptorProvider.whitelistDomain('github.io');
    }
  ];

  angular.module('app', importModules).config(routeConfig).config(loader);

}).call(this);
