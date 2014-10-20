var Asset = (function(){
  'use strict';

  function Asset(){
  }

  Asset.load = function(){
    var asset = {};

    asset.spam = new Image();
    asset.ball.src = 'img/mail.png';

    return asset;
  };

  return Asset;
})();
