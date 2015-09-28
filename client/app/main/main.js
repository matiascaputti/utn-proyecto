'use strict';

angular.module('utnProyectoApp')
  .config(function ($stateProvider) {
    $stateProvider

      .state('app.main', {
        url: '/index',
        templateUrl: 'app/main/views/main.html',
        controller: 'MainCtrl'
      })

      ;

  });
