var canvas;

var beamBg;
var rider01;
var rider02;
var rider03;

var riderArr = [];
var rider01Obj = {};
var rider02Obj = {};

var snapDistance = 30;
var dist0 = 81;
var dist100 = 180;
var dist200 = 280;
var dist300 = 378;
var dist400 = 477;

var weightValue = document.querySelector("#weightValue");

// var mx = mouseX;
// var my = mouseY;

function preload() {
    beamBg = loadImage('/images/beam-bg.png');
    rider01 = loadImage('/images/rider01.png');
    rider02 = loadImage('/images/rider02.png');
}

function setup() {
    canvas = createCanvas(558, 271);
    rider01Obj = {
        X: 32,
        Y: 14,
        W: rider01.width,
        H: rider01.height,
        El: rider01,
        multiplier:100,
        value: 0
    }

    rider02Obj = {
        X: 32,
        Y: 108,
        W: rider02.width,
        H: rider02.height,
        El: rider02,
        multiplier:10,
        value: 0
    }

    riderArr.push(rider01Obj);
    riderArr.push(rider02Obj);

}

function draw() {
    background(255);

    image(beamBg, 0, 0);
    image(rider01Obj.El, rider01Obj.X, rider01Obj.Y);
    image(rider02Obj.El, rider02Obj.X, rider02Obj.Y);

}

function mouseDragged() {

    riderArr.forEach((riderObj)=>{
        if (
            mouseX >= riderObj.X &&
            mouseX <= riderObj.X + riderObj.W &&
            mouseY >= riderObj.Y &&
            mouseY <= riderObj.Y + riderObj.H
        ) {
            if (riderObj.X < 32 || mouseX - riderObj.W / 2 < 32) {
                riderObj.X = 32;
            } else if (riderObj.X + riderObj.W > 526 || mouseX + riderObj.W / 2 > 526) {
                riderObj.X = 526 - riderObj.W;
            } else {
                riderObj.X = mouseX - riderObj.W / 2;
            }
        }
    })


    

    //rider02Obj.X = mouseX;
}

function mouseReleased() {

    riderArr.forEach((riderObj)=>{
        // 0 (top) selection
        if (Math.abs((riderObj.X + riderObj.W / 2) - dist0) < snapDistance) {
            riderObj.X = dist0 - riderObj.W / 2;
            riderObj.value = 0;
        }

        // 100 selection
        if (Math.abs((riderObj.X + riderObj.W / 2) - dist100) < snapDistance) {
            riderObj.X = dist100 - riderObj.W / 2;
            riderObj.value = 1*riderObj.multiplier;
        }

        // 200 selection
        if (Math.abs((riderObj.X + riderObj.W / 2) - dist200) < snapDistance) {
            riderObj.X = dist200 - riderObj.W / 2;
            riderObj.value = 2*riderObj.multiplier;
        }

        // 300 selection
        if (Math.abs((riderObj.X + riderObj.W / 2) - dist300) < snapDistance) {
            riderObj.X = dist300 - riderObj.W / 2;
            riderObj.value = 3*riderObj.multiplier;
        }

        // 400 selection
        if (Math.abs((riderObj.X + riderObj.W / 2) - dist400) < snapDistance) {
            riderObj.X = dist400 - riderObj.W / 2;
            riderObj.value = 4*riderObj.multiplier;
        }
    })
    

    calcTotal(rider01Obj.value, rider02Obj.value)
}

function calcTotal(rider01, rider02) {
    weightValue.innerHTML = rider01+rider02;

}


//  // 0 (top) selection
//  if (Math.abs((rider01Obj.X + rider01Obj.W / 2) - dist0) < snapDistance) {
//     rider01Obj.X = dist0 - rider01Obj.W / 2;
//     rider01Obj.value = 0;
// }

// // 100 selection
// if (Math.abs((rider01Obj.X + rider01Obj.W / 2) - dist100) < snapDistance) {
//     rider01Obj.X = dist100 - rider01Obj.W / 2;
//     rider01Obj.value = 100;
// }

// // 200 selection
// if (Math.abs((rider01Obj.X + rider01Obj.W / 2) - dist200) < snapDistance) {
//     rider01Obj.X = dist200 - rider01Obj.W / 2;
//     rider01Obj.value = 200;
// }

// // 300 selection
// if (Math.abs((rider01Obj.X + rider01Obj.W / 2) - dist300) < snapDistance) {
//     rider01Obj.X = dist300 - rider01Obj.W / 2;
//     rider01Obj.value = 300;
// }

// // 400 selection
// if (Math.abs((rider01Obj.X + rider01Obj.W / 2) - dist400) < snapDistance) {
//     rider01Obj.X = dist400 - rider01Obj.W / 2;
//     rider01Obj.value = 400;
// }