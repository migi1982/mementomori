(function() {
  var appCtrl;

  appCtrl = [
    '$rootScope', '$scope', '$timeout', 'showService', 'd3Service', function($rootScope, $scope, $timeout, showService, d3Service) {
      var c3, d3;
      d3 = d3Service.d3;
      c3 = d3Service.c3;
      showService.show('h1');
      $timeout(function() {
        $scope.h1Fadeout = true;
        return $timeout(function() {
          showService.show('view');
          return showService.hide('h1');
        }, 1000);
      }, 3000);
    }
  ];

  angular.module('app').controller('appCtrl', appCtrl);

}).call(this);
