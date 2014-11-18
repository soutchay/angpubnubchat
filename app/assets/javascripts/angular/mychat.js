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
})