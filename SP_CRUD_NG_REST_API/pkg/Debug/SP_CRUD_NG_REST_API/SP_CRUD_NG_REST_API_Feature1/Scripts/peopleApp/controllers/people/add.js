"use strict";
(function () {
    angular.module("peopleApp")
		.controller("addPersonCtrl", ["$scope", "peopleService", "$location", function ($scope, peopleService, $location) {
		    $scope.addPerson = function (person) {
		        peopleService.addNew(person)
                .then(function (response) {
                    $location.path("/");
                });

		    };
		}]);
})();