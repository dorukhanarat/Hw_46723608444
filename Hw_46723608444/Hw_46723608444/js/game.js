var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 80;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var ballRadius = 10;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

var intv = setInterval(draw, 20);


var start_response = confirm("Ready to start?");
if (start_response == false) {
    window.location.href = "index.html";
}

var color = "#62E4FD";

var count = 5;

var score = 0;

var brickWidth = 80;
var brickHeight = 20;
var brickPadding = 7;
var brickOffsetTop = 30;
var brickOffsetLeft = 40;


var redBrick = {
  x: 0,
  y: 0,
  status: 1
};
var blueBrick = {
  x: 0,
  y: 0,
  status: 1
};
var greenBrick = {
  x: 0,
  y: 0,
  status: 1
};
var purpleBrick = {
  x: 0,
  y: 0,
  status: 1
};
var yellowBrick = {
  x: 0,
  y: 0,
  status: 1
};

var blackBrick = {
  x: 0,
  y: 0,
  status: 1
};

var dx = 0;
var dy = -3.5;

function drawBall() {

  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fillStroke = color;
  ctx.stroke = "10";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {

  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#00ffff";
  ctx.fill();
  ctx.closePath();

}

function drawBricks() {

  if (blackBrick.status == 1) {
    var blackBrickX = (2 * (brickWidth + brickPadding)) + brickOffsetLeft;
    var blackBrickY = (3 * (brickWidth + brickPadding)) + brickOffsetTop;
    blackBrick.x = blackBrickX;
    blackBrick.y = blackBrickY;
    ctx.beginPath();
    ctx.rect(blackBrickX, blackBrickY, brickWidth, brickHeight);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
  }

  if (redBrick.status == 1) {
    var redBrickX = (1 * (brickWidth + brickPadding)) + brickOffsetLeft;
    var redBrickY = (1 * (brickWidth + brickPadding)) + brickOffsetTop;
    redBrick.x = redBrickX;
    redBrick.y = redBrickY;
    ctx.beginPath();
    ctx.rect(redBrickX, redBrickY, brickWidth, brickHeight);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
  }

  if (blueBrick.status == 1) {
    var blueBrickX = (2 * (brickWidth + brickPadding)) + brickOffsetLeft;
    var blueBrickY = (1 * (brickWidth + brickPadding)) + brickOffsetTop;
    blueBrick.x = blueBrickX;
    blueBrick.y = blueBrickY;
    ctx.beginPath();
    ctx.rect(blueBrickX, blueBrickY, brickWidth, brickHeight);
    ctx.fillStyle = "#0000FF";
    ctx.fill();
    ctx.closePath();
  }

  if (greenBrick.status == 1) {
    var greenBrickX = (3 * (brickWidth + brickPadding)) + brickOffsetLeft;
    var greenBrickY = (1 * (brickWidth + brickPadding)) + brickOffsetTop;
    greenBrick.x = greenBrickX;
    greenBrick.y = greenBrickY;
    ctx.beginPath();
    ctx.rect(greenBrickX, greenBrickY, brickWidth, brickHeight);
    ctx.fillStyle = "#00FF00";
    ctx.fill();
    ctx.closePath();
  }

  if (purpleBrick.status == 1) {
    var purpleBrickX = (1.5 * (brickWidth + brickPadding)) + brickOffsetLeft;
    var purpleBrickY = (2 * (brickWidth + brickPadding)) + brickOffsetTop;
    purpleBrick.x = purpleBrickX;
    purpleBrick.y = purpleBrickY;
    ctx.beginPath();
    ctx.rect(purpleBrickX, purpleBrickY, brickWidth, brickHeight);
    ctx.fillStyle = "#FF00FF";
    ctx.fill();
    ctx.closePath();
  }

  if (yellowBrick.status == 1) {
    var yellowBrickX = (2.5 * (brickWidth + brickPadding)) + brickOffsetLeft;
    var yellowBrickY = (2 * (brickWidth + brickPadding)) + brickOffsetTop;
    yellowBrick.x = yellowBrickX;
    yellowBrick.y = yellowBrickY;
    ctx.beginPath();
    ctx.rect(yellowBrickX, yellowBrickY, brickWidth, brickHeight);
    ctx.fillStyle = "#FFFF00";
    ctx.fill();
    ctx.closePath();

  }

}

function collisionDetection() {

  if (blackBrick.status == 1) {
    if (x >= blackBrick.x && x <= blackBrick.x + brickWidth && y >= blackBrick.y && y <= blackBrick.y + brickHeight) {
      dy = -dy;
    }
  }

  if (redBrick.status == 1) {
    if (x >= redBrick.x && x <= redBrick.x + brickWidth && y >= redBrick.y && y <= redBrick.y + brickHeight) {
      dy = -dy;
      redBrick.status = 0;
      score = score + 20;
      count--;
      color = "#FF0000";
    }

  }

  if (blueBrick.status == 1) {
    if (x >= blueBrick.x && x <= blueBrick.x + brickWidth && y >= blueBrick.y && y <= blueBrick.y + brickHeight) {
      dy = -dy;
      blueBrick.status = 0;
      score = score + 40;
      count--;
      color = "#0000FF";
    }

  }

  if (greenBrick.status == 1) {
    if (x >= greenBrick.x && x <= greenBrick.x + brickWidth && y >= greenBrick.y && y <= greenBrick.y + brickHeight) {
      dy = -dy;
      greenBrick.status = 0;
      score = score + 80;
      count--;
      color = "#00FF00";
    }

  }

  if (purpleBrick.status == 1) {
    if (x >= purpleBrick.x && x <= purpleBrick.x + brickWidth && y >= purpleBrick.y && y <= purpleBrick.y + brickHeight) {
      dy = -dy;
      purpleBrick.status = 0;
      score = score + 60;
      count--;
      color = "#FF00FF";
    }

  }

  if (yellowBrick.status == 1) {
    if (x >= yellowBrick.x && x <= yellowBrick.x + brickWidth && y >= yellowBrick.y && y <= yellowBrick.y + brickHeight) {
      dy = -dy;
      yellowBrick.status = 0;
      score = score + 50;
      count--;
      color = "#FFFF00";
    }

  }

  if (count <= 0) {
    alert("Congratulations! Total score is: " + score);
    clearInterval(intv);
  }
}


function drawScore() {

  ctx.font = "16px Verdana";
  ctx.fillStyle = "#000";
  ctx.fillText("Score: " + score, 40, 20);

}

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();

  collisionDetection();

  if (y + dy < ballRadius)
    dy = -dy;
  else if (y + dy > canvas.height - ballRadius) {

    if (x >= paddleX && x <= paddleX + paddleWidth) {
      var ballDist = (paddleX + (paddleWidth / 2)) - x;
      if (ballDist < 0) {
        if (dx > 0) {
          dx = dx + (ballDist * 0.10);
        } else
          dx = -dx + (-ballDist * 0.10);
      }
      if (ballDist > 0) {
        if (dx < 0) {
          dx = dx + (ballDist * 0.10);
        } else
          dx = -dx + (-ballDist * 0.10);
      }
      dy = -dy;
    } else {
      alert("Game Over! Total Score is: " + score);
      clearInterval(intv);
    }
  } else
    y += dy;

  if (x + dx < ballRadius || x + dx > canvas.width - ballRadius)
    dx = -dx;
  else
    x += dx;



  if (rightPressed && paddleX < canvas.width - paddleWidth)
    paddleX += 7;
  else if (leftPressed && paddleX > 0)
    paddleX -= 7;
}

function keyDownHandler(e) {

  if (e.keyCode == 39)
    rightPressed = true;
  else if (e.keyCode == 37)
    leftPressed = true;
}

function keyUpHandler(e) {

  if (e.keyCode == 39)
    rightPressed = false;
  if (e.keyCode == 37)
    leftPressed = false;

}

function mouseMoveHandler(e) {

  var relativeX = e.clientX - canvas.offsetLeft;

  if (relativeX > 0 && relativeX < canvas.width) {

    if ((relativeX - paddleWidth / 2 >= 0) && (relativeX - paddleWidth / 2 <= (canvas.width - paddleWidth)))
      paddleX = relativeX - paddleWidth / 2;

  }
}
