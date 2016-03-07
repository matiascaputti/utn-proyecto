'use strict';

angular
    .module('StudentsModule')

        .controller('StudentsListCtrl', function (
            $scope, $state, $timeout, $mdDialog, StudentsService
        ) {

            StudentsService.getAll()
            .then(function(result) {
                $scope.students = result.data;
            });

            $scope.assistanceShow = function(id) {
                $state.go('app.assistance[show]', {'studentId': id});
            };

        }) // end of .controller

; // end of file