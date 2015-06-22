(function () {
	'use strict';

	var Dashboard = angular.module('dashboard', []);
	
	Dashboard.config(['$stateProvider', function($stateProvider) {

		$stateProvider.state('layout.dashboard', {
			url: '/dashboard',
			templateUrl: 'scripts/dashboard/dashboard.html',
			controller: 'DashboardController',
			controllerAs: 'dashboard'
		});

	}]);

	Dashboard.controller('DashboardController', [ '$interval', function ($interval) {
		var dasboard = this;

		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
		}

		$interval(function () {
			dasboard.sensors = {
				envTemp: getRandomInt(20,30),
				light: getRandomInt(2,6),
				soilHumedity: getRandomInt(40,80),
				envHumedity: getRandomInt(40,80)
			};
		}, 3000);

	}]);

} ());