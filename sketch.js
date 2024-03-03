let COLOR = 255;
let COLOR_EDGE = 255;
let WEIGHT = 5;
let n_nodes = 5;
let RADIUS = 10;

let nodes = [];
let chosen = null;

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < n_nodes; i++) {
        nodes[i] = new Node(random(width), random(height));
    }
}

function draw() {
    background(0);

    for (let i = 0; i < n_nodes; i++) {
        nodes[i].show();
    }
}

function mousePressed() {
    for (let node of nodes) {
        if (node.over(mouseX, mouseY)) {
            chosen = node;
            break;
        } 
    }   
}

function mouseDragged() {
    if (chosen) {
        chosen.color = 150;
        chosen.x = mouseX;
        chosen.y = mouseY;
    }
}

function mouseReleased() {
    chosen.color = COLOR;
    chosen = null;
}

class Node {
    constructor(_x, _y, _radius = RADIUS, _color = COLOR) {
        this.x = _x;
        this.y = _y;
        this.radius = _radius;
        this.color = _color;
    }

    show() {
        push();
        noStroke();
        fill(this.color);
        circle(this.x, this.y, 2 * this.radius);
        pop();
    }

    over(px, py) {
        return dist(this.x, this.y, px, py) <= this.radius;
    }
}

class Edge {
    constructor(_node1, _node2, _color = COLOR_EDGE, _weight = WEIGHT) {
        this.node1 = _node1;
        this.node2 = _node2;
        this.color = _color;
        this.weight = _weight;
    }

    show() {
        push();
        stroke(this.color);
        strokeWeight(this.weight);
        line(this.node1.x, this.node1.y, 
             this.node2.x, this.node2.y); 
        pop();
    }
}
