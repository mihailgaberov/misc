tipicoSportsbookControllers.controller('LiveActionShowController', ['$scope', 'Events',
		function ($scope, Events) {

			$scope.imageName = '';
			$scope.isVisibleTeam1 = false;
			$scope.isVisibleTeam2 = false;
			$scope.teamName = '';
			$scope.lastAction = '';

			var teamNum = 0;
			this.objTeamNames = {};

			$scope.$on(Events.LIVE_ACTION, function (e, liveEvent) {
				this.parseEventData(liveEvent);
			});

			$scope.$on(Events.EVENT_DETAILS, function (e, eventDetails) {
				this.objTeamNames['1'] = eventDetails.team1;
				this.objTeamNames['2'] = eventDetails.team2;
			});

			this.parseEventData = function (eventData) {
				if (!_.isNull(eventData) && !_.isUndefined(eventData.actionType) && !_.isUndefined(eventData.team)) {
					$scope.lastAction = eventData.actionType;
					teamNum = eventData.team;
					var direction = eventData.team === 1 ? 'left' : 'right';
					var action = eventData.actionType.toLowerCase().replace(/ /g, '');

					$scope.imageName = action + '-' + direction + '.png';
					$scope.teamName = this.objTeamNames[teamNum];

					this.isTeamActionVisible(direction);
				}
			}

			this.isTeamActionVisible  = function (direction) {
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