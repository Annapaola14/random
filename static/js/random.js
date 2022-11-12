let w = 800;
let h = 800;

function setup() {
	createCanvas(w, h);
	background(200);
	frameRate(1000);
}

function draw() {

	let diametro = random(30, 90);
	let x = random(diametro / 2, w);
	let y = random(diametro / 2, h);

	let r = random(0, 256);
	let g = random(0, 256);
	let b = random(0, 256);
	let alpha = random(0, 256);

	fill(r, g, b, alpha);
	noStroke();
	circle(x, y, diametro);

	console.log(frameCount);
	if (frameCount === 1000) {
		background(200);
		frameCount=0
	}
}
