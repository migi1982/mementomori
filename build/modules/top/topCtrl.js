(function() {
  var topCtrl;

  topCtrl = [
    '$scope', '$timeout', 'dataService', 'd3Service', 'util', function($scope, $timeout, dataService, d3Service, util) {
      var c3, d3, data10, data20, setDonut;
      $scope.textShow = false;
      data10 = data20 = null;
      d3 = d3Service.d3;
      c3 = d3Service.c3;
      dataService('10').then(function(res) {
        data10 = res;
      });
      dataService('20').then(function(res) {
        data20 = res;
      });
      $scope.setData = function() {
        var index10, index20;
        if ($scope.myAge >= 0 && $scope.mySex) {
          index10 = ($scope.myAge / 5) << 0;
          if (index10 > 20) {
            index10 = 20;
          }
          if ($scope.myAge === 0) {
            index20 = 0;
          } else {
            index20 = index10 + 1;
          }
          $scope.rateData = data10[index10];
          $scope.rankData = data20[index20];
          setDonut($scope.rankData[$scope.mySex]);
          $scope.textShow = true;
        }
      };
      setDonut = function(data) {
        var chart, i, item, len, newData;
        newData = [];
        for (i = 0, len = data.length; i < len; i++) {
          item = data[i];
          newData.push([item.name, item.rate]);
        }
        chart = c3.generate({
          bindto: '#chart',
          data: {
            columns: newData,
            type: 'donut',
            order: null
          },
          donut: {
            title: '上位の死因'
          }
        });
      };
    }
  ];

  angular.module('app').controller('topCtrl', topCtrl);

}).call(this);
