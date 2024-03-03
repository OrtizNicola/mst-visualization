// constants for the nodes
let COLOR = 255;
let COLOR_CHOSEN = 120;
let RADIUS_NODE = 10;

// constants for the edges
let COLOR_EDGE = 255;
let WEIGHT = 5;

// nodes of the graph
let n_nodes = 20;
let nodes = [];
let unexplored = [];

// the chosen node is the one the user wants to move around
let chosen = null;

function setup() {
    createCanvas(windowWidth, windowHeight);

    // initialize all of the nodes
    for (let i = 0; i < n_nodes; i++) {
        nodes[i] = new Node(20 + random(width - 40), 40 + random(height - 80));
    }
}

function prim() {
    let explored = [];
    let index;
    let edge;

    explored.push(unexplored[0]);
    unexplored.splice(0, 1);

    // repeat until every node is explored
    while (unexplored.length > 0) {
        // initialize the shortest distance
        let shortest = 1000;
        // find the unexplored node closest to the explored ones
        for (let i = 0; i < explored.length; i++) {
            for (let j = 0; j < unexplored.length; j++) {
                let node1 = explored[i];
                let node2 = unexplored[j];
                let distance = dist(node1.x, node1.y,
                                    node2.x, node2.y);
                // if it's the closest, create the edge
                if (distance < shortest) {
                    index = j;
                    shortest = distance;
                    edge = new Edge(node1, node2);
                }
            }
        }
        // add the found node to the explored list
        explored.push(unexplored[index]);
        unexplored.splice(index, 1);
        // show the new edge
        edge.show();
    }
}

function draw() {
    background(0);

    // show all of the nodes
    for (let i = 0; i < n_nodes; i++) {
        nodes[i].show();
        // initialize every node as unexplored
        unexplored.push(nodes[i]);
    }
    // run Prim's algorithm
    prim();
}

function mousePressed() {
    for (let node of nodes) {
        // check if the user wants to move any node
        if (node.over(mouseX, mouseY)) {
            chosen = node;
            break;
        } 
    }   
}

function mouseDragged() {
    // let the user move the node around
    if (chosen) {
        //change the color for the selected node
        chosen.color = COLOR_CHOSEN;
        chosen.x = mouseX;
        chosen.y = mouseY;
    }
}

function mouseReleased() {
    // back to no nodes being selected to move
    if (chosen) {
        chosen.color = COLOR;
        chosen = null;
    }
}
