"use strict";
(function () {
    angular.module("peopleApp")
	.factory("peopleService", ["baseSvc", function (baseService) {
	    var listEndPoint = '/_api/web/lists';
	    var getAll = function () {
	        var query = listEndPoint + "/GetByTitle('People')/Items?$select=ID,FirstName,LastName,Address";
	        return baseService.getRequest(query);
	    };
	    var addNew = function (person) {
	        var data = {
	            __metadata: { 'type': 'SP.Data.PeopleListItem' },
	            FirstName: person.firstName,
	            LastName: person.lastName,
	            Address: person.address
	        };
	        var url = listEndPoint + "/GetByTitle('People')/Items";
	        return baseService.postRequest(data, url);
	    };
	    var getById = function (personId) {
	        var query = listEndPoint + "/GetByTitle('People')/GetItemById(" + personId + ")?$select=ID,FirstName,LastName,Address";
	        return baseService.getRequest(query);
	    };
	    var update = function (person) {
	        var data = {
	            __metadata: { 'type': 'SP.Data.PeopleListItem' },
	            FirstName: person.firstName,
	            LastName: person.lastName,
	            Address: person.address
	        };
	        var url = listEndPoint + "/GetByTitle('People')/GetItemById(" + person.personId + ")";
	        return baseService.updateRequest(data, url);
	    };
	    var remove = function (personId) {
	        var url = listEndPoint + "/GetByTitle('People')/GetItemById(" + personId + ")";
	        return baseService.deleteRequest(url);
	    };
	    return {
	        getAll: getAll,
	        addNew: addNew,
	        getById: getById,
	        update: update,
	        remove: remove
	    };
	}]);
})();