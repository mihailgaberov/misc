tipicoSportsbookControllers.controller('LiveActionInfoBarController', ['$scope', 'Events',
		function ($scope, Events) {

			var vm = this;

			var objTeamNames = {
				1: $scope.eventData.team1,
				2: $scope.eventData.team2
			};

			$scope.$on(Events.LIVE_ACTION, function (e, liveEvent) {
					parseLiveActionData(liveEvent);
			});

			function parseLiveActionData (data) {
				vm.lastAction = data.actionType;
				vm.teamName = objTeamNames[data.team];
			}

		}])
	.directive('liveActionInfoBar', function () {
		return {
			controller: 'LiveActionInfoBarController',
			controllerAs: 'vm',
			restrict: 'E',
			scope: {
				eventData: '='
			},
			templateUrl: 'views/live-action-info-bar.html'
		};
	});