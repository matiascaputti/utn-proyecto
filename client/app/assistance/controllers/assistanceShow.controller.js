'use strict';

angular
    .module('AssistanceModule')

        .controller('AssistanceShowCtrl', function ($timeout, testFactory, $mdDialog) {

            var assistanceShow = this;


            testFactory.get().$promise.then(
                                            function(data) {
                                                console.log(data);
                                            });


            assistanceShow.open = function($event) {
                assistanceShow.status.opened = true;
            };

            assistanceShow.status = {
                opened: false
            };

            assistanceShow.user = "preceptor carlos";
            assistanceShow.selectedDate = new Date();

            assistanceShow.inassistance = [
                { name: '14/05/2015', img: '../assets/images/user.png', check: true },
                { name: '18/05/2015', img: '../assets/images/user.png', check: true, just: true },
                { name: '03/07/2015', img: '../assets/images/user.png' },
                { name: '21/07/2015', img: '../assets/images/user.png' }
            ];

            assistanceShow.saveActa = function() {
                console.log("ACTA DATE: ", assistanceShow.selectedDate);
                console.log("STUDENT LIST", assistanceShow.students);
            };

        }) // end of .controller

; // end of file

