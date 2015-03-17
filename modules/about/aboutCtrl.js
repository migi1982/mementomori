(function() {
  var aboutCtrl;

  aboutCtrl = [
    '$rootScope', '$scope', 'showService', function($rootScope, $scope, showService) {
      showService.toggle('nav', true);
      showService.toggle('amazon', true);
    }
  ];

  angular.module('app').controller('aboutCtrl', aboutCtrl);

}).call(this);
