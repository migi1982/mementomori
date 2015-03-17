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
      return function(str) {
        var delay;
        delay = $q.defer();
        $http.get('data/' + str + '.json').success(function(data, status, headers, config) {
          delay.resolve(data);
        }).error(function(data, status, headers, config) {
          console.log('error!!');
          console.log(data);
          console.log(status);
          console.log(headers);
          console.log(config);
        });
        return delay.promise;
      };
    }
  ];

  showService = [
    '$rootScope', function($rootScope) {
      var toggle;
      $rootScope.show = {};
      toggle = function(str, bool) {
        if (bool != null) {
          $rootScope.show[str] = bool;
        } else {
          $rootScope.show[str] = !$rootScope.show[str];
        }
      };
      return {
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
