var canvas;

var beamBg;
var rider01;
var rider02;
var rider03;
var rider01X = 32;

// var mx = mouseX;
// var my = mouseY;

function preload(){
    beamBg=loadImage('/images/beam-bg.png');
    rider01 = loadImage('/images/rider01.png');
}

function setup(){
    canvas = createCanvas(558,271);

}

function draw(){
    background(255);
    image(beamBg,0,0);
    image(rider01,rider01X,14);
    //console.log(canvas.position());
    //console.log(rider01.width);
    // triangleArr.forEach((triangleEll)=>{
    //     triangle(triangleEll.x1, triangleEll.y1, triangleEll.x2, triangleEll.y2, triangleEll.x3, triangleEll.y3);
    // })
    
}

function mouseDragged(){
    rider01X = mouseX - 40;
    image(rider01, rider01X, 14);
    // triangleArr = [];
    // triangle01 = {
    //     x1 : mouseX - 9,
    //     y1 : 27,
    //     x2 : mouseX + 9,
    //     y2 : 27,
    //     x3 : mouseX,
    //     y3 : 45
    // }
    
    // triangleArr.push(triangle01);
}

function checkClick (rider){
    // if(
    //     mx <= rider.x
    // ){}
    
}