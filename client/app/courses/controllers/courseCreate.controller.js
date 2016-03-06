'use strict';

angular
    .module('CoursesModule')

        .controller('CourseCreateCtrl', function (
          $q, $state, $scope, $timeout, $mdDialog, $mdToast,
          StudentsService, CoursesService
        ) {

            var self = this;

            self.filterSelected = true;

            StudentsService.getAll()
            .then(function(result) {
              self.students = result.data;
            });

            CoursesService.getAll()
            .then(function(result) {
              self.courses = result.data;
            });

            self.course = {
              students: []
            };

            /*====== $mdChips search-autocomplete ======*/
            self.querySearch = function(list, query) {
              var results = query ?
                  list.filter(self.createFilterFor(query)) : [];
              return results;
            };

            self.createFilterFor = function(query) {
              var lowercaseQuery = angular.lowercase(query);
              return function filterFn(item) {
                return (item.lastname.indexOf(lowercaseQuery) !== -1);
              };
            };

            self.newCourse = function() {
              self.selectedCourse = undefined;
            };

            self.saveCourse = function() {
              CoursesService.create(self.course)
              .then(function(result){
                  var _promises = [];
                  var course = result.data;
                  self.course.students.forEach(function(student) {
                      var studentPromise = $q.defer();
                      _promises.push(studentPromise.promise);
                      student.course = course._id;

                      StudentsService.update(student)
                      .then(function() {
                          studentPromise.resolve(true);
                      });
                  });

                  $q.all(_promises).then(function() {
                    $mdToast.show($mdToast.simple().position('top right').hideDelay(2000).content('Curso creado correctamente'));
                    $timeout(function() {
                        $state.go('app.main');
                    }, 1500);
                  });
              });
            };

            self.updateCourse = function() {
              CoursesService.update(self.selectedCourse)
              .then(function(result){
                  var _promises = [];
                  var course = result.data;
                  self.selectedCourse.students.forEach(function(student) {
                      var studentPromise = $q.defer();
                      _promises.push(studentPromise.promise);
                      student.course = course._id;

                      StudentsService.update(student)
                      .then(function() {
                          studentPromise.resolve(true);
                      });
                  });

                  $q.all(_promises).then(function() {
                    $mdToast.show($mdToast.simple().position('top right').hideDelay(2000).content('Curso actualizado correctamente'));
                    $timeout(function() {
                        $state.go('app.main');
                    }, 1500);
                  });
              });
            };

            self.deleteCourse = function() {
              CoursesService.delete(self.selectedCourse._id)
              .then(function(){
                  $mdToast.show($mdToast.simple().position('top right').hideDelay(2000).content('Curso eliminado'));
                  $timeout(function() {
                      $state.go('app.main');
                  }, 1500);
              });
            };

        }) // end of .controller

; // end of file

