angular.module('addFoodController.module',[]).controller('addFoodController', function($timeout,$route,$scope,$location,$http, $cookies){


  //console.log("in add food page");

  $scope.user = $cookies.get("email");

  $scope.insertFood=function(){
	$http({
		method : "POST",
			url : "/insertFood",
			data : {"foodName" : $scope.foodName, "calories" : $scope.calories, "servings" : $scope.servings, "date" : $scope.date , "time" : $scope.time , "email" : $scope.user}

	}).then(function mySuccess(response) {
	//console.log(response.data)
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
// page reload function
$scope.pageReload= function(){
	$scope.successMessage = " Food is Added Successfully!!";
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
