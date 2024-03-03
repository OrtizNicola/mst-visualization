let node1;
let node2;
let edge;
let COLOR = 255;
let WEIGHT = 5;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    background(0);
    node1 = new Node(mouseX, mouseY, 50, COLOR);
    node1.show();
    node2 = new Node(200, 200, 50, COLOR);
    node2.show();
    
    edge = new Edge(node1, node2, COLOR, WEIGHT);
    edge.show()
}

class Node {
    constructor(_x, _y, _size, _color) {
        this.x = _x;
        this.y = _y;
        this.size = _size;
        this.color = _color;
    }

    show() {
        fill(this.color);
        circle(this.x, this.y, this.size);
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
        stroke(this.color);
        strokeWeight(this.weight);
        line(this.node1.x, this.node1.y, 
             this.node2.x, this.node2.y); 
    }
}