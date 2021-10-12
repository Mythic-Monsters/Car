//Create a reference for canvas 
canvas = document.getElementById("myCanvas")
ctx = canvas.getcontext("2d")
//Give specific height and width to the car image
greencar_width = 75;
greencar_height = 100;

greencarx = 5;
greencary = 225;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadbackground;
	background_imgTag.src = background_image

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadbackground;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(greencar_imgTag, greencarx, greencary, greencar_width, greencar_height)
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencary >=0)
	{
		greencary = greencary - 10;
		console.log("When up arrow is pressed, x=" +greencarx+ "y =" +greencary);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencary <=0)
	{
		greencary = greencary + 10;
		console.log("When up arrow is pressed, x=" +greencarx+ "y =" +greencary);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(greencary >=500)
	{
		greencary = greencary - 10;
		console.log("When up arrow is pressed, x=" +greencarx+ "y =" +greencary);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(greencary <=500)
	{
		greencary = greencary + 10;
		console.log("When up arrow is pressed, x=" +greencarx+ "y =" +greencary);
		uploadBackground();
		uploadgreencar();
	}
}

window.addEventListener("keydown, my_keydown")
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(keyPressed == "38")
	{
		up();
		console.log("up")
	}

	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(keyPressed == "40")
	{
		down();
		console.log("down")
	}

	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(keyPressed == "39")
	{
		right();
		console.log("right")
	}

	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(keyPressed == "37")
	{
		left();
		console.log("left")
	}
}