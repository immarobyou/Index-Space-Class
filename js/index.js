var w = window.innerWidth;
var h = window.innerHeight;
let x = 1;
let y = 1;
let easing = 0.3;

function setup() {
	canvas = createCanvas(w, h);
	noStroke();
}

function draw() {
	let targetX = mouseX;
	let dx = targetX - x;
	x += dx * easing;

	let targetY = mouseY;
	let dy = targetY - y;
	y += dy * easing;

	let speed = abs(winMouseX - pwinMouseX);
	if (mouseIsPressed) {
		ellipse(x, y, 20, 20);
	} else {
		clear();
	}
}
