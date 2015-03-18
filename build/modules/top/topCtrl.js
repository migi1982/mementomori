(function() {
  var topCtrl;

  topCtrl = [
    '$scope', 'dataService', 'd3Service', 'showService', 'numberFilter', function($scope, dataService, d3Service, showService, numberFilter) {
      var c3, d3, data10, data20, setDonut;
      showService.toggle('topQ', true);
      showService.toggle('topA', false);
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
          console.log('set!');
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
          $scope.showDiv = 'a';
          showService.toggle('nav', true);
          showService.toggle('amazon', true);
          showService.toggle('topQ');
          showService.toggle('topA');
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
          },
          size: {
            height: 240,
            width: 480
          }
        });
      };
      $scope.showQ = function() {
        showService.toggle('topA');
        return showService.toggle('topQ');
      };
      $scope.open_tweet_window = function() {
        var cause, number, text, url;
        number = $scope.rateData.num[$scope.mySex];
        number = numberFilter(number);
        cause = $scope.rankData[$scope.mySex][0].name;
        text = "私は今年、1/" + number + "の確率で死にます。死因はおそらく" + cause + "です。 #HowWeDie";
        text = encodeURIComponent(text);
        url = 'https://twitter.com/share?text=' + text;
        window.open(url, 'scrollbars=yes,width=500,height=300,');
      };
    }
  ];

  angular.module('app').controller('topCtrl', topCtrl);

}).call(this);
