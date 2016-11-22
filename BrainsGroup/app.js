/**
 * Created by malu on 13/11/16.
 */
var routerApp = angular.module('starter', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS
        .state('palestrante', {
            url: '/palestrante',
            templateUrl: 'palestrante.html',
            controller : "palestranteCtrl"
        });

});