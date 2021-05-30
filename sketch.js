var player;
var edges;
var snakeGroup;
var bgImage;
var snakeImage;
var bunnyImage;
var carrotImage;

function preload() {
	//load game assets

	bgImage = loadImage('bg.png');
	snakeImage = loadImage('snake.png');
	bunnyImage = loadImage('bunnyImg.png');
	carrotImage = loadImage('carrot.png')
}


function setup() {
	createCanvas(600, 600);
	edges = createEdgeSprites();
	player = createSprite(40, 550);
	player.addImage(bunnyImage);
	player.scale = 0.32;
	target = createSprite(550, 45);
	target.addImage(carrotImage);
	target.scale = 0.12;

	obs1 = createSprite(100, 165, 110, 20);
	obs1.velocityX = 5;
	obs2 = createSprite(300, 165, 110, 20);
	obs2.velocityX = 5;
	obs3 = createSprite(500, 165, 110, 20);
	obs3.velocityX = 5;
	obs4 = createSprite(55, 365, 110, 20);
	obs4.velocityX = -5;
	obs5 = createSprite(220, 365, 110, 20);
	obs5.velocityX = -5;
	obs6 = createSprite(385, 365, 110, 20);
	obs6.velocityX = -5;
	obs7 = createSprite(550, 365, 110, 20);
	obs7.velocityX = -5;

	obs1.shapeColor = "red";
	obs2.shapeColor = "red";
	obs3.shapeColor = "red";
	obs4.shapeColor = "red";
	obs5.shapeColor = "red";
	obs6.shapeColor = "red";
	obs7.shapeColor = "red";
	player.shapeColor = "white";
	target.shapeColor = "#FF5D11";

	snakeGroup = new Group();
}

function draw() {
	background(bgImage);
	player.bounceOff(edges[0]);
	player.bounceOff(edges[1]);
	player.bounceOff(edges[2]);
	player.bounceOff(edges[3]);

	obs1.bounceOff(edges[0]);
	obs1.bounceOff(edges[1]);
	obs2.bounceOff(edges[0]);
	obs2.bounceOff(edges[1]);
	obs3.bounceOff(edges[0]);
	obs3.bounceOff(edges[1]);
	obs4.bounceOff(edges[0]);
	obs4.bounceOff(edges[1]);
	obs5.bounceOff(edges[0]);
	obs5.bounceOff(edges[1]);
	obs6.bounceOff(edges[0]);
	obs6.bounceOff(edges[1]);
	obs7.bounceOff(edges[0]);
	obs7.bounceOff(edges[1]);

	if (keyDown("up") || keyDown("w")) {
		player.y = player.y - 3;
	}
	if (keyDown("down") || keyDown("s")) {
		player.y = player.y + 3;
	}
	if (keyDown("left") || keyDown("a")) {
		player.x = player.x - 3;
	}
	if (keyDown("right") || keyDown("d")) {
		player.x = player.x + 3;
	}
	textSize(35);

	generateSnakes();

	for (var i = 0; i < (snakeGroup).length; i++){
		var temp = (snakeGroup).get(i);
		if (player.isTouching(temp)){
			player.x = 40;
			player.y = 550;
			temp.destroy();
			temp = null;
		}
	}
	if (player.isTouching(target)) {
		text("YOU WIN", 200, 250);
	}

	if (player.isTouching(obs1)) {
		player.x = 60;
		player.y = 550;
		text("YOU LOSE", 200, 250);
	}
	if (player.isTouching(obs2)) {
		player.x = 60;
		player.y = 550;
		text("YOU LOSE", 200, 250);
	}
	if (player.isTouching(obs3)) {
		player.x = 60;
		player.y = 550;
		text("YOU LOSE", 200, 250);
	}
	if (player.isTouching(obs4)) {
		player.x = 60;
		player.y = 550;
		text("YOU LOSE", 200, 250);
	}
	if (player.isTouching(obs5)) {
		player.x = 60;
		player.y = 550;
		text("YOU LOSE", 200, 250);
	}
	if (player.isTouching(obs6)) {
		player.x = 60;
		player.y = 550;
		text("YOU LOSE", 200, 250);
	}
	if (player.isTouching(obs7)) {
		player.x = 60;
		player.y = 550;
		text("YOU LOSE", 200, 250);
	}

	drawSprites();
}

function generateSnakes(){
	if (frameCount % 40 ===0){
		var snake = createSprite(600, random(70, 480));
		snake.addImage(snakeImage);
		snake.scale = random(0.2, 0.38);
		snake.velocityX = -6;
		snake.lifetime = 175;
		snakeGroup.add(snake);
	}
}