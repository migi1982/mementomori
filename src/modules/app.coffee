importModules = [
  'ngRoute'
  'ngAnimate'
  'services'
  'angulartics'
  'angulartics.google.analytics'
]

routeConfig = [
  '$routeProvider'
  ($routeProvider)->
    $routeProvider
      .when '/', {
        controller: 'topCtrl',
        templateUrl: 'modules/top/topPanel.html'
        resolve: {
          current: ($rootScope)->
            $rootScope.currentPage = 'top'
        }
      }
      .when '/line', {
        controller: 'lineCtrl',
        templateUrl: 'modules/line/linePanel.html'
        resolve: {
          current: ($rootScope)->
            $rootScope.currentPage = 'line'
        }
      }
      .when '/about', {
        controller: 'aboutCtrl',
        templateUrl: 'modules/about/aboutPanel.html'
        resolve: {
          current: ($rootScope)->
            $rootScope.currentPage = 'about'
        }
      }
      .otherwise {
        redirectTo: '/'
      }
    return
]

angular
  .module 'app', importModules
  .config routeConfig
