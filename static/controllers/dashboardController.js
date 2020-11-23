angular.module('dashboardController.module',[]).controller('dashboardController', function($scope,$location,$http, $cookies){


    // console.log("in dashboard Page");

    $scope.adminLoggedIn = ($cookies.get("is_admin") === "true");
    $scope.user = $cookies.get("email");


    $scope.timeSelector = "alltime";

    $scope.getDashboardCaloriesConsumed=function(){
      $http({
        method : "POST",
        url : "/getDashboardCaloriesConsumed",
        data :{"email" : $scope.user,
                "type" : "total",
                "timePeriod": $scope.timeSelector}
          // data : {"email" : email, "password" : password}
      }).then(function mySuccess(response) {
        // console.log(response.data)

        $scope.foodData = response.data;

        $scope.datetimeArr = []
        $scope.calArr = []
        for(i=0;i<$scope.foodData.length;i++){
          $scope.datetimeArr.push($scope.foodData[i].date_time)
          $scope.calArr.push($scope.foodData[i].sum)
        }
            var TotalCaloriesChart = document.getElementById("TotalCalories").getContext('2d');
            var TotalCalories = new Chart(TotalCaloriesChart, {
                type: 'line',
                data: {
                    labels: $scope.datetimeArr,
                    datasets: [{
                        label: 'Calories', // Name the series
                        data: $scope.calArr,//[500, 1200, 2500, 1600, 1700, 2000, 1400, 1420, 1500, 1400, 500, 1200, 2500, 1600, 1700, 2000, 1400, 1420, 1500, 1400, 500, 1200, 2500, 1600, 1700, 2000, 1400, 1420, 1500, 1400 ], // Specify the data values array
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
                        text: 'Total Calories Consumption',
                        fontSize: '18.72',
                        fontColor: "#343a40"
                    }
                }
            });


      }, function myError(response) {
        // console.log(response);
      });
    }


        $scope.getDashboardCaloriesConsumedBreakfast=function(){
          $http({
            method : "POST",
            url : "/getDashboardCaloriesConsumed",
            data :{"email" : $scope.user,
                    "type" : "breakfast",
                    "timePeriod": $scope.timeSelector}
              // data : {"email" : email, "password" : password}
          }).then(function mySuccess(response) {
            // console.log(response.data)

            $scope.foodData = response.data;

            $scope.datetimeArr = []
            $scope.calArr = []
            for(i=0;i<$scope.foodData.length;i++){
              $scope.datetimeArr.push($scope.foodData[i].date_time)
              $scope.calArr.push($scope.foodData[i].sum)
            }


                var TotalCaloriesBreakfastChart = document.getElementById("TotalCaloriesBreakFast").getContext('2d');
                var TotalCaloriesBreakfast = new Chart(TotalCaloriesBreakfastChart, {
                    type: 'line',
                    data: {
                        labels: $scope.datetimeArr,//["10/1", "10/2","10/3", "10/4", "10/5", "10/6", "10/7", "10/8", "10/9", "10/10", "10/11", "10/12", "10/13", "10/14", "10/15", "10/16", "10/17", "10/18", "10/19", "10/20", "10/21", "10/22","10/23", "10/24", "10/25", "10/26", "10/27", "10/28", "10/29", "10/30"],
                        datasets: [{
                            label: 'Calories', // Name the series
                            data: $scope.calArr,//[500, 1200, 2500, 1600, 1700, 2000, 1400, 1420, 1500, 1400, 500, 1200, 2500, 1600, 1700, 2000, 1400, 1420, 1500, 1400, 500, 1200, 2500, 1600, 1700, 2000, 1400, 1420, 1500, 1400 ], // Specify the data values array
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
                            text: 'Calories Consumption in BreakFast',
                            fontSize: '18.72',
                            fontColor: "#343a40"
                        }
                    }
                });


          }, function myError(response) {
            console.log(response);
          });
        }


          $scope.getDashboardCaloriesConsumedLunch=function(){
                  $http({
                    method : "POST",
                    url : "/getDashboardCaloriesConsumed",
                    data :{"email" : $scope.user,
                            "type" : "lunch",
                            "timePeriod": $scope.timeSelector}
                      // data : {"email" : email, "password" : password}
                  }).then(function mySuccess(response) {
                    // console.log(response.data)

                    $scope.foodData = response.data;

                    $scope.datetimeArr = []
                    $scope.calArr = []
                    for(i=0;i<$scope.foodData.length;i++){
                      $scope.datetimeArr.push($scope.foodData[i].date_time)
                      $scope.calArr.push($scope.foodData[i].sum)
                    }



                        var TotalCaloriesLunchChart = document.getElementById("TotalCaloriesLunch").getContext('2d');
                        var TotalCaloriesLunch = new Chart(TotalCaloriesLunchChart, {
                            type: 'line',
                            data: {
                                labels: $scope.datetimeArr,//["10/1", "10/2","10/3", "10/4", "10/5", "10/6", "10/7", "10/8", "10/9", "10/10", "10/11", "10/12", "10/13", "10/14", "10/15", "10/16", "10/17", "10/18", "10/19", "10/20", "10/21", "10/22","10/23", "10/24", "10/25", "10/26", "10/27", "10/28", "10/29", "10/30"],
                                datasets: [{
                                    label: 'Calories', // Name the series
                                    data: $scope.calArr,//[500, 1200, 2500, 1600, 1700, 2000, 1400, 1420, 1500, 1400, 500, 1200, 2500, 1600, 1700, 2000, 1400, 1420, 1500, 1400, 500, 1200, 2500, 1600, 1700, 2000, 1400, 1420, 1500, 1400 ], // Specify the data values array
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
                                    text: 'Calories Consumption in Lunch',
                                    fontSize: '18.72',
                                    fontColor: "#343a40"
                                }
                            }
                        });


                  }, function myError(response) {
                    console.log(response);
                  });
                }

  $scope.getDashboardCaloriesConsumedDinner=function(){
          $http({
            method : "POST",
            url : "/getDashboardCaloriesConsumed",
            data :{"email" : $scope.user,
                    "type" : "dinner",
                    "timePeriod": $scope.timeSelector}
              // data : {"email" : email, "password" : password}
          }).then(function mySuccess(response) {
            // console.log(response.data)

            $scope.foodData = response.data;

            $scope.datetimeArr = []
            $scope.calArr = []
            for(i=0;i<$scope.foodData.length;i++){
              $scope.datetimeArr.push($scope.foodData[i].date_time)
              $scope.calArr.push($scope.foodData[i].sum)
            }
              var TotalCaloriesDinnerChart = document.getElementById("TotalCaloriesDinner").getContext('2d');
              var TotalCaloriesDinner = new Chart(TotalCaloriesDinnerChart, {
                  type: 'line',
                  data: {
                      labels: $scope.datetimeArr,//["10/1", "10/2","10/3", "10/4", "10/5", "10/6", "10/7", "10/8", "10/9", "10/10", "10/11", "10/12", "10/13", "10/14", "10/15", "10/16", "10/17", "10/18", "10/19", "10/20", "10/21", "10/22","10/23", "10/24", "10/25", "10/26", "10/27", "10/28", "10/29", "10/30"],
                      datasets: [{
                          label: 'Calories', // Name the series
                          data: $scope.calArr,//[500, 1200, 2500, 1600, 1700, 2000, 1400, 1420, 1500, 1400, 500, 1200, 2500, 1600, 1700, 2000, 1400, 1420, 1500, 1400, 500, 1200, 2500, 1600, 1700, 2000, 1400, 1420, 1500, 1400 ], // Specify the data values array
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
                          text: 'Calories Consumption in Dinner',
                          fontSize: '18.72',
                          fontColor: "#343a40"
                      }
                  }
              });



          }, function myError(response) {
            console.log(response);
          });
        }

        $scope.getDashboardCaloriesConsumedSnack=function(){
                $http({
                  method : "POST",
                  url : "/getDashboardCaloriesConsumed",
                  data :{"email" : $scope.user,
                          "type" : "snack",
                          "timePeriod": $scope.timeSelector}
                    // data : {"email" : email, "password" : password}
                }).then(function mySuccess(response) {
                  // console.log(response.data)

                  $scope.foodData = response.data;

                  $scope.datetimeArr = []
                  $scope.calArr = []
                  for(i=0;i<$scope.foodData.length;i++){
                    $scope.datetimeArr.push($scope.foodData[i].date_time)
                    $scope.calArr.push($scope.foodData[i].sum)
                  }

                      var TotalCaloriesSnackChart = document.getElementById("TotalCaloriesSnack").getContext('2d');
                      var TotalCaloriesSnack = new Chart(TotalCaloriesSnackChart, {
                          type: 'line',
                          data: {
                              labels: $scope.datetimeArr,//["10/1", "10/2","10/3", "10/4", "10/5", "10/6", "10/7", "10/8", "10/9", "10/10", "10/11", "10/12", "10/13", "10/14", "10/15", "10/16", "10/17", "10/18", "10/19", "10/20", "10/21", "10/22","10/23", "10/24", "10/25", "10/26", "10/27", "10/28", "10/29", "10/30"],
                              datasets: [{
                                  label: 'Calories', // Name the series
                                  data: $scope.calArr,//[500, 1200, 2500, 1600, 1700, 2000, 1400, 1420, 1500, 1400, 500, 1200, 2500, 1600, 1700, 2000, 1400, 1420, 1500, 1400, 500, 1200, 2500, 1600, 1700, 2000, 1400, 1420, 1500, 1400 ], // Specify the data values array
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
                                  text: 'Calories Consumption in Snack',
                                  fontSize: '18.72',
                                  fontColor: "#343a40"
                              }
                          }
                      });


                }, function myError(response) {
                  console.log(response);
                });
              }




              $scope.getDashboardCaloriesBurned=function(){
                      $http({
                        method : "POST",
                        url : "/getDashboardCaloriesBurned",
                        data :{"email" : $scope.user,
                                "type" : "total",
                                "timePeriod": $scope.timeSelector}
                          // data : {"email" : email, "password" : password}
                      }).then(function mySuccess(response) {
                        // console.log(response.data)

                        $scope.foodData = response.data;

                        $scope.datetimeArr = []
                        $scope.calArr = []
                        for(i=0;i<$scope.foodData.length;i++){
                          $scope.datetimeArr.push($scope.foodData[i].date_time)
                          $scope.calArr.push($scope.foodData[i].sum)
                        }

                        var TotalCaloriesBurnedChart = document.getElementById("TotalCaloriesBurned").getContext('2d');

                        var TotalCaloriesBurned = new Chart(TotalCaloriesBurnedChart, {
                        type: 'line',
                        data: {
                            labels: $scope.datetimeArr,//["10/1", "10/2","10/3", "10/4", "10/5", "10/6", "10/7", "10/8", "10/9", "10/10", "10/11", "10/12", "10/13", "10/14", "10/15", "10/16", "10/17", "10/18", "10/19", "10/20", "10/21", "10/22","10/23", "10/24", "10/25", "10/26", "10/27", "10/28", "10/29", "10/30"],
                            datasets: [{
                            label: 'Calories', // Name the series
                            data: $scope.calArr,//[500, 1200, 2500, 1600, 1700, 2000, 1400, 1420, 1500, 1400, 500, 1200, 2500, 1600, 1700, 2000, 1400, 1420, 1500, 1400, 500, 1200, 2500, 1600, 1700, 2000, 1400, 1420, 1500, 1400 ], // Specify the data values array
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
                            text: 'Total Calories Burned',
                            fontSize: '18.72',
                            fontColor: "#343a40"
                            }
                        }
                        });


                      }, function myError(response) {
                        console.log(response);
                      });
                    }


                    $scope.getDashboardCaloriesDuration=function(){
                            $http({
                              method : "POST",
                              url : "/getDashboardCaloriesBurned",
                              data :{"email" : $scope.user,
                                      "type" : "duration",
                                      "timePeriod": $scope.timeSelector}
                                // data : {"email" : email, "password" : password}
                            }).then(function mySuccess(response) {
                              // console.log(response.data)

                              $scope.foodData = response.data;

                              $scope.datetimeArr = []
                              $scope.calArr = []
                              for(i=0;i<$scope.foodData.length;i++){
                                $scope.datetimeArr.push($scope.foodData[i].date_time)
                                $scope.calArr.push($scope.foodData[i].sum)
                              }


                                  var TotalDurationChart = document.getElementById("TotalDurationChart").getContext('2d');

                                  var TotalDuration = new Chart(TotalDurationChart, {
                                  type: 'line',
                                  data: {
                                      labels: $scope.datetimeArr,//["10/1", "10/2","10/3", "10/4", "10/5", "10/6", "10/7", "10/8", "10/9", "10/10", "10/11", "10/12", "10/13", "10/14", "10/15", "10/16", "10/17", "10/18", "10/19", "10/20", "10/21", "10/22","10/23", "10/24", "10/25", "10/26", "10/27", "10/28", "10/29", "10/30"],
                                      datasets: [{
                                      label: 'Duration in Hours', // Name the series
                                      data: $scope.calArr,//[50, 120, 25, 160, 170, 20, 140, 142, 100, 100, 50, 100, 200, 100, 100, 20, 140, 140, 100, 100, 50, 120, 200, 100, 170, 200, 140, 140, 150, 140 ], // Specify the data values array
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
                                      text: 'Total Duration of Excercise (In Hours.)',
                                      fontSize: '18.72',
                                      fontColor: "#343a40"
                                      }
                                  }
                                  });


                            }, function myError(response) {
                              console.log(response);
                            });
                          }
                          $scope.getDashboardEnergyBalance=function(){
                                  $http({
                                    method : "POST",
                                    url : "/getDashboardCaloriesBurned",
                                    data :{"email" : $scope.user,
                                            "type" : "energy",
                                            "timePeriod": $scope.timeSelector}
                                      // data : {"email" : email, "password" : password}
                                  }).then(function mySuccess(response) {
                                    // console.log(response.data)

                                    $scope.foodData = response.data;

                                    $scope.datetimeArr = []
                                    $scope.calArr = []
                                    for(i=0;i<$scope.foodData.length;i++){
                                      $scope.datetimeArr.push($scope.foodData[i].date_time)
                                      $scope.calArr.push($scope.foodData[i].energy)
                                    }


                                        var EnergyBalanceChart = document.getElementById("EnergyBalanceChart").getContext('2d');

                                        var EnergyBalance = new Chart(EnergyBalanceChart, {
                                        type: 'line',
                                        data: {
                                            labels: $scope.datetimeArr,//["10/1", "10/2","10/3", "10/4", "10/5", "10/6", "10/7", "10/8", "10/9", "10/10", "10/11", "10/12", "10/13", "10/14", "10/15", "10/16", "10/17", "10/18", "10/19", "10/20", "10/21", "10/22","10/23", "10/24", "10/25", "10/26", "10/27", "10/28", "10/29", "10/30"],
                                            datasets: [{
                                            label: 'Calories', // Name the series
                                            data: $scope.calArr,//[50, 120, 25, 160, 170, 20, 140, 142, 100, 100, 50, 100, 200, 100, 100, 20, 140, 140, 100, 100, 50, 120, 200, 100, 170, 200, 140, 140, 150, 140 ], // Specify the data values array
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
                                            text: 'Total Energy Balance',
                                            fontSize: '18.72',
                                            fontColor: "#343a40"
                                            }
                                        }
                                        });



                                  }, function myError(response) {
                                    console.log(response);
                                  });
                                }


            $scope.getDashboardTop5caloriesConsumedbreakfast=function(){
                    $http({
                      method : "POST",
                      url : "/getDashboardTop5caloriesConsumed",
                      data :{"email" : $scope.user,
                              "type" : "breakfast",
                              "timePeriod": $scope.timeSelector}
                        // data : {"email" : email, "password" : password}
                    }).then(function mySuccess(response) {
                      // console.log(response.data)

                      $scope.breakfastData = response.data;
                      //
                      // $scope.datetimeArr = []
                      // $scope.calArr = []
                      // for(i=0;i<$scope.foodData.length;i++){
                      //   $scope.datetimeArr.push($scope.foodData[i].date_time)
                      //   $scope.calArr.push($scope.foodData[i].energy)
                      // }




                    }, function myError(response) {
                      console.log(response);
                    });
                  }

      $scope.getDashboardTop5caloriesConsumedlunch=function(){
              $http({
                method : "POST",
                url : "/getDashboardTop5caloriesConsumed",
                data :{"email" : $scope.user,
                        "type" : "lunch",
                        "timePeriod": $scope.timeSelector}
                  // data : {"email" : email, "password" : password}
              }).then(function mySuccess(response) {
                // console.log(response.data)

                $scope.lunchData = response.data;
                //
                // $scope.datetimeArr = []
                // $scope.calArr = []
                // for(i=0;i<$scope.foodData.length;i++){
                //   $scope.datetimeArr.push($scope.foodData[i].date_time)
                //   $scope.calArr.push($scope.foodData[i].energy)
                // }




              }, function myError(response) {
                console.log(response);
              });
            }

            $scope.getDashboardTop5caloriesConsumeddinner=function(){
                    $http({
                      method : "POST",
                      url : "/getDashboardTop5caloriesConsumed",
                      data :{"email" : $scope.user,
                              "type" : "dinner",
                              "timePeriod": $scope.timeSelector}
                        // data : {"email" : email, "password" : password}
                    }).then(function mySuccess(response) {
                      // console.log(response.data)

                      $scope.dinnerData = response.data;
                      //
                      // $scope.datetimeArr = []
                      // $scope.calArr = []
                      // for(i=0;i<$scope.foodData.length;i++){
                      //   $scope.datetimeArr.push($scope.foodData[i].date_time)
                      //   $scope.calArr.push($scope.foodData[i].energy)
                      // }




                    }, function myError(response) {
                      console.log(response);
                    });
                  }




                $scope.getDashboardTop5caloriesConsumedsnack=function(){
                        $http({
                          method : "POST",
                          url : "/getDashboardTop5caloriesConsumed",
                          data :{"email" : $scope.user,
                                  "type" : "snack",
                                  "timePeriod": $scope.timeSelector}
                            // data : {"email" : email, "password" : password}
                        }).then(function mySuccess(response) {
                          // console.log(response.data)

                          $scope.snackData = response.data;
                          //
                          // $scope.datetimeArr = []
                          // $scope.calArr = []
                          // for(i=0;i<$scope.foodData.length;i++){
                          //   $scope.datetimeArr.push($scope.foodData[i].date_time)
                          //   $scope.calArr.push($scope.foodData[i].energy)
                          // }




                        }, function myError(response) {
                          console.log(response);
                        });
                      }






      $scope.getDashboardTop5exercisesCalories=function(){
              $http({
                method : "POST",
                url : "/getDashboardTop5exercises",
                data :{"email" : $scope.user,
                        "type" : "caloriesburned",
                        "timePeriod": $scope.timeSelector}
                  // data : {"email" : email, "password" : password}
              }).then(function mySuccess(response) {
                console.log(response.data)

                $scope.calorieburnedtop5 = response.data;


              }, function myError(response) {
                console.log(response);
              });
            }



        $scope.getDashboardTop5exercisesDuration=function(){
                $http({
                  method : "POST",
                  url : "/getDashboardTop5exercises",
                  data :{"email" : $scope.user,
                          "type" : "duration",
                          "timePeriod": $scope.timeSelector}
                    // data : {"email" : email, "password" : password}
                }).then(function mySuccess(response) {
                  console.log(response.data)

                  $scope.durationtop5 = response.data;

                }, function myError(response) {
                  console.log(response);
                });
              }

$scope.callAgain = function(){
      $scope.getDashboardCaloriesConsumed();
      $scope.getDashboardCaloriesConsumedBreakfast();
      $scope.getDashboardCaloriesConsumedLunch();
      $scope.getDashboardCaloriesConsumedDinner();
      $scope.getDashboardCaloriesConsumedSnack();
      $scope.getDashboardCaloriesBurned();
      $scope.getDashboardCaloriesDuration();
      $scope.getDashboardEnergyBalance();
      $scope.getDashboardTop5caloriesConsumedbreakfast();
      $scope.getDashboardTop5caloriesConsumeddinner();
      $scope.getDashboardTop5caloriesConsumedlunch();
      $scope.getDashboardTop5caloriesConsumedsnack();
      $scope.getDashboardTop5exercisesCalories();
      $scope.getDashboardTop5exercisesDuration();


}

$scope.callAgain();


    //////////////////////////   Fitness Charts  ////////////////////////////




    $scope.logout = function(){
        $cookies.remove("email");
        $cookies.remove("is_admin");
        $location.path("/");
    }
  });
