/**
 * creates a static jar of eggs - the function is
 * imported and called in the main.js file
 */
const spawnEggJar = (randPosX, randPosY, colour) => {
  const eggJar = add([
    rect(40, 40),
    pos(randPosX, randPosY),
    color(colour),
    "egg-jar", // tag to reference later on
  ]);
};

export default spawnEggJar;
