(function() {
    'use strict';

    var app = angular.module('Base', ['ui.router','videoplayer']);
    
    app.config(['$stateProvider', '$urlRouterProvider','$httpProvider',function($stateProvider,$urlRouterProvider,$httpProvider){
        
        var interceptor = ['$injector', '$window', function ($injector, $window) {
                return {
                    'request': function (requestSuccess) {
                       
                        return requestSuccess;
                    },
                    'responseError': function (rejection) {
                        return rejection;
                    },
                    'response': function (response) {
                        return response;
                    }
                };
            }];

            $httpProvider.interceptors.push(interceptor);
        
        $urlRouterProvider.otherwise('/home');
        
        $stateProvider
        .state('home',{
            url:'/home',
            controller: 'HomeController as home',
            templateUrl: 'app/views/home.html' 
            //template: '<span> THIS IS A TEST!! </span>' //'views/home.html''',
        });
        
    }]);
    
    app.run();
})();
