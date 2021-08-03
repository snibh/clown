function take_snapshot() {

save(my_clown_nose);

}
function preload() {



}
function setup() {

    Canvas = createCanvas(640,480);
    Canvas.center();
    video = createCapture(VIDEO);
    video.hide();

}
function draw() {

image(video,0,0,640,480);

}