'use strict';

angular
    .module('AssistanceModule', [])

        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider

                // View
                .state('app.assistance[set]', {
                    url: '/assistanceSet',
                    templateUrl: 'app/assistance/views/setAssistance.html',
                    controller: 'AssistanceSetCtrl as assistanceSet'
                })

                // View
                .state('app.assistance[show]', {
                    url: '/assistanceShow',
                    templateUrl: 'app/assistance/views/showAssistance.html',
                    controller: 'AssistanceShowCtrl as assistanceShow'
                })

            ; // end of $stateProvider

        }) // end of .config

; // end of file


