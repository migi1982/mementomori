(function() {
  var topCtrl;

  topCtrl = [
    '$scope', '$timeout', 'dataService', 'util', function($scope, $timeout, dataService, util) {
      $scope.test = 'test';
      dataService('11').then(function(res) {
        $scope.rate = res;
      });
      dataService('10').then(function(res) {
        $scope.number = res;
      });
      $scope.setIcon = function() {
        var i, j, num, ref;
        if ($scope.age && $scope.sex) {
          $scope.icons = [];
          num = $scope.number[$scope.age][$scope.sex];
          for (i = j = 1, ref = num; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
            $scope.icons.push({
              id: i,
              die: false
            });
          }
          $timeout(function() {
            var target;
            target = util.rnd(num * 0.4, num * 0.6) - 1;
            return $scope.icons[target].die = true;
          }, 1000);
        }
      };
    }
  ];

  angular.module('app').controller('topCtrl', topCtrl);

}).call(this);
