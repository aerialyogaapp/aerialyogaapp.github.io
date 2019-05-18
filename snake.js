// Make the snake longer than just 1 segment!
// var snake = [{ top:0 , left: 0},{ top:0 , left: 1}];
// var snake2 = [{ top:0 , left: 2}];

// Change the color of the snake.
// var drawableSnake = { color: "#3fc2a6", pixels: snake };
// var drawableSnake2 = { color: "#bc5887", pixels: snake2 };
//
// var drawableObjects = [drawableSnake,drawableSnake2];
//
// CHUNK.draw(drawableObjects);
//to get the short cut comments use Command ? highlight stuff and use short cut
//
// var drawSnake = function(snakeToDraw) {
//   var drawableSnake = { color: "green", pixels: snakeToDraw };
//   var drawableObjects = [drawableSnake];
//   CHUNK.draw(drawableObjects);
// }

//moves the snake to the right diagonally
// var moveSnake = function(snake) {
//   var oldSegment = snake[0];
//   var newSegment = { top: oldSegment.top + 1, left: oldSegment.left + 1 };
//   var newSnake = [newSegment];
//   return newSnake;
// }
//
// var snake = [{ top: 0, left: 0}];
// drawSnake(snake);
//
//moved the snake down the screen and you can change the speed
// var drawSnake = function(snakeToDraw) {
//   var drawableSnake = { color: "green", pixels: snakeToDraw };
//   var drawableObjects = [drawableSnake];
//   CHUNK.draw(drawableObjects);
// }
//
//
// var moveSnake = function(snake) {
//   var oldSegment = snake[0];
//   var newSegment = { top: oldSegment.top + 1, left: oldSegment.left };
//   var newSnake = [newSegment];
//   return newSnake;
// }
//
// var advanceGame = function() {
//   snake = moveSnake(snake);
//   drawSnake(snake);
// }
//
// var snake = [{ top: 0, left: 0}];
// CHUNK.executeNTimesPerSecond(advanceGame, 5);
//
// var moveSegment = function(segment) {
//   if (segment.direction === "down") {
//     return { top: segment.top + 1, left: segment.left }
//   } else if (segment.direction === "up") {
//     return { top: segment.top - 1, left: segment.left }
//   } else if (segment.direction === "right") {
//     return { top: segment.top, left: segment.left + 1 }
//   } else if (segment.direction === "left") {
//     return { top: segment.top, left: segment.left - 1 }
//   }
//   return segment;
// }
//
// var moveSnake = function(snake) {
//   var oldSegment = snake[0];
//   var newSegment = moveSegment(oldSegment);
//   newSegment.direction = oldSegment.direction;
//   var newSnake = [newSegment];
//   return newSnake;
// }
//
// var snake = [{ top: 0, left: 0, direction: "down" }];
//
// var drawSnake = function(snakeToDraw) {
//   var drawableSnake = { color: "green", pixels: snakeToDraw };
//   var drawableObjects = [drawableSnake];
//   CHUNK.draw(drawableObjects);
// }
//
// var moveSegment = function(segment) {
//   if (segment.direction === "down") {
//     return { top: segment.top + 1, left: segment.left }
//   } else if (segment.direction === "up") {
//     return { top: segment.top - 1, left: segment.left }
//   } else if (segment.direction === "right") {
//     return { top: segment.top, left: segment.left + 1 }
//   } else if (segment.direction === "left") {
//     return { top: segment.top, left: segment.left - 1 }
//   }
//   return segment;
// }
//
// var moveSnake = function(snake) {
//   var oldSegment = snake[0];
//   var newSegment = moveSegment(oldSegment);
//   newSegment.direction = oldSegment.direction;
//   var newSnake = [newSegment];
//   return newSnake;
// }
//
//
// var advanceGame = function() {
//   snake = moveSnake(snake);
//   drawSnake(snake);
// }
//
// var snake = [{ top: 0, left: 0, direction: "down" }];
// CHUNK.executeNTimesPerSecond(advanceGame, 1);

