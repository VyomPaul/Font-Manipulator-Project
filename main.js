function setup(){
    canvas = createCanvas();

    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet =  ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {

}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
    }
}


