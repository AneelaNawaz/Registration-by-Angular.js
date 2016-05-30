var app = angular.module("myApp", ["ngMaterial"]);

app.controller("myController", ['$scope', function ($scope) {
    
    $scope.user = {};
    $scope.users = [
      //  { "email": "a@a.com", "firstName": "ssd", "lname": "dsdsd", "psw": "a", "address": "fsfsf" } 
    ];

    $scope.login = {};

    $scope.signup = function () {
        console.log($scope.user);
        $scope.users.push($scope.user);
        $scope.user = {};
       // alert("Successfully registered");
    };   
    
    
    $scope.showLogin = true;
    $scope.sw = function () {
        $scope.showLogin = !$scope.showLogin;
    }
    
    
    
    $scope.login = function () {
        for (var i = 0; i < $scope.users.length; i++) {
                
            console.log( $scope.login.email ); 
                
            if ($scope.login.email == $scope.users[i].email && $scope.login.psw == $scope.users[i].psw) {

                alert("you loged in");
            }            
        
            // console.log("Not matched");
        }
        console.log("Not matched");
    }
}]);

