import spawnEnemy from "./enemy.js";
import spawnEggJar from "./eggJar.js";

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
    spawnEnemy(GREEN); // spawn frog enemy
    spawnEnemy(CYAN); // spawn Mando enemy

    spawnEggJar(WHITE); // spawn the egg jar
  });

  // add the lose scene
  scene("lose", (score) => {
    add([text("lose"), pos(width() / 2, height() / 2), origin("center")]);
  });
};

export default generateScenes;
