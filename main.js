var song1 = "";
var song2 = "";
var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;

function preload(){
    song1 = loadSound("music.mp3");
    sond2 = loadSound("music2.mp3");
    song1.volume(1);
    song2.volume(1);
    song1.rate(1);
    song2.rate(1);
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet( video , modelloaded);
    poseNet.on("pose",gotPoses);

}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log("left wrist x ="+ leftWristX + ",left wrist y =" + leftWristY+ ".");
        console.log("right wrist x ="+ rightWristX + ",right wrist y =" + rightWristY + ".");
    }
}

function modelloaded(){
    console.log("model is loaded");
}

function draw(){
    image(video,0,0,600,500);
}