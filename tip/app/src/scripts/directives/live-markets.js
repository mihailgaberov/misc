tipicoSportsbookControllers.controller('LiveMarketsController', ['$rootScope', '$scope', 'Events', 'liveEventService',
		function ($rootScope, $scope, Events, liveEventService) {

			$scope.markets = [];
			$scope.matchTitle = '';

			this.getOdds = function (data) {
				$scope.markets = data;
			}

			liveEventService.getEventDetails().then(function (data) {
				if (!_.isNull(data) && !_.isUndefined(data.odds))
					this.getOdds(data.odds);
					$scope.matchTitle = data.title;
			});

			this.addToBetslip = function (oddId, oddValue, oddName, marketName) {
				var objBet = {
					'id': oddId,
					'value': oddValue,
					'name': oddName,
					'matchTitle': $scope.matchTitle,
					'market': marketName
				};

				$rootScope.$broadcast(Events.BET_DETAILS, objBet);
			};


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