let video
let posenet
let pose

function setup() {
  createCanvas(400, 400);
  video=createCapture(VIDEO);
  video.hide();
  posenet=ml5.poseNet(video,modelReady);
  posenet.on('pose',gotPoses);
}

function gotPoses(poses){
 // console.log(poses)
 if(poses.length>0){ 
   pose=poses[0].pose;
}
 
}
function modelReady(){
console.log("model is ready")
}
function draw() {
  
  image(video,0,0);
  if(pose){
  
    
    fill(50,50,200)
    ellipse(pose.nose.x,pose.nose.y,15)
    ellipse(pose.leftAnkle.x,pose.leftAnkle.y,15)
    ellipse(pose.leftKnee.x,pose.leftKnee.y,15)
    ellipse(pose.leftWrist.x,pose.leftWrist.y,15)
    ellipse(pose.leftElbow.x,pose.leftElbow.y,15)
    ellipse(pose.leftHip.x,pose.leftHip.y,15)
    ellipse(pose.leftShoulder.x,pose.leftShoulder.y,15)
    ellipse(pose.leftEye.x,pose.leftEye.y,15)
    ellipse(pose.leftEar.x,pose.leftEar.y,15)

    ellipse(pose.rightAnkle.x,pose.rightAnkle.y,15)
    ellipse(pose.rightKnee.x,pose.rightKnee.y,15)
    ellipse(pose.rightWrist.x,pose.rightWrist.y,15)
    ellipse(pose.rightElbow.x,pose.rightElbow.y,15)
    ellipse(pose.rightHip.x,pose.rightHip.y,15)
    ellipse(pose.rightShoulder.x,pose.rightShoulder.y,15)
    ellipse(pose.rightEye.x,pose.rightEye.y,15)
    ellipse(pose.rightEar.x,pose.rightEar.y,15)
    
    strokeWeight(4)
    stroke(250,0,0)
    
    
  line(pose.nose.x,pose.nose.y,pose.leftEye.x,pose.leftEye.y)
  line(pose.nose.x,pose.nose.y,pose.rightEye.x,pose.rightEye.y)
  
  x_middle=(pose.leftShoulder.x + pose.rightShoulder.x)/2
  y_middle=(pose.leftShoulder.y + pose.rightShoulder.y)/2
  
  line(pose.nose.x,pose.nose.y,x_middle,y_middle)
   
  line(pose.leftShoulder.x,pose.leftShoulder.y,pose.rightShoulder.x,pose.rightShoulder.y)
  line(pose.leftShoulder.x,pose.leftShoulder.y,pose.leftElbow.x,pose.leftElbow.y)
    line(pose.leftElbow.x,pose.leftElbow.y,pose.leftWrist.x,pose.leftWrist.y)
    line(pose.rightShoulder.x,pose.rightShoulder.y,pose.rightElbow.x,pose.rightElbow.y)
    line(pose.rightElbow.x,pose.rightElbow.y,pose.rightWrist.x,pose.rightWrist.y)
    
    line(pose.leftHip.x,pose.leftHip.y,pose.rightHip.x,pose.rightHip.y)
    line(pose.rightShoulder.x,pose.rightShoulder.y,pose.rightHip.x,pose.rightHip.y)
    line(pose.rightHip.x,pose.rightHip.y,pose.rightKnee.x,pose.rightKnee.y)
    line(pose.rightKnee.x,pose.rightKnee.y,pose.rightAnkle.x,pose.rightAnkle.y)
    
    line(pose.leftShoulder.x,pose.leftShoulder.y,pose.leftHip.x,pose.leftHip.y)
    
    line(pose.leftHip.x,pose.leftHip.y,pose.leftKnee.x,pose.leftKnee.y)
    line(pose.leftKnee.x,pose.leftKnee.y,pose.leftAnkle.x,pose.leftAnkle.y)

  }
}