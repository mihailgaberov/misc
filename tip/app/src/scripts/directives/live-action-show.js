angular.module('tipicoSportsbookControllers')
	.controller('LiveActionShowController', ['$scope',
		function ($scope) {

			$scope.imagePath = '';
			$scope.isVisible = false;
			$scope.teamName = '';
			$scope.lastAction = '';

			function setImageName (name) {
				$scope.imageName = name;
			}

			function parseEventData (eventData) {
				if (!_.isNull(eventData) && !_.isUndefined(eventData.actionType) && !_.isUndefined(eventData.team)) {

					$scope.lastAction = eventData.actionType;
					$scope.teamName = eventData.team;

					var direction = eventData.team === 1 ? 'left' : 'right';
					$scope.isVisible = (direction === 'left');
					var action = eventData.actionType.toLowerCase().replace(/ /g, '');
					var name = action + '-' + direction + '.png';
					setImageName(name);
				}
			}


			$scope.$on('LIVE_ACTION', function (e, liveEvent) {
				parseEventData(liveEvent);
			});




		}])
	.directive('liveActionShow', function () {
		return {
			controller: 'LiveActionShowController',
			restrict: 'E',
			scope: {},
			templateUrl: 'views/live-action-show.html'
		};
	});