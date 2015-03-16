(function() {
  var appCtrl, navParts;

  appCtrl = [
    '$scope', function($scope) {
      $scope.hoge = 'fuga';
    }
  ];

  navParts = function() {
    return {
      templateUrl: 'modules/common/parts/_nav.html'
    };
  };

  angular.module('app').controller('appCtrl', appCtrl).directive('nav', navParts);

}).call(this);
