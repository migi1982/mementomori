appCtrl = [
  '$scope'
  ($scope)->
    $scope.hoge = 'fuga'
    return
]






angular
  .module 'app'
  .controller 'appCtrl',appCtrl