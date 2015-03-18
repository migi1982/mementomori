(function() {
  var aboutCtrl;

  aboutCtrl = [
    '$scope', 'showService', function($scope, showService) {
      showService.toggle('nav', true);
      showService.toggle('amazon', true);
    }
  ];

  angular.module('app').controller('aboutCtrl', aboutCtrl);

}).call(this);
