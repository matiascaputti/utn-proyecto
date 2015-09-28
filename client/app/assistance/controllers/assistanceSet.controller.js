'use strict';

angular
    .module('AssistanceModule')

        .controller('AssistanceSetCtrl', function ($scope, $timeout, $mdDialog) {



$scope.toppings = [
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

        }) // end of .controller

; // end of file

