'use strict';

angular
    .module('CoursesModule')

        .controller('CourseShowCtrl', function ($scope, $timeout, $mdDialog) {

            $scope.title = 'Course Show';

            var self = this;

            self.selectedDate = new Date();



        }) // end of .controller

; // end of file

