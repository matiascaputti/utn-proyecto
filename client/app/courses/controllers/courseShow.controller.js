'use strict';

angular
    .module('CoursesModule')

        .controller('CourseShowCtrl', function (
            $scope, $stateParams, $timeout, $mdDialog,
            CoursesService, AssistanceDataService
        ) {
            var self = this;

            CoursesService.get($stateParams.courseId)
            .then(function(result) {
                self.course = result.data;
            });

            AssistanceDataService.getAll()
            .then(function(result) {
                self.assistanceDatas = result.data;

                self.courseAssistances = [];
                self.totalInassistance = 0;

                // get only this course assistances
                self.assistanceDatas.forEach(function(item) {
                    if (item.assistance.course._id === $stateParams.courseId) {
                        self.courseAssistances.push(item);
                    }
                });

                self.days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
                self.months = ['Marzo', 'Abril', 'Mayo', 'Junio',
                                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
                self.dayAssistanceTotal = [0, 0, 0, 0, 0, 0, 0];
                self.monthAssistanceTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

                self.courseAssistances.forEach(function(item) {
                    var itemDate = moment(item.assistance.date);
                    if (item.status === false) {
                        self.dayAssistanceTotal[itemDate.day()]++;
                        self.monthAssistanceTotal[itemDate.month()]++;
                        self.totalInassistance++;
                    }
                });
                self.dayAssistanceTotal = self.dayAssistanceTotal.slice(1,-1);
                self.monthAssistanceTotal = self.monthAssistanceTotal.slice(2);

                self.data1 = [self.dayAssistanceTotal];
                self.data2 = [self.monthAssistanceTotal];
            });

        }) // end of .controller

; // end of file

