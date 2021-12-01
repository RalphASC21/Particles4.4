class Emitter{
    constructor(x, y){
        this.position = createVector(x, y); //creates particle at a position x, y
        this.particles = []; //array of particles
    }

    emit(num){
        for (let i = 0; i < num; i++) {
            // if (random(1) < 0.5){
                // this.particles.push(new Confetti(this.position.x, this.position.y));
            // } else{
                this.particles.push(new Particle(this.position.x, this.position.y));
            // }
            // this.particles.push(new Confetti(this.position.x, this.position.y));
        }
    }

    applyForce(force){ //creates another force and applies it to the particles
        for (let particle of this.particles) {
            particle.applyForce(force);
        }
    }

    update(){
        for (let particle of this.particles) {
            particle.update();
        }
    
        for (let i = this.particles.length - 1; i >= 0; i--) {
            if (this.particles[i].finished()) {
                this.particles.splice(i, 1);
            }
        }
    }

    show(){ // shows particles
        for (let particle of this.particles) {
            particle.show();
        }
    }
}