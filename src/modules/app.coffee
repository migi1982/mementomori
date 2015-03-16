importModules = [
  'ui.bootstrap'
  'ngRoute'
  'ng.httpLoader'
  'services'
  'filters'
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
loader = [
  'httpMethodInterceptorProvider'
  (httpMethodInterceptorProvider)->
    httpMethodInterceptorProvider.whitelistDomain('github.io')
#    httpMethodInterceptorProvider.whitelistDomain('vagrant.crazyark.com')
    return
]

angular
  .module 'app', importModules
  .config routeConfig
  .config loader
