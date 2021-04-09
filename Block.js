class Block{
    constructor(x,y,width,height){
var options = {
    restitution:0.3,
friction:1.0,
//isStatic:true
}

this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width;
this.height=height;
World.add(world,this.body);
 }
dispaly(){
    push();
    // translate(pos.x,pos.y);
    var pos=this.body.position;
      Rotate(angle);
      rectmode(CENTER);
      rect(0,0,this.width,this,this.height)
      pop();
      }





}