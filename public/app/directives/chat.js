'use strict';

ecomm.directive('chat', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/views/chat/index.html',
    controller: ['$scope', '$http', function($scope, $http) {
      var socket = io();
      $scope.messages = [];

      $http.get('/account').then(function(res) {
        $scope.user = res.data;
      });

      socket.on('new message', function(message) {
        $scope.messages.push(message);
        $scope.$apply();
      });

      socket.on('all messages', function(messages) {
        $scope.messages = messages;
      });

      $scope.pushMessage = function(e) {
        e.preventDefault();
        socket.emit('new message', {user: $scope.user, content: $scope.message, createdAt: new Date()});
        $scope.message = '';
      };

      $scope.isFromCurrentUser = function(message) {
        return message.user.username === $scope.user.username;
      };

      $scope.$on('$destroy', function() {
        socket.close();
      });
    }]
  };
});
