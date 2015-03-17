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
    (str)->
      delay = $q.defer()
      $http.get('data/' + str + '.json')
        .success (data,status,headers,config)->
          delay.resolve(data)
          return
        .error (data,status,headers,config)->
          console.log 'error!!'
          console.log data
          console.log status
          console.log headers
          console.log config
          return
      delay.promise
]

showService = [
  '$rootScope'
  ($rootScope)->
    $rootScope.show = {}
    toggle = (str,bool)->
      if bool?
        $rootScope.show[str] = bool
      else
        $rootScope.show[str] = !$rootScope.show[str]
      return
    return {
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