angular.module('Base')
.directive('box',function(){
   return{
    restrict:'E',
    replace: 'A',
    scope:{
        stage : "=stage"
        },
    templateUrl: '../app/views/box-view.html',
    controller: function(){},
    link: function($scope,element,attrs){
          $scope.stagename = attrs.name;
    }
       
   }
    
});