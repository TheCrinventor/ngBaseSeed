angular.module('Base')
.service('dataService',['$q','$http','$rootScope','$cookies',dataService])

dataService.$inject = ['$q','$http','$rootScope','$cookies'];

function dataService($q,$http,$rootScope,$cookies) {
    
    return {
        get: get,
        post:post,
        sign_in: sign_in
    };
    
    function get(api)
    {
        var deferred = $q.defer();
        $http.get(api).success(function (data, status, headers, config) {
        if (data.Data === undefined)
        {
            console.log('Status: ' + status);
            deferred.reject(status);
        }
        else{
            console.log('Status: ' + status);
            console.log('Data: ' + data);
            deferred.resolve(data);
        }
        
        
        }).error(function (data, status, headers, config) {
            console.log('Status: ' + status);
            deferred.reject(status);
        });

        return deferred.promise;
    }
    
    function sign_in(email,password){
        var userData = {
            email: email,
            password: password
        };
        
        post('http://api.investsavvy.in:81/v1/auth/sign_in',userData).then(function(data){
            if(data.headers == undefined || data.status != 200){
            console.log('************* NOT AUTHORIZED***************');

            }
            else
            {
                $cookies.putObject('RequestHeaders',data.headers);
                console.log('From Cookies: ');
                console.log($cookies.getObject('RequestHeaders'));
            }
        })
    }
    
    function sign_out(){
        $cookies.remove('RequestHeaders');
    }
    
    function post(api,params){
        var deferred = $q.defer();
        $http.post(api,params).success(function (data, status, headers, config) {
            if(data === undefined){
                console.log('Status: ' + status);
                deferred.reject(status);
            }
            else{
                deferred.resolve({ body: data,headers: headers(), status: status});
            }
        
        }).error(function(data,status,headers,config){
            console.log('Status: ' + status);
            deferred.reject(status);            
        })
        return deferred.promise;
    }
    
}