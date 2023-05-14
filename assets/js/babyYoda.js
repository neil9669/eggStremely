
const spawnBabyYoda = (randPosX, randPosY) => {
    const babyYoda = add([
        sprite("babyyoda"),
        pos(randPosX, randPosY),
        "babyyoda", 
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
                if (babyYoda.pos.x > 0) {
                    babyYoda.move(-movementSpeed, 0);

                }
                
            });

            onKeyDown(MOVE_RIGHT_KEY, () => {
                // if (babyYoda.pos.y > 0) {
                    babyYoda.move(movementSpeed, 0);
                // }
 
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