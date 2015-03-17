(function() {
  var appCtrl;

  appCtrl = [
    '$rootScope', '$scope', '$timeout', 'showService', function($rootScope, $scope, $timeout, showService) {
      showService.toggle('h1', true);
      $timeout(function() {
        $scope.h1Fadeout = true;
        return $timeout(function() {
          showService.toggle('view', true);
          return showService.toggle('h1', false);
        }, 1000);
      }, 3000);
    }
  ];

  angular.module('app').controller('appCtrl', appCtrl);

}).call(this);
