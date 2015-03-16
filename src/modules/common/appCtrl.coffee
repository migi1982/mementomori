appCtrl = [
  '$scope'
  ($scope)->
    $scope.hoge = 'fuga'

    return
]
navParts = ->
  templateUrl: 'modules/common/parts/_nav.html'






angular
  .module 'app'
  .controller 'appCtrl',appCtrl
  .directive 'nav', navParts