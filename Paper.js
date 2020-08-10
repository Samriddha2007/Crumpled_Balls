class Paper
{
    constructor(x,y,height)
   {
      var options = 
      {
          isStatic : false,
          restitution : 0.3,
          friction: 0.5,
          density:1.2,
          mass: 6800
      }
      this.body = Bodies.rectangle(x,y,20,height,options);
      this.radius = 20;
      this.height = height;
     
      World.add(world,this.body);
      
   }
   display()
   {
    var pos = this.body.position;
   
    push();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    fill("red");
    ellipse(0,0,this.radius,this.height);
    pop();
   }
}