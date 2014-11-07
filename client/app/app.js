'use strict';

angular.module('app', ['btford.socket-io']).
    factory('socket', function (socketFactory) {
      return socketFactory();
    });
