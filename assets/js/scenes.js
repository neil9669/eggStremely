import spawnEnemy from "./enemy.js";
import spawnEggJar from "./eggJar.js";
import spawnBabyYoda from "./babyYoda.js";

/**
 * Generates the scenes for the game - called by go("sceneName")
 */
const generateScenes = () => {
  // add welcome screen
  scene("welcome", () => {
    const startText = add([
      text("Start Game"),
      pos((width() / 4) * 3, height() / 2),
      scale(0.5),
      origin("center"),
      area(),
      "start-text",
    ]);

    const babyYoda = add([
      sprite("babyYoda"),
      pos(width() / 3, height() / 2),
      scale(5),
      origin("center"),
    ]);

    onClick("start-text", () => {
      go("game", {tl: 10, score: 0, eggs: 0});
    });
  });

  // add the game scene
  scene("game", ({tl, score, eggs}) => {
    layers(["bg", "game", "ui"], "game");
    add([text("game"), pos(width() / 2, height() / 10), origin("center")]);
    // spawn an enemy
    // the third argument for colour can either be one of
    // the kaboom colours or an rgb value - e.g. rgb(255, 0, 0)
    spawnEnemy("frog-lady"); // spawn frog enemy
    spawnEnemy("mandalorian"); // spawn Mando enemy

    // spawn the egg jar
    spawnEggJar();

    // spawn baby yoda
    spawnBabyYoda();
    
    // display score
    add([
        text("Score:0"),
        pos(10, 0),
        layer("ui"),
        {
          value: score,
        },
        scale(0.4),
    ]);
    // Display time left
    add([
      text("Time left:" + parseInt(tl)),
      pos(550, 0),
      layer("ui"),
      scale(0.4),
    ]);

    // Display eggs collected
    add([
      text("Eggs collected:" + parseInt(eggs)),
      pos(210, 0),
      layer("ui"),
      scale(0.4),
    ]);
    
  });

  // add the lose scene
  scene("lose", (score) => {
    add([text("lose"), pos(width() / 2, height() / 2), origin("center")]);
  });
};

export default generateScenes;
