import generateRandomPosition from "./utils/generateRandomPosition.js";
/**
 * creates an enemy object - the function is
 * imported and called in the main.js file
 */

const spawnEnemy = (colour) => {
  const [randPosX, randPosY] = generateRandomPosition(); // using array destructuring assign variables to the return values
  console.log(randPosX, randPosY);
  const ENEMY_SIZE = 40; // temporary enemy size until we have a sprite
  const enemy = add([
    rect(ENEMY_SIZE, ENEMY_SIZE), // placeholder until we have a sprite
    color(colour), // colour of the box until we have a sprite
    pos(randPosX, randPosY), // random position passed in on main.js
    "enemy", // tagged with enemy to reference later on
  ]);

  // set the initial enemy speed
  let enemyXSpeed = 150;
  let enemyYSpeed = 150;

  // add randomness to enemy movement
  enemy.onUpdate(() => {
    let randDir = rand() * 10 >= 5 ? rand() * 10 : rand() * -10; // generate random number for shifting position slightly so we don't have to change the speed

    // if the enemy hits the edge of the screen, reverse the direction
    if (enemy.pos.x > width() - ENEMY_SIZE || enemy.pos.x < 0) {
      enemyXSpeed = -enemyXSpeed;
      enemy.pos.y = enemy.pos.y + randDir;
    }
    if (enemy.pos.y > height() - ENEMY_SIZE || enemy.pos.y < 0) {
      enemyYSpeed = -enemyYSpeed;
      enemy.pos.x = enemy.pos.x + randDir;
    }

    enemy.move(enemyXSpeed, enemyYSpeed);
  });

  return enemy;
};

// export the function so we have access to it in main.js
export default spawnEnemy;
