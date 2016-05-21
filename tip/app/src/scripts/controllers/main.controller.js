tipicoSportsbookControllers.controller('MainController', ['$rootScope', '$scope', 'liveEventService', 'Events', 'eventDetails',
	function ($rootScope, $scope, liveEventService, Events, eventDetails) {

		function sendLiveAction () {
			setInterval(function () {
			 	liveEventService.getEventLastAction().then(function (data) {
			  		$rootScope.$broadcast(Events.LIVE_ACTION, data);
			 	});
			 }, 4000);
		}

		function init () {
			if (!_.isUndefined(eventDetails)) {
				$scope.eventDetails = eventDetails;




				console.log($scope.eventDetails);



				setTimeout(function () {
					$rootScope.$broadcast(Events.EVENT_DETAILS, eventDetails);
				}, 100);

			} else {
				throw new Error('There is no data for the event. Please try refreshing the browser.');
			}
			sendLiveAction();
		}

		init();
	}
]);