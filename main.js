var gridsize;
var gridpix;

function setup() {
  W = window.innerWidth;
	H = window.innerHeight;
  canvas = createCanvas(W, H);
  gridsize = 25;
  gridpix = int(min(W,H)/(gridsize*1.5));
  bg = new Background(gridpix,gridsize);
  i = 0;
  graphhistory=[
    [0, 4],//added first edge
    [5, 4],
    [2, 5],
    [1, 5],
    [3, 4],//graph now connected
    [3, 2],
    [1, 0],//graph now has min degree 2
    [0, 2],
    [1, 3],
    [4, 2],
    [0, 5],
    [3, 5],
    [1, 2],
    [4, 1]
  ]
  coords = {0: [19.73800962724122, 4.991727339540282], 4: [0.8554710521042548, 15.260681590469487], 5: [2.300653467943519, 5.112660293945462], 2: [9.785877178204968, 20.055611677267517], 1: [10.958759691887657, 0.0], 3: [19.361228982618382, 17.579319098777244]};

  graph = new Graph(Object.keys(coords).length, []);
  graph.chooseCoords(coords);
}

function draw() {
  bg.draw();
  translate(W/2,H/2);
  cursor("pointer")
  if (i>0){
    graph.drawGraph();
  }
  textFont("Avenir Next",18);
  noStroke();
  textAlign(CENTER,CENTER);
  fill(150);
  if (i == 0){
    text("~ click to start ~",0,-250);
  }
  if (i == 1){
    text("graph started",0,-250);
  }
  if (i == 5){
    text("graph min degree 1",0,-250);
  }
  if (i == 8){
    text("graph min degree 2",0,-250);
  }
  if (i == graphhistory.length-1){
    text("graph finished",0,-250);
  }
  noLoop();
}

function mouseClicked() {
  if (i < graphhistory.length-1) {
    i += 1;
    redraw();
  }
  graph.addEdge(graphhistory[i]);
}

window.onresize = function() {
  resizeCanvas(windowWidth, windowHeight);
  W = windowWidth;
  H = windowHeight
};
