// create login app
var loginApp = angular.module('loginApp', []);

// create login form controller
loginApp.controller('loginFormController', function($scope) {
	// function to submit the form after all validation has occurred			
	$scope.submitForm = function(isValid) {
		// check to make sure the form is completely valid
		if (isValid) { 
			alert('Successful!!');
		}
	};
});