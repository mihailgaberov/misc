tipicoSportsbookControllers.controller('LiveActionShowController', ['$scope', 'Events',
		function ($scope, Events) {

			$scope.$on(Events.LIVE_ACTION, function (e, liveEvent) {
				console.log('liveEvent: ', liveEvent);
				parseEventData(liveEvent);
			});

			$scope.$on(Events.EVENT_DETAILS, function (e, eventData) {
				console.log('>>> eventData: ', eventData);
			});

			$scope.imageName = '';
			$scope.isVisible;
			$scope.teamName = '';
			$scope.lastAction = '';

			function parseEventData (eventData) {
				if (!_.isNull(eventData) && !_.isUndefined(eventData.actionType) && !_.isUndefined(eventData.team)) {
					$scope.lastAction = eventData.actionType;
					$scope.teamName = eventData.team;
					var direction = eventData.team === 1 ? 'left' : 'right';
					$scope.isVisible = (direction === 'left');
					var action = eventData.actionType.toLowerCase().replace(/ /g, '');
					$scope.imageName = action + '-' + direction + '.png';
				}
			}
		}])
	.directive('liveActionShow', function () {
		return {
			controller: 'LiveActionShowController',
			restrict: 'E',
			scope: {},
			templateUrl: 'views/live-action-show.html'
		};
	});