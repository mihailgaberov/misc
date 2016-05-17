tipicoSportsbookControllers.controller('LiveActionShowController', ['$scope', 'Events',
		function ($scope, Events) {

			$scope.imageName = '';
			$scope.isVisibleTeam1 = false;
			$scope.isVisibleTeam2 = false;
			$scope.teamName = '';
			$scope.lastAction = '';

			var teamNum = 0;
			var objTeamNames = {};

			$scope.$on(Events.LIVE_ACTION, function (e, liveEvent) {
				console.log('liveEvent: ', liveEvent);
				parseEventData(liveEvent);
			});

			$scope.$on(Events.EVENT_DETAILS, function (e, eventDetails) {
				console.log('eventDetails: ', eventDetails);
				objTeamNames['1'] = eventDetails.team1;
				objTeamNames['2'] = eventDetails.team2;
			});

			function parseEventData (eventData) {
				if (!_.isNull(eventData) && !_.isUndefined(eventData.actionType) && !_.isUndefined(eventData.team)) {
					$scope.lastAction = eventData.actionType;
					teamNum = eventData.team;
					var direction = eventData.team === 1 ? 'left' : 'right';
					var action = eventData.actionType.toLowerCase().replace(/ /g, '');

					$scope.imageName = action + '-' + direction + '.png';
					$scope.teamName = objTeamNames[teamNum];

					isTeamActionVisible(direction);
				}
			}

			function isTeamActionVisible (direction) {
				if (_.isUndefined(direction))
					return;

				$scope.isVisibleTeam1 = (direction === 'left');
				$scope.isVisibleTeam2 = !$scope.isVisibleTeam1;
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