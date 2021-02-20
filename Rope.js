class Rope{
    constructor(bodyA,bodyB){
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:5
        }
        this.sling=Constraint.create(option)
        World.add(world,this.sling)
    }
    display(){
        push();
        strokeWeight(50)
        stroke("black")
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y)
        pop();
    }
    
}