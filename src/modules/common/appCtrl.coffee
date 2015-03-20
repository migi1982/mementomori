appCtrl = [
  '$scope'
  '$timeout'
  'showService'
  'd3Service'
  ($scope,$timeout,showService,d3Service)->

    d3 = d3Service.d3
    c3 = d3Service.c3

    showService.show('h1')
    $timeout ->
      $scope.h1Fadeout = true
      $timeout ->
        showService.show('view')
        showService.hide('h1')
      , 1000
    , 3000

    return
]

amazon = ->
  templateUrl: 'modules/common/parts/amazon.html'
header = ->
  templateUrl: 'modules/common/parts/header.html'

angular
  .module 'app'
  .controller 'appCtrl',appCtrl
  .directive 'amazon', amazon
  .directive 'header', header