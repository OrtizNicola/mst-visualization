let node1;
let node2;
let edge;
let COLOR = 255;
let WEIGHT = 5;
let selected;

function setup() {
    createCanvas(windowWidth, windowHeight);
    node1 = new Node(100, 100, 20, COLOR);
    node2 = new Node(200, 200, 20, COLOR);
}

function draw() {
    background(0);

    edge = new Edge(node1, node2, COLOR, WEIGHT);
    edge.show()

    node1.show();
    node2.show(); 
}

function mousePressed() {
    if (node1.clicked(mouseX, mouseY)) {
        selected = true;
    } 
}

function mouseReleased() {
    selected = false;
    node1.color = COLOR;
}

function mouseDragged() {
    if (selected) {
        node1.color = 150;
        node1.x = mouseX;
        node1.y = mouseY;
    }
}

class Node {
    constructor(_x, _y, _radius, _color) {
        this.x = _x;
        this.y = _y;
        this.radius = _radius;
        this.color = _color;
    }

    show() {
        noStroke();
        fill(this.color);
        circle(this.x, this.y, 2 * this.radius);
    }

    clicked(px, py) {
        return dist(this.x, this.y, px, py) <= this.radius;
    }
}

class Edge {
    constructor(_node1, _node2, _color, _weight) {
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