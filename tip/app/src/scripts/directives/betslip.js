tipicoSportsbookControllers.controller('BetslipController', ['$scope', 'Events',
		function ($scope, Events) {
			var vm = this;

			vm.inputBetValue = '0';
			vm.isKeypadVisible = true;
			vm.arrBets = [];
			vm.betsNumber = 0;
			vm.possibleGain = 0;

			$scope.$watch('vm.inputBetValue', function () {
				getPossibleGain();
			});

			$scope.$on(Events.BET_DETAILS, function (e, data) {
				vm.arrBets.push(data);
				vm.betsNumber = vm.arrBets.length;
				vm.inputBetValue = '0';
			});

			vm.getTotalOdds = function (arrBets) {
				var totalOdds = 0;
				arrBets.forEach(function (el) {
					var val = parseFloat((el.value).toString().replace(',', '.'));
					totalOdds += (val);
				});

				return totalOdds;
			};

			var getPossibleGain = function () {
				if (vm.inputBetValue !== '') {
					var gain = parseFloat(vm.inputBetValue) * vm.getTotalOdds(vm.arrBets);
					vm.possibleGain = gain;
					return gain;
				}
				return vm.possibleGain = 0;
			};

			vm.deleteBet = function (e, betId) {
				vm.arrBets.forEach(function (el, idx) {
					if (el.id === betId) {
						vm.arrBets.splice(idx, 1);
					}
				});
				vm.betsNumber = vm.arrBets.length;
				vm.possibleGain = getPossibleGain();

				if (vm.betsNumber === 0) {
					vm.inputBetValue = '0';
				}

				e.stopPropagation();
			};

			vm.setKeypadVisibility = function (e, isVisible) {
				vm.isKeypadVisible = isVisible;
				e.stopPropagation();
			};

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