// angular.module('myChat', ['ui.router', 'pubnub.angular.service'])
// .config(function($stateProvider, $urlRouterProvider){

// })
// .controller('JoinCtrl', function($rootScope, $scope, $location, PubNub){
// 	console.log('stuff');
// 	// publish a chat message
// //  // make up a user id (you probably already have this)
// //   $scope.userId   = "User " + Math.round(Math.random() * 1000);
// //   // make up a channel name
// //   $scope.channel  = 'The Channel';
// //   // pre-populate any existing messages (just an AngularJS scope object)
// //   $scope.messages = ['Welcome to ' + $scope.channel];

// // // initialize pubnub in the rootscope
// //  if (!$rootScope.initialized) {
// //     // Initialize the PubNub service
// //     PubNub.init({
// //       subscribe_key: 'pub-c-28c48402-cc66-488a-bb47-accd95f3900c',
// //       publish_key: 'sub-c-afabf17c-6a18-11e4-b944-02ee2ddab7fe',
// //       uuid:$scope.userId
// //     });
// //     $rootScope.initialized = true;
// //   }

// //  // Subscribe to the Channel
// //   PubNub.ngSubscribe({ channel: $scope.channel });
// // // Create a publish() function in the scope
// // 	$scope.publish = function() {
// // 	    PubNub.ngPublish({
// // 	        channel: $scope.channel,
// // 	        message: "[" + $scope.userId + "] " + $scope.newMessage
// // 	    });
// // 	    $scope.newMessage = '';
// // 	};
// //   // Register for message events
// //   // bind event handler to listen for message events
// //   $rootScope.$on(PubNub.ngMsgEv($scope.channel), function(ngEvent, payload) {
// //     $scope.$apply(function() {
// //       $scope.messages.push(payload.message);
// //     });
//   // });

//   // Register for presence events (optional)
//   // $rootScope.$on(PubNub.ngPrsEv($scope.channel), function(ngEvent, payload) {
//   //   $scope.$apply(function() {
//   //     $scope.users = PubNub.ngListPresence($scope.channel);
//   //   });
//   // });


// // });










// 	$scope.realtimeStatus = 'Connecting...'
// 	$scope.messages = [];
// 	$scope.selectedChannel = "pubnub chat";


// 	$scope.publish = function() {
// 		// console.log('fires');
// 		PubNub.ngPublish({
// 		channel: $scope.selectedChannel,
// 		message: $scope.newMessage
// 		});
// 		//reset message text
// 		$scope.newMessage.text = "";
// 	};

// 	$scope.subscribe = function() {
// PUBNUB.subscribe({
//         channel    : $scope.channel,
//         restore    : false, 
    
//         callback   : function(message) { 
            
//             //toggle the progress_bar
//             $('#progress_bar').slideToggle();         
         
//             $scope.$apply(function(){
//                 $scope.messages.unshift(message);          
                
//             }); 
//         },
    
//         disconnect : function() {   
//             $scope.$apply(function(){
//                 $scope.realtimeStatus = 'Disconnected';
//             });
//         },
    
//         reconnect  : function() {   
//             $scope.$apply(function(){
//                 $scope.realtimeStatus = 'Connected';
//             });
//         },
    
//         connect    : function() {  
//             $scope.$apply(function(){
//                 $scope.realtimeStatus = 'Connected';
//                 //hide the progress bar
//                 $('#progress_bar').slideToggle();
//                 //load the message history from PubNub
//                 $scope.history();
//             });
    
//         }
//     })

// 	};
// })