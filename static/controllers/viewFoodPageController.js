angular.module('viewFoodPageController.module',['datatables']).controller('viewFoodPageController', function($scope,$location,$http, $cookies){


  console.log("in food page");

  $scope.adminLoggedIn = ($cookies.get("is_admin") === "true");
  $scope.user = $cookies.get("email");


  $scope.getFood=function(){
  	$http({
  		method : "POST",
			url : "/getFood",
			data :{"email" : $scope.user}
  			// data : {"email" : email, "password" : password}
  	}).then(function mySuccess(response) {
      console.log(response.data)

      $scope.foodData = response.data;

  	}, function myError(response) {
  		console.log(response);
  	});
  }

  $scope.getFood()

	$scope.logout = function(){
		$cookies.remove("email");
		$cookies.remove("is_admin");
		$location.path("/");
	}
});
