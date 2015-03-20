aboutCtrl = [
  '$scope'
  'showService'
  ($scope,showService)->
    showService.show('nav')
    showService.show('amazon')
    return
]

angular
  .module 'app'
  .controller 'aboutCtrl',aboutCtrl