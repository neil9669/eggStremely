const spawnBabyYoda = (score) => {
  const babyYoda = add([sprite("babyYoda"), area(), pos(100, 500), "babyYoda"]);

  const babyYodaWidth = 70;
  const babyYodaHeight = 50;

  let movementSpeed = 150;
  //check input on each frame
  // Define the keyboard keys for movement
  const MOVE_LEFT_KEY = "left";
  const MOVE_RIGHT_KEY = "right";
  const MOVE_UP_KEY = "up";
  const MOVE_DOWN_KEY = "down";

  // Add sound for when babyYoda first appears
  if (score == 0) {
    play("grogu-1", {
      volume: 1,
    });
  }
  
  // Handle keyboard input
  onKeyDown(MOVE_LEFT_KEY, () => {
    if (babyYoda.pos.x > 0) {
      babyYoda.move(-movementSpeed, 0);
    }
  });

  onKeyDown(MOVE_RIGHT_KEY, () => {
    if (babyYoda.pos.x <= width() - babyYodaWidth) {
      babyYoda.move(movementSpeed, 0);
    }
  });

  onKeyDown(MOVE_UP_KEY, () => {
    if (babyYoda.pos.y > 0) {
      babyYoda.move(0, -movementSpeed);
    }
  });

  onKeyDown(MOVE_DOWN_KEY, () => {
    if (babyYoda.pos.y <= height() - babyYodaHeight) {
      babyYoda.move(0, movementSpeed);
    }
  });

  return babyYoda;
};

export default spawnBabyYoda;
