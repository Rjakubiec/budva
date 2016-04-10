'use strict';

var Budva = angular.module('BudvaTrip',
[
    'ngRoute',
    'angularFblogin'
])
.config(
    function ($routeProvider) 
    {

        $routeProvider
            .when('/', {
                templateUrl: 'index.html',
                controller: 'BudvaCtrl'
            });
});



