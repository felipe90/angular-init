
/*
	my app js
*/
var app = angular.module('myApp', []);

app.controller('mainController', function ( $scope , $http) {
	

	$scope.items = ['1','2','3'];

	$scope.action = function () {
		console.log("sadasd");
		console.log($scope.inputText);
	}

});