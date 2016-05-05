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
                templateUrl: './view/budva.html',
                controller: 'BudvaCtrl'
            })
            .when('/mapa',{

                templateUrl: './view/mapa.html',
                controller: 'MapaCtrl'
            });
});



