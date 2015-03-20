(function() {
  var d3Service, dataService, showService, util;

  util = function() {
    var rnd;
    rnd = function(min, max) {
      var num;
      num = Math.random() * max + min;
      num = num << 0;
      return num;
    };
    return {
      rnd: rnd
    };
  };

  dataService = [
    '$http', '$q', function($http, $q) {
      var _map, _stock;
      _stock = {};
      _map = {
        deathRate: '10',
        deathRank: '20',
        transNum: '30',
        transRate: '31'
      };
      return function(str) {
        var delay, target;
        delay = $q.defer();
        if (_stock[str] != null) {
          delay.resolve(_stock[str]);
          return delay.promise;
        } else {
          target = _map[str];
          $http.get('data/' + target + '.json').success(function(data, status, headers, config) {
            _stock[str] = data;
            delay.resolve(data);
          }).error(function(data, status, headers, config) {
            console.log('error!!');
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);
          });
          return delay.promise;
        }
      };
    }
  ];

  showService = [
    '$rootScope', function($rootScope) {
      var hide, show, toggle;
      $rootScope.show = {};
      show = function(str) {
        $rootScope.show[str] = true;
      };
      hide = function(str) {
        $rootScope.show[str] = false;
      };
      toggle = function(str) {
        $rootScope.show[str] = !$rootScope.show[str];
      };
      return {
        show: show,
        hide: hide,
        toggle: toggle
      };
    }
  ];

  d3Service = function() {
    return {
      d3: d3,
      c3: c3
    };
  };

  angular.module('services', ['ngRoute']).service('dataService', dataService).service('util', util).service('d3Service', d3Service).service('showService', showService);

}).call(this);
