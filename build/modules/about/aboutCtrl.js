(function() {
  var aboutCtrl;

  aboutCtrl = [
    '$scope', 'showService', function($scope, showService) {
      showService.show('nav');
      showService.show('amazon');
    }
  ];

  angular.module('app').controller('aboutCtrl', aboutCtrl);

}).call(this);
