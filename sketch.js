let x = [], y = []

let asteroidYCoord = []

function setup() {
    createCanvas(800,600); 
    frameRate(1)
  
	// generate coordinates for the location of stars
    for (var i = 0; i < 60; i++) {
      append(x, random(width));
      append(y, random(height));
    }
  
    append(asteroidYCoord, random(height)) // generate a Y coordinate for the asteroid
}

function draw() {
    noStroke();
    background(50,50,50);
  
    // Sun
    fill('orange');
    ellipse(0, 0, 500, 500);
    fill('yellow');
    ellipse(5, -11, 480, 480);
  
    // Hours, represented by the sun ray growing
    fill(200, 130, 10, 20);
    ellipse(0, 0, ((hour() / 24)*1500) + 500, ((hour() / 24)*1500) + 500);
  
    // Seconds, represented by an asteroid travelling along the x-axis
    fill('gray')
    circle(norm(second(), 0, 60) * width, asteroidYCoord[0], 50)
  
    // Minutes, represented by the number of stars
    fill('white')
    for (let i = 0; i < minute(); i++) {
      ellipse(x[i], y[i], random(4, 7))
    }
    
    if (second() == 0) {
      console.log(minute())
    }
}
