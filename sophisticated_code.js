/* sophisticated_code.js */

// This code generates a fractal tree using recursive functions and HTML5 canvas

// Set up the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// Define the tree parameters
var branchLength = 100;
var branchAngle = Math.PI / 4;
var branchWidth = 10;
var trunkHeight = 200;

// Function to draw a single branch
function drawBranch(x, y, length, angle, width) {
  ctx.beginPath();
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -length);
  ctx.lineWidth = width;
  ctx.strokeStyle = "brown";
  ctx.stroke();
  ctx.restore();
}

// Recursive function to draw a fractal tree
function drawTree(x, y, length, angle, width) {
  drawBranch(x, y, length, angle, width);

  // Calculate branch positions and angles
  var leftAngle = angle - branchAngle;
  var rightAngle = angle + branchAngle;
  var leftLength = length * 0.8;
  var rightLength = length * 0.8;

  // Draw the left branch
  if (leftLength > 2) {
    drawTree(
      x + Math.cos(leftAngle) * length,
      y - Math.sin(leftAngle) * length,
      leftLength,
      leftAngle,
      width * 0.8
    );
  }

  // Draw the right branch
  if (rightLength > 2) {
    drawTree(
      x + Math.cos(rightAngle) * length,
      y - Math.sin(rightAngle) * length,
      rightLength,
      rightAngle,
      width * 0.8
    );
  }
}

// Draw the trunk of the tree
ctx.fillStyle = "brown";
ctx.fillRect(
  canvas.width / 2 - branchWidth / 2,
  canvas.height - trunkHeight,
  branchWidth,
  trunkHeight
);

// Draw the branches
drawTree(
  canvas.width / 2,
  canvas.height - trunkHeight,
  branchLength,
  Math.PI / 2,
  branchWidth
);

// Enable animation
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTree(
    canvas.width / 2,
    canvas.height - trunkHeight,
    branchLength,
    Math.PI / 2,
    branchWidth
  );
  requestAnimationFrame(animate);
}
animate();