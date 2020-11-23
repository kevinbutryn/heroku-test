angular.module('appointmentsPageController.module',['datatables']).controller('appointmentsPageController', function($scope,$location,$http, $cookies){


  console.log("in appointments page");

  $scope.adminLoggedIn = ($cookies.get("is_admin") === "true");
  $scope.user = $cookies.get("email");



  $scope.getAppointments=function(){
  	$http({
  		method : "POST",
			  url : "/getAppointments",
			  data :{"email" : $scope.user}
  			// data : {"email" : email, "password" : password}
  	}).then(function mySuccess(response) {
	  console.log(response.data)
      $scope.appointmentsData = response.data;

  	}, function myError(response) {
  		console.log(response);
  	});
  }

  $scope.getAppointments()

	$scope.logout = function(){
		$cookies.remove("email");
		$cookies.remove("is_admin");
		$location.path("/");
	}
	
	
});
