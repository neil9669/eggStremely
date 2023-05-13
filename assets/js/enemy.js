/**
 * creates an enemy object - the function is
 * imported and called in the main.js file
 */
const spawnEnemy = (randX, randY) => {
  const enemy = add([
    rect(40, 40), // placeholder until we have a sprite
    color("black"), // colour of the box until we have a sprite
    pos(randX, randY),
    "enemy", // tagged with enemy to reference later on
  ]);

  return enemy;
};

// export the function so we have access to it in main.js
export default spawnEnemy;
