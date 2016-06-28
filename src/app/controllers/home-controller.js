angular.module('Base')
.controller('HomeController',['$state','$scope', function ($state,$scope){
        const vm = this;
        
        vm.WelcomeMsg = 'Hello and welcome to Music App.';
    
    }]);