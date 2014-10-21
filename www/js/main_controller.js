/* global Game */

(function(){
  'use strict';

  angular.module('jmp-spamtrek')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    $scope.title = 'Spam Trek';

    var game     = null,
        timer    = null;

    resetClock();

    /*document.addEventListener('deviceready', function(){
      game = new Game();
    });*/

    $scope.start = function(){
      game = new Game();
      game.start();
      startClock();
    };

    window.addEventListener('gameover', function(){
      cancelTimer();
    });

    function startClock(){
      resetClock();
      cancelTimer();
      timer = $interval(function(){
        $scope.clock++;
      }, 1000);
    }

    function resetClock(){
      $scope.clock = 0;
    }

    function cancelTimer(){
      $interval.cancel(timer);
    }


  }]);
})();
