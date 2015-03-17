(function() {
  var appCtrl, ga;

  appCtrl = [
    '$rootScope', '$scope', function($rootScope, scope) {
      $rootScope.navShow = false;
    }
  ];

  ga = function() {
    return {
      templateUrl: 'modules/common/parts/_ga.html'
    };
  };

  angular.module('app').controller('appCtrl', appCtrl).directive('ga', ga);

}).call(this);
