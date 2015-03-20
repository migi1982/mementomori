(function() {
  var lineCtrl, lineService;

  lineCtrl = [
    '$scope', 'dataService', 'showService', 'lineService', function($scope, dataService, showService, lineService) {
      var chart, data30, data31, setChart, updateChart;
      showService.show('header');
      showService.show('amazon');
      data30 = data31 = null;
      $scope.type = 'rate';
      dataService('transNum').then(function(res) {
        data30 = res;
      });
      dataService('transRate').then(function(res) {
        data31 = res;
        setChart(data31);
      });
      chart = null;
      setChart = function(data) {
        chart = lineService.setChart(data);
      };
      updateChart = function(data) {
        chart.load({
          data: data
        });
      };
      $scope.changeType = function(str) {
        var data;
        if ($scope.type !== str) {
          data = str === 'number' ? data30 : data31;
          updateChart(data);
          $scope.type = str;
        }
      };
    }
  ];

  lineService = function() {
    var setChart;
    setChart = function(data) {
      return c3.generate({
        bindto: '#chart',
        data: {
          json: data,
          keys: {
            x: '年齢',
            value: ['悪性新生物', '心疾患', '肺炎', '脳血管疾患', '老衰', '不慮の事故', '自殺']
          },
          type: 'line'
        },
        axis: {
          x: {
            type: 'category'
          },
          y: {
            min: 0,
            padding: {
              top: 0,
              bottom: 0
            },
            tick: {
              format: d3.format(',')
            }
          }
        },
        size: {
          height: 400,
          width: 720
        },
        padding: {
          bottom: 20,
          left: 50
        },
        tooltip: {
          format: {
            value: d3.format(',')
          }
        }
      });
    };
    return {
      setChart: setChart
    };
  };

  angular.module('app').controller('lineCtrl', lineCtrl).service('lineService', lineService);

}).call(this);
