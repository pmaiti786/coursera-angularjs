(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.items = "";

        $scope.countItems = function () {
            $scope.message = "";
            if ($scope.items == "") {
                $scope.message = "Please enter data first";
                $scope.fontColor = "red";
                $scope.borderColor = "red";
            } else if ($scope.items.split(',').length > 3) {
                $scope.message = "Too much!";
                $scope.fontColor = "red";
                $scope.borderColor = "red";
            } else if ($scope.items.split(',').length > 0) {
                $scope.message = "Enjoy!";
                $scope.fontColor = "green";
                $scope.borderColor = "green";
            }
        }
    };

})();