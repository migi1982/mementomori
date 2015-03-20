lineCtrl = [
  '$scope'
  'dataService'
  'showService'
  'lineService'
  ($scope,dataService,showService,lineService)->
    showService.show('nav')
    showService.show('amazon')

    data30 = data31 = null
    $scope.type = 'rate'

    dataService('transNum').then (res)->
      data30 = res
      return
    dataService('transRate').then (res)->
      data31 = res
      setChart(data31)
      return

    chart = null
    setChart = (data)->
      chart = lineService.setChart(data)
      return
    updateChart = (data)->
      chart.load {data: data}
      return

    $scope.changeType = (str)->
      if $scope.type != str
        data = if str == 'number' then data30 else data31
        updateChart(data)
        $scope.type = str
      return

    return
]

lineService = ->
  setChart = (data)->
    return c3.generate {
      bindto: '#chart'
      data: {
        json: data
        keys: {
          x: '年齢'
          value: ['悪性新生物','心疾患','肺炎','脳血管疾患','老衰','不慮の事故','自殺']
        }
        type: 'line'
      }
      axis: {
        x: {
          type: 'category'
        }
        y: {
          min: 0
          padding: {
            top:0
            bottom:0
          }
          tick: {
            format: d3.format(',')
          }
        }
      }
      size: {
        height: 400
        width: 720
      }
      padding: {
        bottom: 20
        left: 50
      }
      tooltip: {
        format: {
          value: d3.format(',')
        }
      }
    }

  {
    setChart: setChart
  }

angular
  .module 'app'
  .controller 'lineCtrl',lineCtrl
  .service 'lineService',lineService
