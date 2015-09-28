'use strict';

angular
    .module('StudentsModule', [])

        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider

                // View of topic dictionary
                .state('app.students[list]', {
                    url: '/studentsList',
                    templateUrl: 'app/students/views/studentsList.html',
                    controller: 'StudentsListCtrl'
                })

            ; // end of $stateProvider

        }) // end of .config

; // end of file


