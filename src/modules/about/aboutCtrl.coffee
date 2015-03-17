aboutCtrl = [
  '$rootScope'
  '$scope'
  'showService'
  ($rootScope,$scope,showService)->
    showService.toggle('nav',true)
    showService.toggle('amazon',true)
    return
]


angular
  .module 'app'
  .controller 'aboutCtrl',aboutCtrl