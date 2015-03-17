(function() {
  var appCtrl;

  appCtrl = [
    '$rootScope', '$scope', function($rootScope, scope) {
      $rootScope.navShow = false;
    }
  ];

  angular.module('app').controller('appCtrl', appCtrl);

}).call(this);
