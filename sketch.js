const density = " .`-':,~_+<>^\"=|!lI[]}{?)(1jtrciVznuxvYVCLQO0Zmwpqdbkhao*#MW&8%B@$";
let img;

function getDensityChar(brightness) {
  const i = Math.floor((brightness/255) * (density.length-1));
  return density[i];
}

function preload() {
  img = loadImage('beegyosha.jpg', function() {}, function() {
    console.log("Failed to load image");
  });
}

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);
  let w = width/img.width; // width of each pixel
  let h = height/img.height; // height of each pixel
  img.loadPixels();
  for (let i=0; i<img.width; i++) {
    for (let j=0; j<img.height; j++) {
      let index = (i+j*img.width)*4;
      let r = img.pixels[index];
      let g = img.pixels[index+1];
      let b = img.pixels[index+2];
      let avg = (r+b+g)/3;
      
      stroke(0);
      fill(avg);
      textSize(w);
      textAlign(CENTER,CENTER);
      text(getDensityChar(avg)*i,i*w+w*0.5,j*h+h*0.5);
    }
  }
}
