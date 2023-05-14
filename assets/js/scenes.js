import spawnEnemy from "./enemy.js";
import spawnEggJar from "./eggJar.js";
import spawnBabyYoda from "./babyYoda.js";

/**
 * Generates the scenes for the game - called by go("sceneName")
 */
const generateScenes = () => {
  // add welcome screen
  scene("welcome", () => {
    add([
      text("eggStremely"),
      pos(width() / 2, height() / 2),
      origin("center"),
    ]);
  });

  // add the game scene
  scene("game", () => {
    add([text("game"), pos(width() / 2, height() / 10), origin("center")]);
    // spawn an enemy
    // the third argument for colour can either be one of
    // the kaboom colours or an rgb value - e.g. rgb(255, 0, 0)
    spawnEnemy(100, 100, "frog-lady"); // spawn frog enemy
    spawnEnemy(500, 100, "mandalorian"); // spawn Mando enemy

    // spawn the egg jar
    spawnEggJar(200, 200, WHITE);
    spawnBabyYoda(500, 200, RED);
    
  });

  // add the lose scene
  scene("lose", (score) => {
    add([text("lose"), pos(width() / 2, height() / 2), origin("center")]);
  });
};

export default generateScenes;
