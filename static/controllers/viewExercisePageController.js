angular.module('viewExercisePageController.module',['datatables']).controller('viewExercisePageController', function($scope,$location,$http, $cookies){


  console.log("in Exercise page");

  $scope.adminLoggedIn = ($cookies.get("is_admin") === "true");
  $scope.user = $cookies.get("email");



  $scope.getExercise=function(){
  	$http({
  		method : "POST",
  			url : "/getExercise",
  			data :{"email" : $scope.user}
  	}).then(function mySuccess(response) {
      console.log(response.data)

      $scope.exercise_data = response.data;

  	}, function myError(response) {
  		console.log(response);
  	});
  }

  $scope.getExercise()

	$scope.logout = function(){
		$cookies.remove("email");
		$cookies.remove("is_admin");
		$location.path("/");
	}
});
