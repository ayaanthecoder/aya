leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
peterpan_song="";
harrypotter_song="";
harrypotter_song_status="";
peterpan_song_status="";
function setup(){
     canvas= createCanvas(500,550);
     canvas.center();

     video=createCapture(500,550)
     video.hide();

     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0)
    {
console.log(results);
scoreLeftWrist=results[0].pose.keypoints[9].score;
scoreRightWrist=results[0].pose.keypoints[10].score;
console.log(scoreLeftWrist);


leftWristX= results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("leftWristX = "+ leftWristX+ "leftWristY = " + leftWristY);
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("rightWristX = "+ rightWristX+ "rightWristY = " + rightWristY);}}

function preload()
{
peterpan_song=loadSound("peterpan_song");
harrypotter_song=loadSound("harrypotter_song");
}

function play(){
    song.play();
    song.setVolme(1)
    song.rate(1)
}

function draw(){
    image(video,0,0,500,550);
    stroke("#FF0000");
    fill( "#FF0000");
 peterpan_song_status=peterpan_song.isPlaying();
 harrypotter_song_status=harrypotter_song;
 if(scoreLeftWrist > 0.2);}{

    circle(leftWristX,leftWristY,20);
    harrypotter_song_status.stop();
    if(peterpan_song==false){
        peterpan_song.play();
        document.getElementById("playd").innerHTML="Playing Peter Pan Song";
    }

     if(scoreRightWrist>0,2);{
         circle(rightWristX,rightWristY,20)
         peterpan_song_status.stop();
         if(harrypotter_song==false){
             harrypotter_song.play();
             document.getElementById("playd").innerHTML="Playing Harry Potter Song";
         }
     }

}

function modelLoaded(){
    console.log('Posenet is Initialized');
}


