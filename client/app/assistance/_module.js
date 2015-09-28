'use strict';

angular
    .module('AssistanceModule', [])

        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider

                // View of topic dictionary
                .state('app.assistance[set]', {
                    url: '/assistanceSet',
                    templateUrl: 'app/assistance/views/setAssistance.html',
                    controller: 'AssistanceSetCtrl'
                })

            ; // end of $stateProvider

        }) // end of .config

; // end of file


