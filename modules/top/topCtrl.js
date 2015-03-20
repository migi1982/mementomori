(function() {
  var topCtrl, topService;

  topCtrl = [
    '$scope', 'dataService', 'showService', 'topService', function($scope, dataService, showService, topService) {
      var data10, data20;
      showService.show('topQ');
      showService.hide('topA');
      data10 = data20 = null;
      dataService('deathRate').then(function(res) {
        data10 = res;
      });
      dataService('deathRank').then(function(res) {
        data20 = res;
      });
      $scope.showQ = function() {
        $scope.myAge = null;
        $scope.mySex = null;
        showService.hide('topA');
        return showService.show('topQ');
      };
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
          topService.setDonut($scope.rankData[$scope.mySex]);
          topService.sendGAEvent($scope.myAge, $scope.mySex);
          showService.show('header');
          showService.show('amazon');
          showService.hide('topQ');
          showService.show('topA');
        }
      };
      $scope.openTweetWindow = function() {
        topService.openTweetWindow($scope.rateData.num[$scope.mySex], $scope.rankData[$scope.mySex][0].name);
      };
    }
  ];

  topService = [
    'numberFilter', '$analytics', function(numberFilter, $analytics) {
      var openTweetWindow, sendGAEvent, setDonut;
      setDonut = function(data) {
        var chart, i, item, len, newData;
        newData = [];
        for (i = 0, len = data.length; i < len; i++) {
          item = data[i];
          newData.push([item.name, item.rate]);
        }
        chart = c3.generate({
          bindto: '#pie',
          data: {
            columns: newData,
            type: 'donut',
            order: null
          },
          donut: {
            title: '上位の死因'
          },
          size: {
            height: 240,
            width: 480
          }
        });
      };
      openTweetWindow = function(number, cause) {
        var text, url;
        number = numberFilter(number);
        text = "私は今年、1/" + number + "の確率で死にます。死因はおそらく" + cause + "です。 #HowWeDie";
        text = encodeURIComponent(text);
        url = 'https://twitter.com/share?text=' + text;
        window.open(url, 'scrollbars=yes,width=500,height=300,');
      };
      sendGAEvent = function(age, sex) {
        $analytics.eventTrack('CheckDieRate', {
          category: sex + '',
          label: age + ''
        });
      };
      return {
        setDonut: setDonut,
        openTweetWindow: openTweetWindow,
        sendGAEvent: sendGAEvent
      };
    }
  ];

  angular.module('app').controller('topCtrl', topCtrl).service('topService', topService);

}).call(this);
