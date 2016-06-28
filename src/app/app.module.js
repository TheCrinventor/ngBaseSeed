(function() {
    'use strict';

    var app = angular.module('Base', ['ui.router','videoplayer']);
    
    app.config(['$stateProvider', '$urlRouterProvider','$httpProvider',function($stateProvider,$urlRouterProvider,$httpProvider){
        
        var interceptor = ['$injector', '$window', function ($injector, $window) {
                return {
                    'request': function (requestSuccess) {
                        if(!(+(requestSuccess.url).indexOf('html') > -1))
                                $httpProvider.defaults.headers.common['api_password'] = 'b5ee1a0da248c63ac5867f9ab780e862a4fde1100eb0c5c94d29d7557bc35063';
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
