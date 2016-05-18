tipicoSportsbookControllers.controller('LiveMarketsController', ['$scope', 'Events', 'liveEventService',
		function ($scope, Events, liveEventService) {

			var vm = this;

			var arrOdds = [];

			function getOdds (data) {
				arrOdds = data;
				console.log('>>>> ', arrOdds);
			}

			liveEventService.getEventDetails().then(function (data) {
				if (!_.isNull(data) && !_.isUndefined(data.odds))
					getOdds(data.odds);
			});






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