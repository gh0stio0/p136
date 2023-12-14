video=""
status1=""
function preload(){
    video=createVideo('video.mp4')
    video.hide()
}
function setup(){
    canvas=createCanvas(480,380)
    canvas.center()
}
function draw(){
    image(video,0,0,480,380)
}
function start(){
    objectDetector=ml5.objectDetector("cocossd" , ModelLoaded)
    document.getElementById("status").innerHTML="Status; Detecting Objects"
}
function ModelLoaded(){
    console.log("Model Has Been Loaded")
    status1="true"
}