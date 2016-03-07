'use strict';

angular
    .module('AssistanceModule')

        .controller('AssistanceShowCtrl', function (
            $stateParams, $timeout, $mdDialog, StudentsService, AssistanceService, AssistanceDataService
        ) {

            var assistanceShow = this;

            StudentsService.get($stateParams.studentId)
            .then(function(response) {
                assistanceShow.student = response.data;
            });

            var reload = function() {
                AssistanceDataService.getAll()
                .then(function(response) {
                    assistanceShow.studentAssistance = _.where(response.data, {student: $stateParams.studentId});

                    assistanceShow.assistanceTrue = (_.where(response.data, {student: $stateParams.studentId, status: true}).length);
                    assistanceShow.assistanceFalse = (_.where(response.data, {student: $stateParams.studentId, status: false}).length);

                    assistanceShow.signTrue = (_.where(response.data, {student: $stateParams.studentId, status: false, signed: true}).length);
                    assistanceShow.signFalse = (_.where(response.data, {student: $stateParams.studentId, status: false, signed: false}).length);

                    assistanceShow.justTrue = (_.where(response.data, {student: $stateParams.studentId, status: false, justified: true}).length);
                    assistanceShow.justFalse = (_.where(response.data, {student: $stateParams.studentId, status: false, justified: false}).length);

                    assistanceShow.inassistance = _.where(response.data, {student: $stateParams.studentId, status: false});
                    assistanceShow.inassistancePerDay = [0, 0, 0, 0, 0, 0, 0];
                    assistanceShow.inassistance.forEach(function(item) {
                        assistanceShow.inassistancePerDay[moment(item.assistance.date).day()]++;
                    });

                    assistanceShow.inassistancePerMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    assistanceShow.inassistance.forEach(function(item) {
                        assistanceShow.inassistancePerMonth[moment(item.assistance.date).month()]++;
                    });

                    // graphs
                    assistanceShow.labels1 =["Asistencias", "Inasistencias"];
                    assistanceShow.data1 = [assistanceShow.assistanceTrue, assistanceShow.assistanceFalse];
                    assistanceShow.colors1 = ['#b9f6ca','#ff8a80'];

                    assistanceShow.labels2 =["Firmadas", "Sin firmar"];
                    assistanceShow.data2 = [assistanceShow.signTrue, assistanceShow.signFalse];
                    assistanceShow.colors2 = ['#777777','#eeeeee'];

                    assistanceShow.labels3 =["Jutificadas", "Sin justificar"];
                    assistanceShow.data3 = [assistanceShow.justTrue, assistanceShow.justFalse];
                    assistanceShow.colors3 = ['#e67e22','#eeeeee'];

                    assistanceShow.labels4 =["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
                    assistanceShow.data4 = [assistanceShow.inassistancePerDay];

                    assistanceShow.labels5 =["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                                            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
                    assistanceShow.data5 = [assistanceShow.inassistancePerMonth];
                });
            };
            reload();

            assistanceShow.printDiv = function(divName) {
                var printContents = document.getElementById(divName).innerHTML;
                var popupWin = window.open('', '_blank', 'width=650,height=500');
                popupWin.document.open();
                popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + printContents + '</body></html>');
                popupWin.document.close();
            };

            assistanceShow.changeJust = function(item) {
                item.justified = !item.justified;
                AssistanceDataService.update(item)
                .then(function() {
                    reload();
                });
            };

            assistanceShow.changeSign = function(item) {
                item.signed = !item.signed;
                AssistanceDataService.update(item)
                .then(function() {
                    reload();
                });
            };

        }) // end of .controller

; // end of file

