aboutCtrl = [
  '$rootScope'
  '$scope'
  ($rootScope,$scope)->
    $rootScope.navShow = true
    return
]


angular
  .module 'app'
  .controller 'aboutCtrl',aboutCtrl