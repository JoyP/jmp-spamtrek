(function(){
  'use strict';

  angular.module('jmp-spamtrek')
  .controller('MainCtrl', ['$scope', function($scope){
    $scope.title = 'Spam Trek';
    var game     = null;

    //document.addEventListener('deviceready', function(){
    //  game = new Game();
    //});

    $scope.start = function(){
      game = new Game();
      game.start();
    };

  }]);
})();
