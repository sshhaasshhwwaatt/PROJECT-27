class Ball {
    constructor(x, y, width, height, angle) {
      var options = { 
   
        isStatic:false, 
        restitution:0.3 ,
        friction:0.5,
        density:1.2        

    };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      fill("white")
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  }
  