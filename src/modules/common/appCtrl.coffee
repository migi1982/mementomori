appCtrl = [
  '$rootScope'
  '$scope'
  '$timeout'
  'showService'
  ($rootScope,$scope,$timeout,showService)->
    showService.toggle('h1',true)
    $timeout ->
      $scope.h1Fadeout = true
      $timeout ->
        showService.toggle('view',true)
        showService.toggle('h1',false)
      , 1000
    , 3000
    return
]

angular
  .module 'app'
  .controller 'appCtrl',appCtrl