// moves the snake to the right
// var drawSnake = function(snakeToDraw) {
//   var drawableSnake = { color: "green", pixels: snakeToDraw };
//   var drawableObjects = [drawableSnake];
//   CHUNK.draw(drawableObjects);
// }
//
// var moveSegment = function(segment) {
//   if (segment.direction === "down") {
//     return { top: segment.top + 1, left: segment.left }
//   } else if (segment.direction === "up") {
//     return { top: segment.top - 1, left: segment.left }
//   } else if (segment.direction === "right") {
//     return { top: segment.top, left: segment.left + 1 }
//   } else if (segment.direction === "left") {
//     return { top: segment.top, left: segment.left - 1 }
//   }
//   return segment;
// }
//
// var moveSnake = function(snake) {
//   var oldSegment = snake[0];
//   var newSegment = moveSegment(oldSegment);
//   newSegment.direction = oldSegment.direction;
//   var newSnake = [newSegment];
//   return newSnake;
// }
//
//
// var advanceGame = function() {
//   snake = moveSnake(snake);
//   drawSnake(snake);
// }
//
// var snake = [{ top: 0, left: 0, direction: "right" }];
// CHUNK.executeNTimesPerSecond(advanceGame, 1);
// var drawSnake = function(snakeToDraw) {
//   var drawableSnake = { color: "green", pixels: snakeToDraw };
//   var drawableObjects = [drawableSnake];
//   CHUNK.draw(drawableObjects);
// }
//
// var moveSegment = function(segment) {
//   switch(segment.direction) {
//     case "down":
//       return { top: segment.top + 1, left: segment.left };
//     case "up":
//       return { top: segment.top - 1, left: segment.left };
//     case "right":
//       return { top: segment.top, left: segment.left + 1 }
//     case "left":
//       return { top: segment.top, left: segment.left - 1 }
//     default:
//       return segment;
//   }
// }
//
// var segmentFurtherForwardThan = function(index, snake) {
//   if (snake[index - 1] === undefined) {
//     return snake[index];
//   } else {
//     return snake[index - 1];
//   }
// }
//
// var moveSnake = function(snake) {
//   var newSnake = [];
//   snake.forEach(function(oldSegment) {
//     var newSegment = moveSegment(oldSegment);
//     newSegment.direction = oldSegment.direction;
//     newSnake.push(newSegment);
//   });
//
//   return newSnake;
// }
//
//
// var advanceGame = function() {
//   snake = moveSnake(snake);
//   if (CHUNK.detectCollisionBetween(snake, CHUNK.gameBoundaries())) {
//     CHUNK.endGame();
//     CHUNK.flashMessage("Whoops! you hit a wall!");
//   }
//   drawSnake(snake);
// }
// var changeDirection = function(direction) {
//   snake[0].direction = direction;
// }
//
// var snake = [{ top: 1, left: 0, direction: "down" }, { top: 0, left: 0, direction: "down" }];
// CHUNK.executeNTimesPerSecond(advanceGame, 8);
// CHUNK.onArrowKey(changeDirection);
// var draw = function(snakeToDraw, apple) {
//   var drawableSnake = { color: "green", pixels: snakeToDraw };
//   var drawableApple = { color: "red", pixels: [apple] };
//   var drawableObjects = [drawableSnake, drawableApple];
//   CHUNK.draw(drawableObjects);
// }
//
// var moveSegment = function(segment) {
//   switch(segment.direction) {
//     case "down":
//       return { top: segment.top + 1, left: segment.left };
//     case "up":
//       return { top: segment.top - 1, left: segment.left };
//     case "right":
//       return { top: segment.top, left: segment.left + 1 }
//     case "left":
//       return { top: segment.top, left: segment.left - 1 }
//     default:
//       return segment;
//   }
// }
//
// var segmentFurtherForwardThan = function(index, snake) {
//   return snake[index - 1] || snake[index];
// }
//
// var moveSnake = function(snake) {
//   return snake.map(function(oldSegment, segmentIndex) {
//     var newSegment = moveSegment(oldSegment);
//     newSegment.direction = segmentFurtherForwardThan(segmentIndex, snake).direction;
//     return newSegment;
//   });
// }
//
// var growSnake = function(snake) {
//   var indexOfLastSegment = snake.length - 1;
//   var lastSegment = snake[indexOfLastSegment];
//   snake.push({ top: lastSegment.top, left: lastSegment.left });
//   return snake;
// }
//
// var advanceGame = function() {
//   snake = moveSnake(snake);
//   if (CHUNK.detectCollisionBetween([apple], snake)) {
//     snake = growSnake(snake);
//     apple = CHUNK.randomLocation();
//   }
//   if (CHUNK.detectCollisionBetween(snake, CHUNK.gameBoundaries())) {
//     CHUNK.endGame();
//     CHUNK.flashMessage("Whoops! you hit a wall!");
//   }
//   draw(snake, apple);
// }
//
// var changeDirection = function(direction) {
//   snake[0].direction = direction;
// }
//
// var apple = CHUNK.randomLocation();
// var snake = [{ top: 1, left: 0, direction: "down" }, { top: 0, left: 0, direction: "down" }];
//
// CHUNK.executeNTimesPerSecond(advanceGame, 1);
// CHUNK.onArrowKey(changeDirection);

