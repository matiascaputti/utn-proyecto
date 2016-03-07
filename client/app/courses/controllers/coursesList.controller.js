'use strict';

angular
    .module('CoursesModule')

        .controller('CoursesListCtrl', function (
            $scope, $state, $timeout, $mdDialog, CoursesService
        ) {

            CoursesService.getAll()
            .then(function(result) {
                $scope.courses = result.data;
            });

            $scope.reportShow = function(courseId) {
                $state.go('app.courses[show]', {'courseId': courseId});
            };

        }) // end of .controller

; // end of file

