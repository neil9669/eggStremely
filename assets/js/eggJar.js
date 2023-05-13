import generateRandomPosition from "./utils/generateRandomPosition.js";

/**
 * creates a static jar of eggs - the function is
 * imported and called in the main.js file
 */
const spawnEggJar = (colour) => {
  const [randPosX, randPosY] = generateRandomPosition(); // using array destructuring assign variables to the return values
  const eggJar = add([
    sprite("egg-jar"),
    pos(randPosX, randPosY),
    "egg-jar", // tag to reference later on
  ]);
};

export default spawnEggJar;
