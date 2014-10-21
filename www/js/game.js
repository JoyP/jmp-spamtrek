/* exported Game */
/* global Asset, Spam, SafeZone */

var Game = (function(){
  'use strict';

  function Game(){
    var bodyHeight   = window.innerHeight,
        headerHeight = document.getElementsByTagName('ion-header-bar')[0].clientHeight;

    this.canvas        = document.getElementById('canvas');
    this.ctx           = this.canvas.getContext('2d');
    this.canvas.height = bodyHeight - headerHeight;
    this.canvas.width  = window.innerWidth;
    this.assets        = Asset.load();
    this.inMailbox     = false;
    this.wrap          = false;

    this.listen();
  }

  Game.prototype.listen = function(){
    window.addEventListener('deviceorientation', function(data){
      this.spam.update(data);
    }.bind(this));
  };

  Game.prototype.loop = function(timestamp){
    this.clear();
    this.spam.draw(this);
    this.safeZone.draw(this);
  };

  Game.prototype.clear = function(){
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
  };

  Game.prototype.start = function(){
    this.spam = new Spam(this);
    this.spam.draw(this);

    this.safeZone = new SafeZone(this);
    this.safeZone.draw(this);
  };

  return Game;
})();
