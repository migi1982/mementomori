topCtrl = [
  '$scope'
  'dataService'
  'd3Service'
  'showService'
  ($scope,dataService,d3Service,showService)->
    showService.toggle('topQ',true)
    showService.toggle('topA',false)

    data10 = data20 = null
    d3 = d3Service.d3
    c3 = d3Service.c3

    dataService('10').then (res)->
      data10 = res
      return
    dataService('20').then (res)->
      data20 = res
      return

    $scope.setData = ->
      if $scope.myAge >= 0 && $scope.mySex
        console.log 'set!'
        # data10のインデックス
        index10 = ($scope.myAge / 5) << 0
        if index10 > 20
          index10 = 20
        # data20のインデックス
        if $scope.myAge is 0
          index20 = 0
        else
          index20 = index10 + 1
        # スコープにインデックスを適用
        $scope.rateData = data10[index10]
        $scope.rankData = data20[index20]
        setDonut($scope.rankData[$scope.mySex])
        $scope.showDiv = 'a'
        showService.toggle('nav',true)
        showService.toggle('amazon',true)
        showService.toggle('topQ')
        showService.toggle('topA')
      return

    setDonut = (data)->
      newData = []
      for item in data
        newData.push [item.name,item.rate]
      chart = c3.generate {
        bindto: '#chart'
        data: {
          columns: newData
          type: 'donut'
          order: null
        }
        donut: {
          title: '上位の死因'
        }
        size: {
            height: 240
            width: 480
        }
      }
      return

    $scope.showQ = ->
      showService.toggle('topA')
      showService.toggle('topQ')

    $scope.open_tweet_window = ->
      number = $scope.rateData.num[$scope.mySex]
      cause = $scope.rankData[$scope.mySex][0].name
      text = "私は今年、1/#{number}の確率で死にます。死因はおそらく#{cause}です。 #HowWeDie"
      text = encodeURIComponent text
      url = 'https://twitter.com/share?text=' + text
      window.open(url,'scrollbars=yes,width=500,height=300,')
      return

    return
]

angular
  .module 'app'
  .controller 'topCtrl',topCtrl