// 即時関数で囲って他のプログラムに影響を与えないようにしつつ、use strict キーワードで厳密なエラーチェックをすることが推奨されているので、
(function(){
  'use strict';

  var open = document.getElementById('open');
  var close = document.getElementById('close');
  var modal = document.getElementById('modal');
  var mask = document.getElementById('mask');

  open.addEventListener('click', function () {
    modal.className = '';
    mask.className = '';
  })

  close.addEventListener('click', function () {
    modal.className = 'hidden';
    mask.className = 'hidden';
  })

  mask.addEventListener('click', function () {
    // modal.className = 'hidden';
    // mask.className = 'hidden';
    close.click();
  })

})();