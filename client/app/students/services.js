'use strict';

angular
    .module('StudentsModule')

        .factory('StudentsService', function($resource, $http) {
            var APIurl = 'http://localhost:9000/api';
            var studentsService = {};

            studentsService.getAll = function() {
                return $http.get(APIurl + '/students');
            };

            studentsService.get = function(id) {
                return $http.get(APIurl + '/students/' + id);
            };

            studentsService.create = function(body) {
                return $http.post(APIurl + '/students', body);
            };

            studentsService.delete = function(id) {
                return $http.delete(APIurl + '/students/' + id);
            };

            studentsService.update = function(body) {
                return $http.put(APIurl + '/students', body);
            };

            return studentsService;

        }) // end of .service

; // end of file.
