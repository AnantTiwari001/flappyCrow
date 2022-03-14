let canvas = document.getElementById("canvas");
canvas.height = innerHeight;
canvas.width = innerWidth;
let c = canvas.getContext("2d");
let width = window.innerWidth;
let height = window.innerHeight;
let gap = 50;

const bird = "flappyNoBackground.png";
const background = "download.png";
const pipe = "38-388476_flappy-bird-pipes-png-bottle.png";
const pipeup = "38-388476_flappy-bird-pipes-png-bottle2.png";
// pipes dimention-- 244 x 1499 --width/ height --ratio --0.16277

function draw(path, x, y, width1, height1) {
  if (height1 && width1) {
    var img = new Image();
    img.addEventListener("load", function () {
      c.drawImage(img, x, y, width1, height1);
    });
    img.src = path;
  } else {
    var img = new Image();
    img.addEventListener("load", function () {
      c.drawImage(img, x, y);
    });
    img.src = path;
  }
}

function clearScreen() {
  c.clearRect(0, 0, width, height);
}

var xp = 1700;
function pipeMove() {
  // xp = xp - 5;
  let widthP = 20;
  let heightP = parseInt(widthP / 0.1627751834556371);
  let randomPosY = Math.random() * heightP * -1;
  let posYUp = heightP + randomPosY + 50;

  draw(pipe, xp, randomPosY, widthP, heightP);
  draw(pipeup, xp, posYUp, widthP, heightP);
  console.log("Is this repeating!");
  console.log(xp);

  // requestAnimationFrame(pipeMove);
  // console.log('the height of pipe the size thing is: should be 122.86885245901638 or near');
  // console.log(heightP);
  // console.log('\nthe y position of pipe should be between 0 and -height of pipe');
  // console.log(randomPosY);
  // console.log('\nthe y position of down pipe should be 50 more than y position of up pipe+ height of pipe');
  // console.log(posYUp);
}

xp= 1600;  
function animate() {
  // this shit is working on here okay bye
  //   console.log("This shit is inside the animation function to be writen continuously");
  xp= xp-1;
  pipeMove();
  // clearScreen();
  requestAnimationFrame(animate);
}
// animate()
