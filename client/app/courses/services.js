'use strict';

angular
    .module('CoursesModule')

        .factory('CoursesService', function($resource, $http) {
            var APIurl = 'http://localhost:9000/api';
            var coursesService = {};

            coursesService.getAll = function() {
                return $http.get(APIurl + '/courses');
            };

            coursesService.get = function(id) {
                return $http.get(APIurl + '/courses/' + id);
            };

            coursesService.create = function(body) {
                return $http.post(APIurl + '/courses', body);
            };

            coursesService.delete = function(id) {
                return $http.delete(APIurl + '/courses/' + id);
            };

            coursesService.update = function(body) {
                return $http.put(APIurl + '/courses', body);
            };

            return coursesService;

        }) // end of .service

; // end of file.
