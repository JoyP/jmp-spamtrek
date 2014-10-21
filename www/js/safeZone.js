/* exported SafeZone */

var SafeZone = (function(){
  'use strict';

  function SafeZone(game){
    this.width    = game.canvas.width;
    this.height   = 30;
    this.x        = 0;
    this.y        = 30;
  }

  SafeZone.prototype.draw = function(game){
    game.ctx.rect(this.x, this.y, this.width, this.height);
  };

  return SafeZone;

})();
