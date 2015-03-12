(function() {
  var appCtrl;

  appCtrl = [
    '$scope', function($scope) {
      $scope.hoge = 'fuga';
    }
  ];

  angular.module('app').controller('appCtrl', appCtrl);

}).call(this);