// Lesson 13
var draw = function(snakeToDraw, apple) {
  var drawableSnake = { color: "green", pixels: snakeToDraw };
  var drawableApple = { color: "red", pixels: [apple] };
  var drawableObjects = [drawableSnake, drawableApple];
  CHUNK.draw(drawableObjects);
}

var moveSegment = function(segment) {
  switch(segment.direction) {
    case "down":
      return { top: segment.top + 1, left: segment.left };
    case "up":
      return { top: segment.top - 1, left: segment.left };
    case "right":
      return { top: segment.top, left: segment.left + 1 }
    case "left":
      return { top: segment.top, left: segment.left - 1 }
    default:
      return segment;
  }
}

var segmentFurtherForwardThan = function(index, snake) {
  return snake[index - 1] || snake[index];
}

var moveSnake = function(snake) {
  return snake.map(function(oldSegment, segmentIndex) {
    var newSegment = moveSegment(oldSegment);
    newSegment.direction = segmentFurtherForwardThan(segmentIndex, snake).direction;
    return newSegment;
  });
}

var growSnake = function(snake) {
  var tipOfTailIndex = snake.length - 1;
  var tipOfTail = snake[tipOfTailIndex];
  snake.push({ top: tipOfTail.top, left: tipOfTail.left });
  return snake;
}

var ate = function(snake, otherThing) {
  var head = snake[0];
  return CHUNK.detectCollisionBetween([head], otherThing);
}

var advanceGame = function() {
  var newSnake = moveSnake(snake);

  if (ate(newSnake, snake)) {
    CHUNK.endGame();
    CHUNK.flashMessage("Whoops! You ate yourself!");
  }

  if (ate(newSnake, [apple])) {
    newSnake = growSnake(newSnake);
    apple = CHUNK.randomLocation();
  }

  if (ate(newSnake, CHUNK.gameBoundaries())) {
    CHUNK.endGame();
    CHUNK.flashMessage("Whoops! you hit a wall!");
  }

  snake = newSnake;
  draw(snake, apple);
}

var changeDirection = function(direction) {
  snake[0].direction = direction;
}

var apple = CHUNK.randomLocation();
var snake = [{ top: 1, left: 0, direction: "down" }, { top: 0, left: 0, direction: "down" }];

CHUNK.executeNTimesPerSecond(advanceGame, 1);
CHUNK.onArrowKey(changeDirection);
