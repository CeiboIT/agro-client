(function () {
	'use strict';

	var Sensors = angular.module('sensors', []);

	Sensors.config(['$stateProvider', function ($stateProvider) {

		$stateProvider.state('layout.sensors', {
			url: '/sensors',
			templateUrl: 'scripts/sensors/sensors.html',
			controller: 'SensorsController',
			controllerAs: 'sensors'
		});
	}]);

	Sensors.controller('SensorsController', [function () {
		var sensors = this;
		
		var getHours = function () {
			var i,
				hours = [];

			for (i = 0; i <= 23; i++) {
				hours.push(i);
			}
			return hours;
		};

		var getValues = function (seriesAmount, valuesAmount) {
			var values = [],
				i, j;

			function getRandomInt(min, max) {
 				return Math.floor(Math.random() * (max - min)) + min;
			}

			for (i = 1; i <= seriesAmount; i++) {
				var row = [];

				for (j = 1; j <= valuesAmount; j++) {
					row.push(getRandomInt(40, 50));
				}
				values.push(row);
			}
			return values;
		};
		sensors.labels = getHours();//['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
		sensors.series = ['Series A', 'Series B', 'Series C', 'Series D', 'Series E'];
		sensors.data = getValues(5, 24);
		// [
		//     [65, 59, 80, 81, 56, 55, 40],
		//     [28, 48, 40, 19, 86, 27, 90],
		//     [29, 42, 41, 19, 85, 20, 91],
		//     [22, 42, 42, 12, 82, 22, 92],
		//     [21, 48, 43, 19, 87, 22, 91],
		//   ];
		sensors.options = { 
			animation: true,
		    pointDot : false,
			// Number - Number of animation steps
    		animationSteps: 10,
   //  		scaleLabel: function (valuePayload) {
			//     return Number(valuePayload.value).toFixed.replace('.',',') + '$';
			// }
			scaleOverride: true,
    		scaleSteps: 10,
    		scaleStepWidth: Math.ceil(40/ 10),
    		scaleStartValue: 20
    	};
	}]);

}());