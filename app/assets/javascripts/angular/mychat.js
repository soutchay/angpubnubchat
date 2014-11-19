angular.module('myChat', ['ui.router', 'pubnub.angular.service'])
.config(function($stateProvider, $urlRouterProvider){

})
.controller('JoinCtrl', function($scope, PubNub){
	console.log('stuff');
	$scope.publish = function() {
		PubNub.ngPublish({
		channel: $scope.selectedChannel,
		message: $scope.newMessage
		});
	};
	$scope.subscribe = function() {
		PubNub.ngSubscribe({ channel: theChannel })
		$rootScope.$on(PubNub.ngMsgEv(theChannel), function(event, payload) {
		console.log('got a message event:', payload);
		})
	};
})