'use strict';

angular.module('AssistanceModule')
  .factory('testFactory', function ($resource) {
    return $resource('http://germancards-2v7svuu1.cloudapp.net:3000/topics', {},
    {
      get: {
        method: 'GET',
        params: {},
        isArray: true
      }
      });
  });
