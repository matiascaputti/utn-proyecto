'use strict';

angular.module('utnProyectoApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {

    $scope.user = Auth.getCurrentUser();

  });
