
var img, x1, y1, x2, y2, x3, y3, triangle01;
var triangleArr = [];

function preload(){
    img=loadImage('images/triple-beam-balance.png');
}

function setup(){
    createCanvas(640,480);
    image(img,0,0);

    triangle01 = {
        x1 : 54,
        y1 : 27,
        x2 : 72,
        y2 : 27,
        x3 : 63,
        y3 : 45
    }
    
    triangleArr.push(triangle01);
}

function draw(){
    background(255);
    image(img,0,0);
    triangleArr.forEach((triangleEll)=>{
        triangle(triangleEll.x1, triangleEll.y1, triangleEll.x2, triangleEll.y2, triangleEll.x3, triangleEll.y3);
    })
    
}

function mouseDragged(){
    triangleArr = [];
    triangle01 = {
        x1 : mouseX - 9,
        y1 : 27,
        x2 : mouseX + 9,
        y2 : 27,
        x3 : mouseX,
        y3 : 45
    }
    
    triangleArr.push(triangle01);
}
