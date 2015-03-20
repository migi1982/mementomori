util = ->
  rnd = (min,max)->
    num = Math.random() * max + min
    num = num << 0
    return num
  {
    rnd: rnd
  }

dataService = [
  '$http'
  '$q'
  ($http,$q)->
    _stock = {}
    _map = {
      deathRate: '10'
      deathRank: '20'
      transNum: '30'
      transRate: '31'
    }

    (str)->
      delay = $q.defer()
      if _stock[str]?
        delay.resolve(_stock[str])
        return delay.promise
      else
        target = _map[str]
        $http.get('data/' + target + '.json')
          .success (data,status,headers,config)->
            _stock[str] = data
            delay.resolve(data)
            return
          .error (data,status,headers,config)->
            console.log 'error!!'
            console.log data
            console.log status
            console.log headers
            console.log config
            return
        return delay.promise
]

showService = [
  '$rootScope'
  ($rootScope)->
    $rootScope.show = {}

    show = (str)->
      $rootScope.show[str] = true
      return
    hide = (str)->
      $rootScope.show[str] = false
      return
    toggle = (str)->
      $rootScope.show[str] = !$rootScope.show[str]
      return
    {
      show: show
      hide: hide
      toggle: toggle
    }
]

d3Service = ->
  {
    d3:d3
    c3:c3
  }

angular
  .module 'services', ['ngRoute']
  .service 'dataService', dataService
  .service 'util', util
  .service 'd3Service', d3Service
  .service 'showService', showService