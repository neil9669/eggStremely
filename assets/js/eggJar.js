import generateRandomPosition from "./utils/generateRandomPosition.js";

/**
 * creates a static jar of eggs - the function is
 * imported and called in the main.js file
 */
const spawnEggJar = () => {
  const [randPosX, randPosY] = generateRandomPosition(100, 500); // using array destructuring assign variables to the return values
  const eggJar = add([
    sprite("egg-jar"),
    area(),
    pos(randPosX, randPosY),
    "egg-jar", // tag to reference later on
  ]);

  return eggJar;
};

export default spawnEggJar;
