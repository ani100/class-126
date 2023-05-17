function preload() {

}

function setup() {

canvas = createCanvas(550,450);
canvas.position(480,270);
video = createCapture(VIDEO);
video.hide();

}

function draw() {

    background("black");
    image(video,10,10,530,430);
}
