appCtrl = [
  '$rootScope'
  '$scope'
  ($rootScope,scope)->
    $rootScope.navShow = false
    return
]


ga = ->
  templateUrl: 'modules/common/parts/_ga.html'




angular
  .module 'app'
  .controller 'appCtrl',appCtrl
  .directive 'ga', ga