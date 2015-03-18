(function() {
  var appCtrl, twitter;

  appCtrl = [
    '$rootScope', '$scope', '$timeout', 'showService', function($rootScope, $scope, $timeout, showService) {
      showService.toggle('h1', true);
      $timeout(function() {
        $scope.h1Fadeout = true;
        return $timeout(function() {
          showService.toggle('view', true);
          return showService.toggle('h1', false);
        }, 1000);
      }, 3000);
    }
  ];

  twitter = function() {
    return {
      link: function(scope, element, attr) {
        setTimeout(function() {
          twttr.widgets.createShareButton(attr.url, element[0], function(el) {}, {
            count: 'none',
            text: attr.text
          });
        });
      }
    };
  };

  angular.module('app').controller('appCtrl', appCtrl).directive('twitter', twitter);

}).call(this);
