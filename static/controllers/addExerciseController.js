angular.module('addExerciseController.module',[]).controller('addExerciseController', function($timeout,$route,$scope,$location,$http, $cookies){


  console.log("in add Exercise page");

  $scope.user = $cookies.get("email");

  $scope.insertExercise=function(){

	var obj = JSON.parse($scope.exerciseName)
	var calories = Math.round(obj.caloriesburnedperhour * $scope.duration)
	
	//console.log(calories)
	$http({
		method : "POST",
			url : "/insertExercise",
			data : {"exerciseName" : obj.exercise_name, "duration" : $scope.duration,  "date" : $scope.date , "email" : $scope.user, "caloriesburned" : calories.toString()}
	}).then(function mySuccess(response) {
	console.log(response.data)
	if(response.data){
		$scope.pageReload();	
	}else{
		$scope.errormsg = true;
	  }


	}, function myError(response) {
		console.log(response);
	});
}

	$http({
		method : "POST",
			url : "/getExerciseCalories"
			
	}).then(function mySuccess(response) {	
	$scope.ExerciseInfo = response.data


	}, function myError(response) {
		console.log(response);
	});


// page reload function
$scope.pageReload= function(){
	$scope.successMessage = " Exercise Added Successfully!!";
	$scope.successMessagebool = true;
	$timeout(function() { 
		$route.reload();
	}, 2000);
}

	$scope.logout = function(){
		$cookies.remove("email");
		$cookies.remove("is_admin");
		$location.path("/");
	}
});
