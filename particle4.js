

class Particle extends p5.Vector  {
    constructor(x, y) {
      super(x, y); //more concise way to create a position vector
      this.n = 12; //a number "n"
      this.vel = p5.Vector.random2D(); //velocity component
      this.vel.mult(random(1, 6)); //velocity muliplier
      this.acc = createVector(0, 0); //acceleration component
      this.r = 36 * this.n; //radius multiplier
      this.lifetime = 255; //display time
    }
  
    finished() { //actually displays the "fade" of the particle in the sketch
      return (this.lifetime < 0);
    }
  
    applyForce(force) { //applies force and adds additional forces
      this.acc.add(force);
    }

  
    update() { // updates constructor components
      this.vel.add(this.acc);
      this.add(this.vel);
      this.acc.set(0, 0);
  
      this.lifetime -= 20;
    }
  
    show() {
        // ellipse(this.x, this.y, this.r * 2);

        tint(150, 40, 80, this.lifetime); //almost like opacity, but for pictures
        imageMode(CENTER); //centers an image
        image(img, this.x, this.y, this.r, this.r); //positions of an image

    }
  }
  