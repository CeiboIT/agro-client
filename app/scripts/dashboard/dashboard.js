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

	Dashboard.controller('DashboardController', [ '$interval', 'AgroServerService', function ($interval, AgroServerService) {
		var dasboard = this;

		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
		}

		// $interval(function () {
		// 	dasboard.sensors = {
		// 		envTemp: getRandomInt(20,30),
		// 		light: getRandomInt(2,6),
		// 		soilHumedity: getRandomInt(40,80),
		// 		envHumedity: getRandomInt(40,80)
		// 	};
		// }, 3000);

		function _handlePromiseSuccess(result){
			var sensorsData = result.data;
			dasboard.sensors = {
				envTemp: sensorsData.env_tmp,
				light: sensorsData.lx,
				soilHumedity: sensorsData.soil_rh,
				envHumedity: sensorsData.env_rh
			};
		}

		function _handlePromiseError(e){
			console.log('ERROR', e); //:TODO
		}

		$interval(function () {
			var promise = AgroServerService.getSensorsData();
			promise.then(_handlePromiseSuccess, _handlePromiseError);			
		}, 2000);

	}]);

	Dashboard.factory('AgroServerService', ['$http', function($http){
		var _agroServerBaseUrl = 'http://192.168.1.109:3000/';

		function getSensorsData(){
			try{
				var promise = $http.get(_agroServerBaseUrl + 'sensors_data');
				return promise;
			}
			catch(e){
				console.log('Error al conectar con el servicio', e);
			}
		}

		return{
			getSensorsData: getSensorsData
		}

	}]);

} ());