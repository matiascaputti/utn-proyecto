'use strict';

angular
    .module('CoursesModule', [])

        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider

                // View of topic dictionary
                .state('app.courses[list]', {
                    url: '/coursesList',
                    templateUrl: 'app/courses/views/coursesList.html',
                    controller: 'CoursesListCtrl'
                })

            ; // end of $stateProvider

        }) // end of .config

; // end of file


