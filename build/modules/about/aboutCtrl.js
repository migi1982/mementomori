(function() {
  var aboutCtrl;

  aboutCtrl = [
    '$rootScope', '$scope', function($rootScope, $scope) {
      $rootScope.navShow = true;
    }
  ];

  angular.module('app').controller('aboutCtrl', aboutCtrl);

}).call(this);
