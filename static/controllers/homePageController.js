angular.module('homePageController.module',[]).controller('homePageController', function($scope,$location,$http, $cookies){

  	$scope.adminLoggedIn = ($cookies.get("is_admin") === "true");
    $scope.user = $cookies.get("email");



    $scope.user = $cookies.get("email");

    $scope.getFood=function(){
      $http({
        method : "POST",
        url : "/getFoodHomePage",
        data :{"email" : $scope.user}
          // data : {"email" : email, "password" : password}
      }).then(function mySuccess(response) {
        console.log(response.data)

        $scope.foodData = response.data;

        $scope.datetimeArr = []
        $scope.calArr = []
        for(i=0;i<$scope.foodData.length;i++){
          $scope.datetimeArr.push($scope.foodData[i].date_time)
          $scope.calArr.push($scope.foodData[i].sum)
        }
        console.log($scope.datetimeArr);
        console.log($scope.calArr);

          var ctx = document.getElementById("TotalCalories").getContext('2d');
        	var TotalCalories = new Chart(ctx, {
        		type: 'line',
        		data: {
        			labels: $scope.datetimeArr,//["10/10", "10/11","10/12", "10/13", "10/14", "10/15", "10/16"],
        			datasets: [{
        				label: 'Calories', // Name the series
        				data: $scope.calArr, //[500, 1200, 2500, 1600, 1700, 2000, 1400 ], // Specify the data values array
        				fill: false,
        				borderColor: '#ffc107', // Add custom color border (Line)
        				backgroundColor: '#ffc107', // Add custom color background (Points and Fill)
        				borderWidth: 2, // Specify bar border width
        				Color: '#ffffff'
        			}]},
        		options: {
        			responsive: true, // Instruct chart js to respond nicely.
        			maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
        			scales: {
        				xAxes: [{
        					gridLines: {
        						display:false, //disable gridlines

        					}
        				}],
        				yAxes: [{
        					gridLines: {
        						display:false //disable gridlines

        					}
        				}]
        			},
        			title: {
        				display: true,
        				text: 'Total Calories Consumption of Last 7 Days',
        				fontSize: '18.72',
        				fontColor: "#343a40"
        			}
        		}
        	});




      }, function myError(response) {
        console.log(response);
      });
    }

    $scope.getFood()


    $scope.getCaloriesBurned=function(){
      $http({
        method : "POST",
        url : "/getCaloriesBurnedHomePage",
        data :{"email" : $scope.user}
          // data : {"email" : email, "password" : password}
      }).then(function mySuccess(response) {
        console.log(response.data)

        $scope.foodData = response.data;

        $scope.datetimeArr = []
        $scope.calArr = []
        for(i=0;i<$scope.foodData.length;i++){
          $scope.datetimeArr.push($scope.foodData[i].date_time)
          $scope.calArr.push($scope.foodData[i].sum)
        }
        console.log($scope.datetimeArr);
        console.log($scope.calArr);

        var ctx2 = document.getElementById("TotalCaloriesBurned").getContext('2d');

      var TotalCaloriesBurned = new Chart(ctx2, {
        type: 'line',
        data: {
          labels: $scope.datetimeArr,
          datasets: [{
            label: 'Calories', // Name the series
            data: $scope.calArr, // Specify the data values array
            fill: false,
            borderColor: '#dc3545', // Add custom color border (Line)
            backgroundColor: '#dc3545', // Add custom color background (Points and Fill)
            borderWidth: 2, // Specify bar border width
            Color: '#ffffff'
          }]},
        options: {
          responsive: true, // Instruct chart js to respond nicely.
          maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
          scales: {
            xAxes: [{
              gridLines: {
                display:false, //disable gridlines

              }
            }],
            yAxes: [{
              gridLines: {
                display:false //disable gridlines

              }
            }]
          },
          title: {
            display: true,
            text: 'Total Calories Burned of Last 7 Days',
            fontSize: '18.72',
            fontColor: "#343a40"
          }
        }
      });




      }, function myError(response) {
        console.log(response);
      });
    }

    $scope.getCaloriesBurned()













	// $scope.getMaxCapacity=function(){
	// 	$http({
	// 		method : "POST",
	// 		url : "/getMaxCapacity"
	// 	}).then(function mySuccess(response) {
	// 		$scope.max_capacity = response.data;
	// 	}, function myError(response) {
	// 		console.log(response);
	// 	});
	// }
	// $scope.getMaxCapacity();



  //
  //
	// $scope.gotoDogDetails = function(dogid){
	// 	$cookies.put("activeDogId", dogid);
	// 	$location.path("/dogDetails");
	// }
  //
	// $scope.gotoAddDogPage = function(dogid){
	// 	$location.path("/addDog");
	// }
  //
	// $scope.gotoAddApplicationPage = function(dogid){
	// 	$location.path("/addApplication");
	// }
  //
	// $scope.gotoReviewApplicationsPage = function(dogid){
	// 	$location.path("/approveApplications");
	// }


    $scope.getAppointments=function(){
    	$http({
    		method : "POST",
  			  url : "/getAppointmentsHomePage",
  			  data :{"email" : $scope.user}
    			// data : {"email" : email, "password" : password}
    	}).then(function mySuccess(response) {
  	  console.log(response.data)
        $scope.appointmentsData = response.data;

    	}, function myError(response) {
    		console.log(response);
    	});
    }

$scope.getAppointments();


$scope.getarticles=function(){
  $http({
    method : "POST",
      url : "/getarticles",
      data :{"email" : $scope.user}
      // data : {"email" : email, "password" : password}
  }).then(function mySuccess(response) {
  console.log(response.data)

    function chunk(arr, size) {
      var newArr = [];
      for (var i=0; i<arr.length; i+=size) {
        newArr.push(arr.slice(i, i+size));
      }
      return newArr;
    }

    $scope.chunkedData = chunk(response.data, 3);
    console.log($scope.chunkedData);
    
  }, function myError(response) {
    console.log(response);
  });
}

$scope.getarticles();





	$scope.logout = function(dogid){
		$cookies.remove("email");
		$cookies.remove("is_admin");
		$location.path("/");
	}
});
