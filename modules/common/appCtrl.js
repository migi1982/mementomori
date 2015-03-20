(function() {
  var amazon, appCtrl, header;

  appCtrl = [
    '$scope', '$timeout', 'showService', 'd3Service', function($scope, $timeout, showService, d3Service) {
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

  amazon = function() {
    return {
      templateUrl: 'modules/common/parts/amazon.html'
    };
  };

  header = function() {
    return {
      templateUrl: 'modules/common/parts/header.html'
    };
  };

  angular.module('app').controller('appCtrl', appCtrl).directive('amazon', amazon).directive('header', header);

}).call(this);
