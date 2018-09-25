function setup() {
	// define artboard size
	createCanvas(windowWidth, windowHeight );
	// Set here the values that are not changing all over the sketch

}

function draw() {
	var motoX = map(mouseX, 0, width, -65, 65);
	//var motoY = map(mouseY, 0, height, -10, 10);


	var prosp1 = map(mouseX, 0, width/2, 0.6, 1);
	var prospR1 = constrain(prosp1, 0, 1)

	var prosp2 = map(mouseX, width/2, width, 1, 0.6);
	var prospR2 = constrain(prosp2, 0, 1);

	var prosp = prospR1*prospR2

 var	x = x + 1;
	background(255);
	//antenne
	strokeWeight(1)
	line(width/2-8, height/2 -220, width/2-8, height/2 -280,);
	line(width/2+10, height/2 -220, width/2+10, height/2 -310,);
	strokeWeight(1.4);
	line(width/2+10.2, height/2 -220, width/2+10.2, height/2 -270,);

	strokeWeight(0);
	stroke(240);

// push()
	rotate(x)
	//corpo
	fill(220);
	ellipse(width/2, height/2, 290);

	//dettagli corpo
	fill(231, 136, 44);
	arc(width/2, height/2, 290, 290, 2, PI-0.3, CHORD);
	arc(width/2, height/2, 290, 290, PI+2, 2*PI-0.3, CHORD);
	arc(width/2, height/2, 290, 290, 0.2, 1.4, CHORD);
	// rotate(PI/15);
	ellipse(width/2 - 32, height/2 -32, 175, 180);
	fill(220);
	ellipse(width/2 - 32, height/2 -32, 130, 135);
// push()
	//testa
	fill(220);
	// rotate(-PI/15);
	arc(width/2, height/2-165, 180, 180, PI, 0, CHORD);
	fill(100, 106, 110);
	rect(width/2-90,  height/2-170, 180, 12);
	fill(200);
	quad(width/2-89.4, height/2-158, width/2+89.4, height/2-158, width/2+72, height/2-140, width/2-72, height/2-140);

	//"occhi"
	push()
	rotate();
	fill(20)
	ellipse(width/2 + motoX, height/2-205, 38*prosp , 38)
	pop()
	// ellipse(width/2 + 48 + motoX, height/2-186, 16, 20)
	// noFill();
	strokeWeight(3);
	stroke(20)
	// ellipse(width/2 + 48 + motoX, height/2-186, 22, 26)
}
