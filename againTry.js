// var run= true;
var xB = 100;
var yB = 200;
let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let bWidth= 26;
let bHeight= 35;

let gameOverH= document.getElementById('gameOver');
let restart= document.getElementById('restart');
restart.addEventListener('click', function() {
  location.reload();
})

let c = canvas.getContext("2d");

let game= true;

let bird = new Image();
let background = new Image();
let pipe = new Image();
let pipeup = new Image();
let ground = new Image();

bird.src = "images/bird.png";
background.src = "images/bg.png";
pipe.src = "images/pipeNorth.png";
pipeup.src = "images/pipeSouth.png";
ground.src = "images/fg.png";

console.log("Its inside the javascript of the third try latest");
let score = 0;

function random() {
  let num = Math.floor(Math.random() * 120 * -1);
  return num;
}

function gameOver() {
  game= false;
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  canvas.style.display = "none";
  gameOver.style.display= 'block';
}

let pipeArray = [];
pipeArray[0] = {
  x: 1100,
  y: 0,
};

document.addEventListener('click', function(){
  yB-=30;
})

document.addEventListener("keydown", function () {
  // run= false
  // console.log('Yes man a key is pressed!')
  yB -= 30;
  // run= true;
});
function pipes() {
  //   let widthP = 20;
  //   let heightP = parseInt(widthP / 0.1627751834556371);
  let pGapY = 100;
  // let yUp= heightP+y+gap;
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  c.drawImage(background, 0, 0, window.innerWidth, window.innerHeight);
  for (var i = 0; i < pipeArray.length; i++) {
    c.drawImage(pipe, pipeArray[i].x, pipeArray[i].y, 20, 122);
    let yUp = 122 + pipeArray[i].y + pGapY;
    c.drawImage(pipeup, pipeArray[i].x, yUp, 20, 380);
    c.drawImage(ground, 0, window.innerHeight - ground.height);
    c.drawImage(bird, xB, yB, bWidth, bHeight);
    pipeArray[i].x--;
    if (pipeArray[i].x == 1000) {
      // console.log("Its beyound sir!");
      pipeArray.push({ x: 1100, y: random() });
    }
    if (pipeArray[i].x == -10) {
      pipeArray.shift();
    }
    // if (yB<0) {
    //   alert('You are a  loser');
    //   // location.reload();
    // }
    if (pipeArray[i].x == 101+bWidth) {
      let pipeIY = pipeArray[i].y;
      if (yB > pipeIY + 122 && yB+bHeight < yUp) {
        // alert(
        //   "doing well and you score ++ \n the new console should print 100"
        // );
        score++
        // console.log(pipeIY + 122 - yUp);
      } else {
        // alert(
        //   "You are a  loser and as useaul you have lost again and thanks for that loser! else"
        // );
        canvas.style.display= 'none';
        gameOverH.style.display= 'block';
        

        // break;
        // location.reload();
      }
    }
    c.fillStyle = "#000000";
    c.font = "30px Arial";
    c.fillText("Score: " + score, 10, 50);
  }
  yB += 1.2;
  // c.fillStyle= '#000;';
  // c.font='20px Verdana';
  // c.fillText('Score: '+ score, window.height)
  // console.log(pipeArray);
  if(game){
  requestAnimationFrame(pipes);}
}

pipes();
// let run= setInterval(pipes, 17);

/* console.log(pipeArray) this gets executed just once at the first of the documaent loaded time and then
it can't be reached again.*/

// for ()
// The Updates--
/* finally sucessfully created the the multiple pipes using a arry with the required two arguments that is- the
 x and y argument inside the object of the array 'pipeArry' which is how Iget here with all of h these problems
  and that was terifiing but I hope things will get better as the a learing of this.*/
