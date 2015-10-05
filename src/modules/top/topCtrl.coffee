topCtrl = [
  '$scope'
  'dataService'
  'showService'
  'topService'
  ($scope,dataService,showService,topService)->
    showService.show('topQ')
    showService.hide('topA')

    data10 = data20 = null

    dataService('deathRate').then (res)->
      data10 = res
      return
    dataService('deathRank').then (res)->
      data20 = res
      return

    $scope.showQ = ->
      $scope.myAge = null
      $scope.mySex = null
      showService.hide('topA')
      showService.show('topQ')

    $scope.setData = ->
      if $scope.myAge >= 0 && $scope.mySex
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
        topService.setDonut($scope.rankData[$scope.mySex])
        topService.sendGAEvent($scope.myAge,$scope.mySex)
        topService.sendMPEvent()

        showService.show('header')
        showService.show('amazon')
        showService.hide('topQ')
        showService.show('topA')
      return

    $scope.openTweetWindow = ->
      topService.openTweetWindow($scope.rateData.num[$scope.mySex], $scope.rankData[$scope.mySex][0].name)
      return

    return
]

topService = [
  'numberFilter'
  '$analytics'
  (numberFilter,$analytics)->
    setDonut = (data)->
      newData = []
      for item in data
        newData.push [item.name,item.rate]
      chart = c3.generate {
        bindto: '#pie'
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

    openTweetWindow = (number,cause)->
      number = numberFilter number
      text = "私は今年、1/#{number}の確率で死にます。死因はおそらく#{cause}です。 #HowWeDie"
      text = encodeURIComponent text
      url = 'https://twitter.com/share?text=' + text
      window.open(url,'scrollbars=yes,width=500,height=300,')
      return

    sendGAEvent = (age,sex)->
      ga('send', 'event', 'button', 'CheckDieRate', sex, age)
      # $analytics.eventTrack 'CheckDieRate', {
      #   category: sex + ''
      #   label: age + ''
      # }
      return

    sendMPEvent = ->
      mixpanel.track('check')
      return

    {
      setDonut: setDonut
      openTweetWindow: openTweetWindow
      sendGAEvent: sendGAEvent
      sendMPEvent: sendMPEvent
    }
]

angular
  .module 'app'
  .controller 'topCtrl',topCtrl
  .service 'topService', topService