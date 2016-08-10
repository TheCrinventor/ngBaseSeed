angular.module('Base')
.controller('HomeController',['$state','$scope','dataService', function ($state,$scope,dataService){
        var vm = $scope;
        vm.getData = getData;
        vm.WelcomeMsg = 'Hello and welcome to Savvy';
        
        
        function getData(){
            dataService.get('http://api.investsavvy.in:81/v1/workflows').then(function(data){
                vm.stats = data;
                console.log(data);
            });
        }
        
    }]);