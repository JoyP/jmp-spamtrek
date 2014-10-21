/* exported Spam */

var Spam = (function(){
  'use strict';

  function Spam(game){
    this.width    = 30;
    this.height   = 30;
    this.x        = Math.floor(Math.random() * (game.canvas.width - this.width));
    this.y        = Math.floor(Math.random() * (this.height * 2 - this.height) + this.height);
  }

  Spam.prototype.draw = function(game){
    game.ctx.drawImage(game.assets.spam, this.x, this.y, this.width, this.height);
  };

  Spam.prototype.update = function(orientation){
    console.log('orientation in spam.prototype.update>>>>', orientation);
    this.x += orientation.gamma;
    this.y += orientation.beta;
    this.cX = this.x + (this.width / 2);
    this.cY = this.y + (this.height / 2);
  };

  Spam.prototype.wrap = function(game){
    var isLeft = this.x <= this.width,
        isRight = this.x > game.canvas.width;

    return isLeft, isRight;
  };

  return Spam;

})();
