angular.module('tipicoSportsbookControllers', []).controller('MainController', ['$scope', 'liveEventService', 'eventDetails',
	function ($scope, liveEventService, eventDetails) {

		$scope.checkEventDetails = function () {
			console.log('>>> ', eventDetails);
			if (_.isUndefined(eventDetails)) {
				$scope.eventDetails = [];
			} else {
				$scope.eventDetails = eventDetails;
			}
		};
		$scope.checkEventDetails();

	}
]);