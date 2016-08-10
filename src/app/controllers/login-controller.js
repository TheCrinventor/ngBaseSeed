angular.module('Base')
.controller('LoginController',['$state','$scope','dataService', function ($state,$scope,dataService){
        var vm = $scope;
        
        vm.username = '';
        vm.password = '';
        vm.sign_in = sign_in;
        
        function sign_in(user,pwd){
            dataService.sign_in(user,pwd).then(function(isAuthentic){
             if(isAuthentic)
                {
                    $state.go('home');
                }
                else
                {
                    console.log('*********UNATHORIZED USER**********');
                }   
                
            });
        }
}]);