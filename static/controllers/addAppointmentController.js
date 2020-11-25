angular.module('addAppointmentController.module',[]).controller('addAppointmentController', function($timeout,$route,$scope,$location,$http, $cookies){


  console.log("in add Appointment page");

  $scope.user = $cookies.get("email");

  $scope.insertAppointment=function(){
	console.log($scope.date_time)
	var dates = new Date($scope.date_time).toLocaleString();
	console.log(dates)
	$http({
		method : "POST",
			url : "/insertAppointment",
			data : {"doctorsName" : $scope.doctorsName, "location" : $scope.location, "type" : $scope.type, "date_time" : new Date($scope.date_time).toLocaleString(); , "email" : $scope.user}
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
	$scope.successMessage = " Appointment added successfully!!";
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
