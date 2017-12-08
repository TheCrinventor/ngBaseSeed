(function() {
    'use strict';

    var app = angular.module('Base', ['ui.router']);
    
    app.config(['$stateProvider', '$urlRouterProvider','$httpProvider','$compileProvider',function($stateProvider,$urlRouterProvider,$httpProvider,$compileProvider){
        $compileProvider.preAssignBindingsEnabled(true);
        $urlRouterProvider.otherwise('/home');
        
        $stateProvider
        .state('home',{
            url:'/home',
            controller: 'HomeController as home',
            templateUrl: 'app/views/home.html' 
        });
        
    }]);
    
    app.run();
})();