// app.js
// create angular app

console.log("log1");



var FireUserDB = new Firebase("https://scorching-fire-509.firebaseio.com/UserDB");



var app = angular.module('myApp', []);

// create angular controller
app.controller('mainCtrl', function($scope) {

	$scope.errorOne = false;

	$scope.submitForm = function() {

	  FireUserDB.orderByChild("UserID").on("child_added", function(snapshot) {
	  	if ($scope.username2 == snapshot.val().UserID) {
	  		if ($scope.password2 == snapshot.val().PassHash) {
	  			document.location.href = "./setForm.html"	  			
	  		} else {
	  			$scope.errorOne = true;
	  		}
	  	} else {	  		
				$scope.errorOne = true;
	  	}
	  });


  	//$scope.$digest();

		/*FireUserDB.once("value", function(data) {
			for ( var i = 0; i < data.val().length; i++) {
				if (data.val()[i].UserID == $scope.username2) {
					if (data.val()[i].PassHash == $scope.password2){
						document.location.href = "./setForm.html"
					}
				}
			}*/
	}

	$scope.registerBtn = function() {
		document.location.href = "./regForm.html"
	}

});

app.controller('regCtrl', function($scope) {
	$scope.submitReg = function() {
		//console.log($scope)

	  FireUserDB.push().set({
			FirstName: $scope.firstName,
			LastName: $scope.lastName,
			UserID: $scope.username,
			PassHash: $scope.passwordOne
	  }, function(err) {
	  	if(err) {
	  		console.log(err)
	  	} else {
	  		console.log("success");
	  		document.location.href="./setForm.html"
	  	}
	  })

	}
})