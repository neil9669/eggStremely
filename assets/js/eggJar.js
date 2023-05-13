/**
 * creates a static jar of eggs - the function is
 * imported and called in the main.js file
 */
const spawnEggJar = (randPosX, randPosY, colour) => {
  const eggJar = add([
    sprite("egg-jar"),
    pos(randPosX, randPosY),
    "egg-jar", // tag to reference later on
  ]);
};

export default spawnEggJar;
