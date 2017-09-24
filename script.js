var snake = $("#snake");

function moveRight() {
	snake.css("margin-left", "+=10px");
}

function moveLeft() {
	snake.css("margin-left", "-=10");
}

function moveUp() {
	snake.css("margin-top", "-=10");
}

function moveDown() {
	snake.css("margin-top", "+=10");
}

$(document).keydown(function(the_key) {
  if (the_key.which == 39) {
  	moveRight();
  } else if (the_key.which == 37) {
  	moveLeft();
  } else if (the_key.which == 38) {
  	moveUp();
  } else if (the_key.which == 40) {
  	moveDown();
  }
})