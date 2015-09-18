"use strict";
(function () {
    angular.module("peopleApp", ["ngRoute"])
		.config(["$routeProvider", function ($routeProvider) {
		    $routeProvider.when("/", {
		        templateUrl: "../Templates/people/all.html",
		        controller: "allPeopleCtrl"
		    }).when("/addPerson", {
		        templateUrl: "../Templates/people/add.html",
		        controller: "addPersonCtrl"
		    }).when("/editPerson/:personId", {
		        templateUrl: "../Templates/people/edit.html",
		        controller: "editPersonCtrl"
		    });
		}]);
})();