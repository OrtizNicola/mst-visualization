class Node {
    constructor(_x, _y, _RADIUS_NODE = RADIUS_NODE, _color = COLOR) {
        this.x = _x;
        this.y = _y;
        this.RADIUS_NODE = _RADIUS_NODE;
        this.color = _color;
    }

    show() {
        push();
        noStroke();
        fill(this.color);
        circle(this.x, this.y, 2 * this.RADIUS_NODE);
        pop();
    }

    over(px, py) {
        return dist(this.x, this.y, px, py) <= this.RADIUS_NODE;
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
