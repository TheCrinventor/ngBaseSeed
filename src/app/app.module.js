(function() {
    'use strict';

    var app = angular.module('Base', ['ui.router','ngCookies']);
    
    app.config(['$stateProvider', '$urlRouterProvider','$httpProvider',function($stateProvider,$urlRouterProvider,$httpProvider){
        
        var interceptor = ['$injector', '$window','$cookies', function ($injector, $window,$cookies) {
                return {
                    'request': function (requestSuccess) {
                       if(!(+(requestSuccess.url).indexOf('html') > -1) && !(+(requestSuccess.url).indexOf('sign_in') > -1))
                        {
                            var auth = $cookies.getObject('RequestHeaders');
                        
                        $httpProvider.defaults.headers.common = {};
                        $httpProvider.defaults.headers.common['access-token'] = auth['access-token'];
                        $httpProvider.defaults.headers.common['client'] = auth['client'];
                        $httpProvider.defaults.headers.common['expiry'] = auth['expiry'];
                        $httpProvider.defaults.headers.common['token-type'] = auth['token-type'];
                        $httpProvider.defaults.headers.common['uid'] = auth['uid'];
                        
                        }
                                
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
