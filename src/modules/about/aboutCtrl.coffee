aboutCtrl = [
  '$scope'
  'showService'
  ($scope,showService)->
    showService.show('header')
    showService.show('amazon')
    return
]

angular
  .module 'app'
  .controller 'aboutCtrl',aboutCtrl