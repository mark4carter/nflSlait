// app.js
// create angular app
var validationApp = angular.module('validationApp', []);

// create angular controller
validationApp.controller('mainController', function($scope) {

  // function to submit the form after all validation has occurred            
  $scope.submitForm = function(isValid) {
  
	console.log('um');
		
    // check to make sure the form is completely valid
    if (isValid) {
      console.log('our form is amazing');
    }

  };

});