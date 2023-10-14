//Grupo: Diogo Conde Soler Teixeira dos Santos
function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
  }
  
  function draw() {
    background(220);
    translate(width / 2, height / 2);
  
    let now = new Date();
    let hr = now.getHours() % 12;
    let min = now.getMinutes();
    let sec = now.getSeconds();
    
    // Desenhar marcações das horas
    stroke(0);
    strokeWeight(8);
    noFill();
    for (let i = 0; i < 12; i++) {
      let angle = map(i, 0, 12, 0, 360);
      let x1 = 140 * cos(angle);
      let y1 = 140 * sin(angle);
      let x2 = 160 * cos(angle);
      let y2 = 160 * sin(angle);
      line(x1, y1, x2, y2);
    }
  
    // Desenhar marcações dos minutos
    strokeWeight(4);
    for (let i = 0; i < 60; i++) {
      if (i % 5 !== 0) {
        let angle = map(i, 0, 60, 0, 360);
        let x1 = 150 * cos(angle);
        let y1 = 150 * sin(angle);
        let x2 = 160 * cos(angle);
        let y2 = 160 * sin(angle);
        line(x1, y1, x2, y2);
      }
    }
  
    // Calcular ângulos dos ponteiros
    let hrAngle = map(hr % 12, 0, 12, 0, 360) - 90;
    let minAngle = map(min, 0, 60, 0, 360) - 90;
    let secAngle = map(sec, 0, 60, 0, 360) - 90;
    
    // Desenhar ponteiro de horas
    stroke(0, 0, 0);
    let hrX = 100 * cos(hrAngle + 30 * (min / 60));
    let hrY = 100 * sin(hrAngle + 30 * (min / 60));
    line(0, 0, hrX, hrY);
  
    // Desenhar ponteiro de minutos
    stroke(0, 0, 0);
    let minX = 140 * cos(minAngle + 6 * (sec / 60));
    let minY = 140 * sin(minAngle + 6 * (sec / 60));
    line(0, 0, minX, minY);
  
    // Desenhar ponteiro de segundos
    stroke(0, 0, 0);
    let secX = 150 * cos(secAngle);
    let secY = 150 * sin(secAngle);
    line(0, 0, secX, secY);
    
    // Desenhar centro do relógio
    fill(0);
    noStroke();
    ellipse(0, 0, 8);
  }