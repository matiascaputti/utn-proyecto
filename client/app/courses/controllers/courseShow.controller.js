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
                self.totalInnasistance = 0;

                // get only this course assistances
                self.assistanceDatas.forEach(function(item) {
                    if (item.assistance.course._id === $stateParams.courseId) {
                        self.courseAssistances.push(item);
                    }
                });

                self.days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
                self.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
                self.dayAssistanceTotal = [0, 0, 0, 0, 0, 0, 0];
                self.monthAssistanceTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

                self.courseAssistances.forEach(function(item) {
                    var itemDate = moment(item.assistance.date);
                    if (item.status === false) {
                        self.dayAssistanceTotal[itemDate.day()]++;
                        self.monthAssistanceTotal[itemDate.month()]++;
                        self.totalInnasistance++;
                    }
                });

                self.data1 = [self.dayAssistanceTotal];
                self.data2 = [self.monthAssistanceTotal];

                console.log(self.dayAssistanceTotal);
                console.log(self.monthAssistanceTotal);


            });

        }) // end of .controller

; // end of file

