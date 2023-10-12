let pontos = [];

let selecionado = null;

function setup() {

    createCanvas(600,600);

    pontos = [

        createVector(10,height/2),

        createVector(width-10,height/2),

        createVector(width/3,height-10),

        createVector(width*2/3,height-10)

    ];

}  

function ponto(A) {

    circle(A.x,A.y,10);

}

function combina(A,B,t) {

    return {x:(1-t)*A.x+t*B.x,

            y:(1-t)*A.y+t*B.y};

}

function draw() {

    let [A, B, C, D] = pontos;

    background(200);

    noFill();

    beginShape();

    for(let t=0; t<=1.0; t+=0.05) {

        E = combina(A,C,t);

        F = combina(C,D,t);

        G = combina(D,B,t);

        H = combina(E,F,t);

        I = combina(F,G,t);

        J = combina(H,I,t);

        vertex(J.x,J.y);

      //  vertex(C.x,C.y);

      //  vertex(D.x,D.y);

      //  vertex(E.x,E.y);

      //  vertex(F.x,F.y);
    }

    vertex(B.x,B.y);

    endShape();

    desenhaPontos();

}

function desenhaPontos() {

    let vmouse = createVector(mouseX,mouseY);

    selecionado = null;

    for(let p of pontos) {

        if(vmouse.dist(p)<10) {

            selecionado = p;

            fill("#ff0000");

        } else {

            fill("#ffffff");

        }

        ponto(p);

    }

}

function mouseDragged() {

    if(selecionado) {

        selecionado.set(mouseX, mouseY);

    }

}