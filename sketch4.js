

let emitter; //defining emitter again
let img; //define image 1

function preload(){ //preload function must be called before the setup function so that the image can load in before anything else, or it will bug
    img = loadImage('editedtexture.png'); //calls image from library
}


function setup() {
    createCanvas(400, 400);
    emitter = new Emitter(200, 375); //puts an emitter thing in a position x, y
//   emitters[1];
}

function draw() {
    clear(); //clears the screen after each cycle
    background(0);
    //   image(img,0,0);
      blendMode(ADD); //fade effect

    let force = createVector(0, -0.1); //defining the vector force in physics simulator
    emitter.applyForce(force);

    let dir = map(mouseX, 0, width, -0.1, 0.1); //another way to map wind
    let wind = createVector(dir, 0);
    emitter.applyForce(wind); //applies wind force

//   for(let emitter of emitters){
    emitter.emit(2); //displays 2 emitters per time interval
    emitter.show();
    emitter.update();
//   }

}
