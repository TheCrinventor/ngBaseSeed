angular.module('Base')
.controller('HomeController',['$state','$scope','dataService', function ($state,$scope,dataService){
        var vm = $scope;
        
        vm.username = '';
        vm.password = '';
        vm.sign_in = sign_in;
        vm.getData = getData;
        vm.WelcomeMsg = 'Hello and welcome to Savvy';
        
        function sign_in(user,pwd){
          dataService.sign_in(user,pwd);
        }
        
        //vm.sign_in('developer@getsavvy.in','developer123');
        //dataService.sign_in('developer@getsavvy.in','developer123');
        
        function getData(){
            dataService.get('http://api.investsavvy.in:81/v1/workflows').then(function(data){
                console.log(data);
            })
        }
    
    }]);