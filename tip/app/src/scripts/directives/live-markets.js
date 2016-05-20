tipicoSportsbookControllers.controller('LiveMarketsController', ['$scope', 'Events', 'liveEventService',
		function ($scope, Events, liveEventService) {

			var vm = this;

			$scope.markets = [];

			function getOdds (data) {
				$scope.markets = data;
				console.log('>>>> ', $scope.markets);
			}

			liveEventService.getEventDetails().then(function (data) {
				if (!_.isNull(data) && !_.isUndefined(data.odds))
					getOdds(data.odds);
			});

			/*this.test = function (ev) {
				console.log('>>> currTarg: ', ev.currentTarget);
				console.log('>>> ev.target.value: ', ev.target.value);
				console.log('>>> ev.target.id: ', ev.target.id);
				console.log('>>> ev.target.name: ', ev.target.name);
			}*/


		}])
	.directive('liveMarkets', function () {
		return {
			controller: 'LiveMarketsController',
			controllerAs: 'vm',
			restrict: 'E',
			scope: {},
			templateUrl: 'views/live-markets.html'
		};
	});