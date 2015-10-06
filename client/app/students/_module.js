'use strict';

angular
    .module('StudentsModule', [])

        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider

                // List stundents
                .state('app.students[list]', {
                    url: '/studentsList',
                    templateUrl: 'app/students/views/studentsList.html',
                    controller: 'StudentsListCtrl'
                })

                // Create stundent
                .state('app.students[create]', {
                    url: '/studentCreate',
                    templateUrl: 'app/students/views/studentCreate.html',
                    controller: 'StudentCreateCtrl'
                })

            ; // end of $stateProvider

        }) // end of .config

; // end of file


