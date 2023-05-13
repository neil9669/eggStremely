import generateRandomPosition from "./utils/generateRandomPosition.js";

/**
 * creates a static jar of eggs - the function is
 * imported and called in the main.js file
 */
const spawnEggJar = (colour) => {
  const [randPosX, randPosY] = generateRandomPosition(); // using array destructuring assign variables to the return values
  const eggJar = add([
    rect(40, 40), // placeholder until we have a sprite
    pos(randPosX, randPosY),
    color(colour), // colour of the box until we have a sprite
    "egg-jar", // tag to reference later on
  ]);
};

export default spawnEggJar;
