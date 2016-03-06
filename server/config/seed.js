'use strict';

var User = require('../api/user/user.model');
var Course = require('../api/course/course.model');
var Student = require('../api/student/student.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    role: 'director',
    name: 'Director',
    email: 'director@director.com',
    password: 'director'
  }, {
    provider: 'local',
    role: 'preceptor',
    name: 'Preceptor',
    email: 'preceptor@preceptor.com',
    password: 'preceptor'
  },
  {
    provider: 'local',
    role: 'profesor',
    name: 'Profesor',
    email: 'profesor@profesor.com',
    password: 'profesor'
  },
  {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  )
});

  Course.find({}).remove(function() {
  Course.create({
    _id: '56db61f8fb82f7e111120001',
    year: '1',
    division: 'Economía'
  }, {
    year: '1',
    division: 'Sociales'
  },
  {
    year: '2',
    division: 'Economía'
  },
  {
    year: '3',
    division: 'Economía'
  },
  {
    year: '4',
    division: 'Sociales'
  },
  {
    year: '4',
    division: 'Economía'
  },
  {
    year: '5',
    division: 'Economía'
  },
  {
    year: '5',
    division: 'Sociales'
  },
  {
    year: '6',
    division: 'Sociales'
  }, function() {
      console.log('finished populating courses');
    }
  )
});

  Student.find({}).remove(function() {
  Student.create({
    course: '56db61f8fb82f7e111120001',
    firstname: 'Juan',
    lastname: 'Perez',
    dni: '34534634',
    address: '23 nº 3434'
  }, {
    course: '56db61f8fb82f7e111120001',
    firstname: 'Gonzalo',
    lastname: 'Muzzi',
    dni: '43636346',
    address: '52 nº 2352'
  },
  {
    course: '56db61f8fb82f7e111120001',
    firstname: 'Marcos',
    lastname: 'Luciano',
    dni: '45645343',
    address: '44 nº 1234'
  },
  {
    course: '56db61f8fb82f7e111120001',
    firstname: 'Simon',
    lastname: 'Basilo',
    dni: '98374534',
    address: '63 nº 235'
  },
  {
    course: '56db61f8fb82f7e111120001',
    firstname: 'Marzo',
    lastname: 'Gomez',
    dni: '645647547',
    address: '64 nº 234'
  }, function() {
      console.log('finished populating students');
    }
  )
});