importModules = [
  'ui.bootstrap'
  'ngRoute'
  'ngAnimate'
  'services'
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
      .when '/transition', {
        controller: 'transitionCtrl',
        templateUrl: 'modules/transition/transitionPanel.html'
        resolve: {
          current: ($rootScope)->
            $rootScope.currentPage = 'transition'
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
