// app.js
// create angular app

console.log("log1");



var FireUserDB = new Firebase("https://scorching-fire-509.firebaseio.com/UserDB");



var app = angular.module('myApp', ["firebase"]);

// create angular controller
app.controller('mainCtrl', function($scope, $firebaseArray) {

	var ref = new Firebase("https://scorching-fire-509.firebaseio.com/UserDB");

	$scope.errorOne = false;
	var query = ref.orderByChild("Score");
	$scope.messages = $firebaseArray(query);

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

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});