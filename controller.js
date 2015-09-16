angular.module('eventApp')
.controller('formCtrl', ['eventFactory', '$scope', function(eventFactory, $scope){
	
	$scope.event = [];

	$scope.submitForm = function(form){
		eventFactory.createEvent(angular.copy(form), $scope.event);
		console.log($scope.event);
	}
} ])
;