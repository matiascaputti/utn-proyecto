'use strict';

angular
    .module('AssistanceModule')

        .factory('AssistanceService', function($resource, $http) {
            var APIurl = 'http://localhost:9000/api';
            var assistancesService = {};

            assistancesService.getAll = function() {
                return $http.get(APIurl + '/assistances');
            };

            assistancesService.get = function(id) {
                return $http.get(APIurl + '/assistances/' + id);
            };

            assistancesService.create = function(body) {
                return $http.post(APIurl + '/assistances', body);
            };

            assistancesService.delete = function(id) {
                return $http.delete(APIurl + '/assistances/' + id);
            };

            assistancesService.update = function(body) {
                return $http.put(APIurl + '/assistances', body);
            };

            return assistancesService;

        }) // end of .service

; // end of file.
