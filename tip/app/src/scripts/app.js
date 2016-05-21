var tipicoSportsbookControllers = angular.module('tipicoSportsbookControllers', []);
var abApp = angular.module('tipico-mobile-sportsbook',
	['ngRoute', 'live.event.service', 'tipicoSportsbookControllers', 'foundation.common', 'foundation.offcanvas', 'bc.AngularKeypad']);

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

}]).constant('_', window._).config(function(KeypadConfigProvider) {
	KeypadConfigProvider.backspaceTemplate = '../img/icons/backspace.svg';
	KeypadConfigProvider.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0];
}).run([function () {

	}]);
