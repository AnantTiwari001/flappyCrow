let canvas = document.getElementById("canvas");
let width= window.innerWidth;
let height=window.innerHeight;

canvas.width= width;
canvas.height= height;
let c = canvas.getContext("2d");

let bird= new Image();
let background= new Image();
let pipe= new Image();
let pipeup= new Image();

bird.src="flappyNoBackground.png";
background.src="download.png";
pipe.src="38-388476_flappy-bird-pipes-png-bottle.png";
pipeup.src="38-388476_flappy-bird-pipes-png-bottle2.png";

//I will rather draw the image with native function with Image() declearation ahead

// const bird = "flappyNoBackground.png";
// const background = "download.png";
// const pipe = "38-388476_flappy-bird-pipes-png-bottle.png";
// const pipeup = "38-388476_flappy-bird-pipes-png-bottle2.png";
// pipes dimention-- 244 x 1499 --width/ height --ratio --0.16277

// function draw(path, x, y, width1, height1) {
//   if (height1 && width1) {
//     var img = new Image();
//     img.addEventListener("load", function () {
//       c.drawImage(img, x, y, width1, height1);
//     });
//     img.src = path;
//   } else {
//     var img = new Image();
//     img.addEventListener("load", function () {
//       c.drawImage(img, x, y);
//     });
//     img.src = path;
//   }
// }

function clearScreen() {
  c.clearRect(0, 0, width, height);
}

function pipes(x, y) {
  this.x = x;
  this.y = y;
  this.gapY = 50;
  this.width = 20;
  this.height = parseInt(this.width / 0.1627751834556371);
  this.ydown = this.height + this.y + this.gapY;

  this.moveDraw = function () {
    // c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    c.clearRect(0,0,width,height);

    // draw(pipe, this.x, this.y, this.width, this.height);
    c.drawImage(pipe, this.x, this.y, this.width, this.height);
    // draw(pipeup, this.x, this.ydown, this.width, this.height);
    c.drawImage(pipeup, this.x, this.ydown, this.width, this.height);
    this.x= this.x-1;
    if (this.x<-120) {
      console.log('there goes the pipe way out of display and out of use!')
    }
  };
}
// let first= new pipes();

const pipeArray=[];
pipeArray.push(new pipes(1100, Math.random()*122*-1))

var randY= Math.random()*122*-1;



function animate(){
  requestAnimationFrame(animate);
  // first.moveDraw();
  // console.log('inside flappy bird the problematic one!');
  // for (var i = 0; i < pipeArray.length; i++) {
  //   pipeArray[i].moveDraw();

  // }
  // if (pipeArray[(pipeArray.length-1)].x<1000) {
  //   pipeArray.push(new pipes(1100, Math.random()*122*-1));
  // }
  // console.log(pipeArray)
}
// animate()


// clearScreen();
// c.clearRect(0, 0, innerWidth, innerHeight);