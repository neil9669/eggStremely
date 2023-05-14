
const spawnBabyYoda = (randPosX, randPosY, colour) => {
    const babyYoda = add([
      rect(40, 40), // placeholder until we have a sprite
      pos(randPosX, randPosY),
      color(colour), // colour of the box until we have a sprite
      "babyYoda", // tag to reference later on
    ]);

        //check input on each frame
        babyYoda.onUpdate(() => {

            // Define the keyboard keys for movement
            const MOVE_LEFT_KEY = "left";
            const MOVE_RIGHT_KEY = "right";
            const MOVE_UP_KEY = "up";
            const MOVE_DOWN_KEY = "down";

            const movementSpeed = 1;

            // Handle keyboard input
            onKeyDown(MOVE_LEFT_KEY, () => {
                babyYoda.move(-movementSpeed, 0);
            });

            onKeyDown(MOVE_RIGHT_KEY, () => {
                babyYoda.move(movementSpeed, 0);
 
            });

            onKeyDown(MOVE_UP_KEY, () => {
                babyYoda.move(0, -movementSpeed);
            });

            onKeyDown(MOVE_DOWN_KEY, () => {
                babyYoda.move(0, movementSpeed);
            });
        })
    };
    
  export default spawnBabyYoda;