'use strict';

angular
    .module('CoursesModule')

        .controller('CoursesListCtrl', function ($scope, $timeout, $mdDialog) {

            $scope.title = 'TURNS LIST';


 $scope.people = [
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

