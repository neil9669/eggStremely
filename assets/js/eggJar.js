/**
 * creates a static jar of eggs - the function is
 * imported and called in the main.js file
 */
const spawnEggJar = (randPosX, randPosY, colour) => {
  const eggJar = add([
    rect(40, 40), // placeholder until we have a sprite
    pos(randPosX, randPosY),
    color(colour), // colour of the box until we have a sprite
    "egg-jar", // tag to reference later on
  ]);
};

export default spawnEggJar;
