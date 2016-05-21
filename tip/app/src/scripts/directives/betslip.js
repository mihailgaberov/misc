tipicoSportsbookControllers.controller('BetslipController', ['$scope', 'Events',
		function ($scope, Events) {

			$scope.arrBets = [];

			$scope.$on(Events.BET_DETAILS, function (e, data) {
				console.log(data);
				$scope.arrBets.push(data);
			});

			$scope.deleteBet = function (betId) {
				$scope.arrBets.forEach(function (el, idx) {
					if (el.id === betId) {
						$scope.arrBets.splice(idx, 1);
					}
				});
			};

			$scope.inputBetValue = '';


		}])
	.directive('betslip', function () {
		return {
			controller: 'BetslipController',
			controllerAs: 'vm',
			restrict: 'E',
			scope: {},
			templateUrl: 'views/betslip.html'
		};
	});