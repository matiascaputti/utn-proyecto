'use strict';

angular
    .module('AssistanceModule')

        .controller('AssistanceSetCtrl', function ($timeout, testFactory, $mdDialog, $state) {

            var assistanceSet = this;


            testFactory.get().$promise.then(
                                            function(data) {
                                                console.log(data);
                                            });


            assistanceSet.open = function($event) {
                assistanceSet.status.opened = true;
            };

            assistanceSet.status = {
                opened: false
            };

            assistanceSet.user = "preceptor carlos";
            assistanceSet.selectedDate = new Date();

            assistanceSet.courses = [
                { name: 'Primero A', img: '../assets/images/book.png' },
                { name: 'Segundo B', img: '../assets/images/book.png' },
                { name: 'Tercero Economía', img: '../assets/images/book.png' },
                { name: 'Test 1', img: '../assets/images/book.png' },
                { name: 'Test 2', img: '../assets/images/book.png' },
                { name: 'Test 3', img: '../assets/images/book.png' },
                { name: 'Test 4', img: '../assets/images/book.png' },
                { name: 'Test 5', img: '../assets/images/book.png' },
                { name: 'Test 6', img: '../assets/images/book.png' }
            ];

            assistanceSet.students = [
                { name: 'Juan', surname:'Perez', img: '../assets/images/user.png' },
                { name: 'Ramón', surname: 'Díaz', img: '../assets/images/user.png' },
                { name: 'María', surname: 'Gómez', img: '../assets/images/user.png' },
                { name: 'test', surname: 'test', img: '../assets/images/user.png' },
                { name: 'test1', surname: 'test', img: '../assets/images/user.png' },
                { name: 'test2', surname: 'test', img: '../assets/images/user.png' }
            ];

            assistanceSet.saveActa = function() {
                $state.go('app.main');
                console.log("ACTA DATE: ", assistanceSet.selectedDate);
                console.log("STUDENT LIST", assistanceSet.students);
            };

        }) // end of .controller

; // end of file

