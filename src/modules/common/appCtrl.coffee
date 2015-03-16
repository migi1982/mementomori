appCtrl = [
  '$rootScope'
  '$scope'
  ($rootScope,scope)->
    $rootScope.navShow = false
    return
]






angular
  .module 'app'
  .controller 'appCtrl',appCtrl
