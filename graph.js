

class Edge {
  constructor(source,target){
    this.s = source;
    this.t = target;
  }
}
// class Node {
//   constructor(index){
//     this.i = index;
//   }
// }

class Graph {
  constructor (nodes, edges){
    this.nodes = nodes;
    this.adj = [];
    this.coords = [];
    for (var i=0; i<nodes; i+=1){
      this.adj.push([]);
      this.coords.push([]);
    }
    for (var i=0; i<edges.length; i+=1){
      this.addEdge(edges[i]);
    }
  }

  addEdge(e){
    if (e[0]<this.nodes && e[1]<this.nodes){
      this.adj[e[0]].push(e[1]);
    }
  }
  
  chooseCoords(coords){
    for (var i=0; i<this.nodes; i+=1){
      this.coords[i]={x:coords[i][0]+2,y:coords[i][1]+2}
    }
  }

  coordToPix(c){
    return (c-gridsize/2)*gridpix;
  }

  drawGraph(){
    stroke(180);
    strokeWeight(1);
    for (var i=0; i<this.nodes; i+=1){
      var s = this.coords[i];
      for (var j=0; j<this.adj[i].length; j+=1){
        var t = this.coords[this.adj[i][j]];
        line(this.coordToPix(s.x),this.coordToPix(s.y),this.coordToPix(t.x),this.coordToPix(t.y));
      }
    }
    strokeWeight(2);
    fill(35);
    stroke(170);
    for (var i=0; i<this.nodes; i+=1){
      var n = this.coords[i];
      ellipse(this.coordToPix(n.x),this.coordToPix(n.y),20,20);
    }
  }
}
