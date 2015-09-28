'use strict';

angular.module('utnProyectoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      });
  });
