import generateRandomPosition from "./utils/generateRandomPosition.js";
/**
 * creates an enemy object - the function is
 * imported and called in the main.js file
 */

const spawnEnemy = (enemySprite, score) => {
  const [randPosX, randPosY] = generateRandomPosition(100, 500); // using array destructuring assign variables to the return values
  let enemyWidth = 50;
  let enemyHeight = 50;
  if (enemySprite === "frog-lady") {
    enemyWidth = 50;
    enemyHeight = 56;
  } else if (enemySprite === "mandalorian") {
    enemyWidth = 50;
    enemyHeight = 61;
  }

  const enemy = add([
    sprite(enemySprite),
    area(),
    pos(randPosX, randPosY), // random position passed in on main.js
    "enemy", // tagged with enemy to reference later on
  ]);

  // set the initial enemy speed
  let enemyXSpeed = 100 + score * 2;
  let enemyYSpeed = 100 + score * 2;

  // add randomness to enemy movement
  enemy.onUpdate(() => {
    let randDir = rand() * 10 >= 5 ? rand() * 10 : rand() * -10; // generate random number for shifting position slightly so we don't have to change the speed

    // if the enemy hits the edge of the screen, reverse the direction
    if (
      (enemy.pos.x + enemyWidth > width() && enemyXSpeed > 0) ||
      (enemy.pos.x <= 0 && enemyXSpeed < 0)
    ) {
      enemyXSpeed = -enemyXSpeed;
      enemy.pos.y = enemy.pos.y + randDir;
    }
    if (
      (enemy.pos.y > height() - enemyHeight && enemyYSpeed > 0) ||
      (enemy.pos.y < 0 && enemyYSpeed < 0)
    ) {
      enemyYSpeed = -enemyYSpeed;
      enemy.pos.x = enemy.pos.x + randDir;
    }

    enemy.move(enemyXSpeed, enemyYSpeed);
  });

  return enemy;
};

// export the function so we have access to it in main.js
export default spawnEnemy;
