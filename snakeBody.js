class snakeBody{
    constructor(x, y,radius) {
        var options = {
           /* 'restitution':0.8,
            'friction':1.0,*/
             isStatic:true,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
      // this.image = loadImage("images/snakebody.png");

        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        fill("black")
       // translate(this.body.position.x, this.body.position.y);
        // rotate(angle);
        ellipseMode(RADIUS);
        console.log("inside display")
        ellipse(this.body.position.x, this.body.position.y,this.radius, this.radius);
        pop();
      }
}