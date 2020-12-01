angular.module('router.module',[]).config(function ($routeProvider) {
	$routeProvider

		// We are going to define routes,
		// controllers and templates associated
		// with these routes.
		// You can change these but make sure
		// you know what you are doing
		//

		// main route
		//
		.when('/',
		{
			controller: 'loginPageController',
			templateUrl: 'static/views/loginPage.html'
		})

		.when('/homePage',
		{
			controller: 'homePageController',
			templateUrl: 'static/views/homePage.html'
		})

		.when('/appointments',
		{
			controller: 'appointmentsPageController',
			templateUrl: 'static/views/appointmentsPage.html'
		})

		.when('/addFood',
		{
			controller: 'addFoodController',
			templateUrl: 'static/views/addFood.html'
		})

		.when('/addExercise',
		{
			controller: 'addExerciseController',
			templateUrl: 'static/views/addExercise.html'
		})

		.when('/addAppointment',
		{
			controller: 'addAppointmentController',
			templateUrl: 'static/views/addAppointment.html'
		})
		.when('/viewFood',
		{
			controller: 'viewFoodPageController',
			templateUrl: 'static/views/viewFood.html'
		})

		.when('/viewExercise',
		{
			controller: 'viewExercisePageController',
			templateUrl: 'static/views/viewExercise.html'
		})
		.when('/viewCalendar',
		{
			controller: 'viewCalendarController',
			templateUrl: 'static/views/viewCalendar.html'
		})

		.when('/dashboard',
		{
			controller: 'dashboardController',
			templateUrl: 'static/views/dashboard.html'
		})

		.when('/articles',
		{
			controller: 'articlesController',
			templateUrl: 'static/views/articles.html'
		})

		// if non of the above routes
		// are matched we are setting router
		// to redirect to the RootController
		.otherwise({ redirectTo: '/'});

})

.config(function ($httpProvider){
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
