
class Background {
  constructor (gridpix,gridsize){
    this.moodybg = createGraphics(W,H);
    this.moodybg.background(27);
    this.moodybg.translate(W/2,H/2);
    // this.moodybg.fill(0,0,200);
    // this.moodybg.ellipse(0,0,100,100);
    // this.moodybg.filter(INVERT);

    this.moodybg.strokeWeight(1);
    this.moodybg.stroke(60);
    for(var i=-gridpix*gridsize/2; i<=gridpix*gridsize/2; i+=gridpix){
      this.moodybg.line(i,-gridpix*gridsize/2,i,gridpix*gridsize/2);
      this.moodybg.line(-gridpix*gridsize/2,i,gridpix*gridsize/2,i);
    }

    this.moodybg.fill(100);
    this.moodybg.noStroke();
    this.moodybg.textFont("Avenir Next",20);
    this.moodybg.textAlign(CENTER,CENTER);
    // this.moodybg.text("clickety click",0,4*H/10);
    // this.moodybg.text("isomorphic graphs",0,-4*H/10);
  }

  draw (){
    image(this.moodybg,0,0);
  }
}
