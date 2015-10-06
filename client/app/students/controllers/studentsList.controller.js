'use strict';

angular
    .module('StudentsModule')

        .controller('StudentsListCtrl', function ($scope, $timeout, $mdDialog) {

            $scope.people = [
                { name: 'Juan Perez', img: '../assets/images/user.png' },
                { name: 'Ramón Diaz', img: '../assets/images/user.png' },
                { name: 'María Gómez', img: '../assets/images/user.png' },
                { name: 'Test 1', img: '../assets/images/user.png' },
                { name: 'Test 2', img: '../assets/images/user.png' },
                { name: 'Test 3', img: '../assets/images/user.png' },
                { name: 'Test 4', img: '../assets/images/user.png' },
                { name: 'Test 5', img: '../assets/images/user.png' },
                { name: 'Test 6', img: '../assets/images/user.png' }
            ];

            $scope.goToPerson = function(person, event) {
                $mdDialog.show(
                  $mdDialog.alert()
                    .title('Navigating')
                    .content('Inspect ' + person)
                    .ariaLabel('Person inspect demo')
                    .ok('Done')
                    .targetEvent(event)
                );
            };


        }) // end of .controller

; // end of file

