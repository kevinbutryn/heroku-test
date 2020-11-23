angular.module('viewCalendarController.module',[]).controller('viewCalendarController', function($scope,$location,$http, $cookies){
    $scope.user = $cookies.get("email");
    console.log("In Calandar Page");
    $scope.getAppointments=function(){
        $http({
            method : "POST",
                url : "/getAppointments",
                data :{"email" : $scope.user}
                // data : {"email" : email, "password" : password}
        }).then(function mySuccess(response) {
            console.log(response.data)
            var events = [];
            for(i=0;i<response.data.length;i++){
                
                events.push({
                    start: response.data[i].date_time,
                    title: response.data[i].app_type.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) + " With " + response.data[i].name_doctor.replace(/(^\w|\s\w)/g, m => m.toUpperCase()),
                    description: "Appointment Type: "+ response.data[i].app_type.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) + " <br> " + "Doctor: "+ response.data[i].name_doctor.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) + "<br>" + "Location: " + response.data[i].location_app.replace(/(^\w|\s\w)/g, m => m.toUpperCase()),
                    backgroundColor: "hsl(" + 360 * Math.random() + ',' + (25 + 70 * Math.random()) + '%,' + (85 + 10 * Math.random()) + '%)'
                });
            }
           

            $('#calendar').fullCalendar({
                eventRender: function(eventObj, $el) {
                    $el.popover({
                      title: eventObj.title,
                      content: eventObj.description,
                      html: true,
                      trigger: 'hover',
                      placement: 'top',
                      container: 'body'
                    });
                },
                events: events
            });
        }, function myError(response) {
            console.log(response);
        });
    }
  
    $scope.getAppointments()

    $scope.logout = function(dogid){
      $cookies.remove("email");
      $cookies.remove("is_admin");
      $location.path("/");
    }

    /* $(document).ready(function() {
        


        // Fetch our events
        $.ajax({
            url: "https://data.oregon.gov/resource/yid5-c4eq.json",
          method: "GET",
          datatype: "json",
          data: {
            "$where" : "start_date_time > '" + moment().subtract(31, 'days').format("YYYY-MM-DDT00:00:00") + "'",
            "city" : "Portland",
            "$order" : "start_date_time DESC"
          }
        }).done(function(response) {
          // Parse our events into an event object for FullCalendar
          var events = [];
          $.each(response, function(idx, e) {
            events.push({
              start: e.start_date_time,
              end: e.end_date_time,
              title: e.meeting_title,
              url: e.web_link
            });
          });
          $('#calendar').fullCalendar({
            events: events
          });
        });
      }); */
});
