describe('BetslipController:', function () {
	beforeEach(module('tipicoSportsbookControllers'));
	beforeEach(module('tipicoSportsbookServices'));

	var $controller, $rootScope;

	beforeEach(inject(function(_$controller_, _$rootScope_){
		$controller = _$controller_;
		$rootScope = _$rootScope_;
	}));

	it('should calculate total odds by summing the value property of all bets objects', function() {
		var $scope = $rootScope.$new();
		var controller = $controller('BetslipController', { $scope: $scope });

		var arrBets = [
			{'value': 1},
			{'value': 2}];


		var totalOdds = controller.getTotalOdds(arrBets);

		expect(totalOdds).toEqual(3);
	});

});