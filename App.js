var app = angular.module("myApp", ["ngMaterial"]);

app.controller("myController", ['$scope', function ($scope) {




$scope.n1;
    $scope.add = function () {

      
    
      
      
        $scope.n1 = parseInt($scope.num1);
        $scope.n2 =parseInt($scope.num2);
        $scope.n3 = $scope.n1 + $scope.n2;
        alert($scope.n3);

       // alert.parseInt($scope.num1 + $scope.num2);

    }


    $scope.sub = function () {


        alert($scope.num1 - $scope.num2);

    }


    $scope.min = function () {


        alert($scope.num1 * $scope.num2);

    }

    $scope.divn = function () {


        alert($scope.num1 / $scope.num2);

    }

}]);

 



