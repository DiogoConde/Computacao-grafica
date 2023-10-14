//Grupo: Diogo Conde Soler Teixeira dos Santos
let angle;
let len;
let slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, PI, PI / 4, 0.01);
  createP("Angle");
  angle = PI / 4;
  len = 100;
  slider.input(updateAngle);
}

function draw() {
  background(220);
  translate(width / 2, height);
  stroke(0);
  branch(len);
}

function updateAngle() {
  angle = slider.value();
  redraw();
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}