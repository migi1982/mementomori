topCtrl = [
  '$scope'
  '$timeout'
  'dataService'
  'util'
  ($scope,$timeout,dataService,util)->
    $scope.test = 'test'
    dataService('11').then (res)->
      $scope.rate = res
      return
    dataService('10').then (res)->
      $scope.number = res
      return
    $scope.setIcon = ->
      if $scope.age && $scope.sex
        $scope.icons = []
        num = $scope.number[$scope.age][$scope.sex]
        for i in [1..num]
          $scope.icons.push {id:i,die:false}
        $timeout ->
          target = util.rnd(num*0.4,num*0.6) - 1
          $scope.icons[target].die = true
        , 1000
      return
    return
]






angular
  .module 'app'
  .controller 'topCtrl',topCtrl