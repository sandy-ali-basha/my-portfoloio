
var $circle = $('.cursor');

function moveCircle(e) {
	TweenLite.to($circle, 3, {
    x: e.pageX,
    y: e.pageY,
    ease: Elastic.easeOut.config(1, 0.3)
  });
}

function stickCircle(e) {
  TweenLite.set($circle, {
    x: e.pageX,
    y: e.pageY
  });
}

$(window).on( 'mousemove', moveCircle);
$(window).on( 'mousewheel', stickCircle);
