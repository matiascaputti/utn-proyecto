'use strict';

angular.module('utnProyectoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'ui.router',
  'ui.bootstrap',
  'ngMaterial',
  'duScroll',
  'angular-parallax',

  'CoursesModule',
  'StudentsModule',
  'AssistanceModule',

])

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $stateProvider
      .state('app', {
          url: '',
          abstract: true,
          templateUrl: 'app/main/views/abstract.html',
      })
    ;

    $urlRouterProvider
      .otherwise('/login');
    $httpProvider.interceptors.push('authInterceptor');
  })

  .config(function ($mdIconProvider, $mdThemingProvider) {
    // Angular-material Icons
    $mdIconProvider
      .iconSet('social', '../assets/images/iconsets/social-icons.svg', 24)
      .iconSet('device', '../assets/images/iconsets/device-icons.svg', 24)
      .iconSet('action', '../assets/images/iconsets/action-icons.svg', 24)
      .iconSet('content', '../assets/images/iconsets/content-icons.svg', 24)
      .iconSet('communication', '../assets/images/iconsets/communication-icons.svg', 24)
      .defaultIconSet('../assets/images/iconsets/core-icons.svg', 24);

    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey') // 'indigo'
      .accentPalette('green') // 'pink'
      .warnPalette('green') // red
      .backgroundPalette('grey'); // grey
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          event.preventDefault();
          $location.path('/login');
        }
      });
    });
  });
