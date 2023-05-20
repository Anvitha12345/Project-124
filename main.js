function setup(){

    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(600,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw(){
    background('#33cccc');
}

function preload(){


}

function modelLoaded(){

    console.log('Posenet is Initialized');
}

function gotPoses(results){

    if(results.length > 0){

        console.log(results);
    }
}


    
