(function() {
  var importModules, loader, routeConfig;

  importModules = ['ui.bootstrap', 'ngRoute', 'ng.httpLoader', 'services', 'filters'];

  routeConfig = [
    '$routeProvider', function($routeProvider) {
      $routeProvider.when('/login/', {
        controller: 'topCtrl',
        templateUrl: 'modules/top/topPanel.html',
        resolve: {
          current: function($rootScope) {
            return $rootScope.currentPage = 'top';
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
