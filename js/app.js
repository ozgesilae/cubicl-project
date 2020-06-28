// create login app
var loginApp = angular.module('loginApp', []);

/*TEST*/
addUser("ozge","1234567");
/*******/
// create login form controller
loginApp.controller('loginFormController', function($scope) {
	// function to submit the form after all validation has occurred		
	$scope.submitForm = function(isValid, username, password) {
		if (isValid) { 
			// checks if username is in the database
			if(checkUser(username)){
				// checks if username and password are correct
				if(checkPassword(username, password)){
					alert('Successful!');
				}
			}
		}
	};
});

//create register app
var registerApp = angular.module('registerApp', []);

//create register form controller
registerApp.controller('registerFormController', function($scope){
	//function to submit the form after all validation has occurred
	$scope.submitForm = function(isValid, username, password) {
		if(isValid){
			// adds user to database.	
			db.addUser(username, password);
			alert('Successful.');
		}
	}
});