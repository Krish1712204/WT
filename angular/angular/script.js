let x = angular.module("module1", []);
x.controller("mycontroller", function($scope) {
    $scope.arr = [];

    $scope.addtask = function() {
        let obj = {}
        obj.tname = $scope.tname;
        $scope.arr.push(obj);
    }
    $scope.deletetask = function(i) {
        $scope.arr.splice(i, 1);
    }

    $scope.edittask = function(i) {
        $scope.arr[i].tname = $scope.tname;
    }
})