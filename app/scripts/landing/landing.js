(function () {
	
	'use strict';

	/**
	 * @ngdoc function
	 * @name aranaxApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the aranaxApp
	 */

	var Landing = angular.module('landing', []);

	Landing.config(['$urlRouterProvider', '$stateProvider', 
		function($urlRouterProvider, $stateProvider) { 

	    $urlRouterProvider.when('', '/dashboard');

		$stateProvider.state('layout', {
			abstract: true,
			templateUrl: 'scripts/landing/layout.html'
		});

	}]);
	
	Landing.controller('LandingController', function ($scope, $state, houses) {
		$scope.houses = houses;
		$scope.viewDetail = function () {
			$state.go('detail');
		};
	});

	Landing.value('houses', [
			{
				name: 'Modulo 1A',
				temp: 22,
				soil: 50,
				light: 1.5,
				alerts: { 'soil': true }
			},
			{
				name: 'Modulo 1B',
				temp: 21,
				soil: 40,
				light: 2.5
			},
			{
				name: 'Modulo 1C',
				temp: 18,
				soil: 22,
				light: 0.8
			},
			{
				name: 'Modulo 2A',
				temp: 22,
				soil: 50,
				light: 1.5,
				alerts: { temp: true }
			},
			{
				name: 'Modulo 2B',
				temp: 21,
				soil: 40,
				light: 2.5
			},
			{
				name: 'Modulo 2C',
				temp: 18,
				soil: 22,
				light: 0.8,
				alerts: { temp: true, soil: true }
			}
		]
	);

}());