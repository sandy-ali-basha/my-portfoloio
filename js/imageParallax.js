let wrap = document.getElementById('mousParallax');
let request = null;
let mouse = { x: 0, y: 0 };
let cx = window.innerWidth/5;
let cy = window.innerHeight/7;

document.querySelector('.mousParallax').addEventListener('mousemove', function(event) {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
cancelAnimationFrame(request);
request = requestAnimationFrame(update);
});

function update() {
    dx = mouse.x - cx;
    dy = mouse.y - cy;
    let tiltx = (dy / cy );
    let tilty = - (dx / cx);

TweenMax.to("#mousParallax img", 1, {x:-tilty*10 , y:-tiltx*10, rotation:0.01, ease:Power2.easeOut});
}

window.addEventListener('resize', function(event){
    window.innerWidth / 2;
    window.innerHeight / 2;
});