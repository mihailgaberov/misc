angular.module('tipicoSportsbookControllers', []).controller('MainController', ['$scope', 'liveEventService', 'eventDetails',
	function ($scope, liveEventService, eventDetails) {

		$scope.getLiveAction = function () {
			setInterval(function () {
			 liveEventService.getEventLastAction().then(function (data) {
			  $scope.$broadcast('LIVE_ACTION', data);
			 });
			 }, 4000);
		};

		$scope.checkEventDetails = function () {
			console.log('>>> ', eventDetails);
			if (_.isUndefined(eventDetails)) {
				$scope.eventDetails = [];
			} else {
				$scope.eventDetails = eventDetails;
				$scope.getLiveAction();
			}
		};
		$scope.checkEventDetails();


	}
]);