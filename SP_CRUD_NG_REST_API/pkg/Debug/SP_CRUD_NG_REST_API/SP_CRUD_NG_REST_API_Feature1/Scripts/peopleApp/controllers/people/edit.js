"use strict";
(function () {
    angular.module("peopleApp")
		.controller("editPersonCtrl", ["$scope", "peopleService", "$routeParams", "$location",
			function ($scope, peopleService, $routeParams, $location) {
			    peopleService.getById($routeParams.personId)
                    .then(function (response) {
                        $scope.person = {
                            personId: response.d.ID,
                            firstName: response.d.FirstName,
                            lastName: response.d.LastName,
                            address: response.d.Address
                        };
                        $scope.editPerson = function (person) {
                            peopleService.update(person)
                            .then(function (response) {
                                $location.path("/");
                            });
                        };
                    });
			}]);
})();