var tipicoSportsbookControllers = angular.module('tipicoSportsbookControllers', []);
var abApp = angular.module('tipico-mobile-sportsbook',
	['ngRoute', 'live.event.service', 'tipicoSportsbookControllers']);

abApp.config(['$routeProvider', function ($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'views/live-bets.html',
			controller: 'MainController',
			resolve: {
				eventDetails: ['liveEventService', function (liveEventService) {
					return liveEventService.getEventDetails();
				}]
			}
		})
		.otherwise({redirectTo: '/'});

}]).constant('_', window._)
	.run([function () {

	}]);
