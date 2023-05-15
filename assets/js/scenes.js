import spawnEnemy from "./enemy.js";
import spawnEggJar from "./eggJar.js";
import spawnBabyYoda from "./babyYoda.js";

/**
 * Generates the scenes for the game - called by go("sceneName")
 */
const generateScenes = () => {
  // add welcome screen
  scene("welcome", () => {
    const welcomeBackground = add([
      sprite("welcome-background"),
      pos(0, 0),
      origin("topleft"),
      scale(1),
    ]);
    const startText = add([
      text("Start Game"),
      pos((width() / 4) * 3, height() / 2),
      scale(0.5),
      origin("center"),
      area(),
      "start-text",
    ]);
    const instructionsText = add([
      text("How to play"),
      pos((width() / 4) * 3, height() / 2 + 50),
      scale(0.5),
      origin("center"),
      area(),
      "instructions-text",
    ]);

    onClick("start-text", () => {
      go("game", { tl: 10, score: 0, livesLeft: 3 });
    });

    onClick("instructions-text", () => {
      go("instructions");
    });
  });

  // add instructions screen
  scene("instructions", () => {
    add([
      text("Go back"),
      pos(100, 525),
      scale(0.5),
      origin("left"),
      area(),
      "back",
    ]);

    onClick("back", () => {
      go("welcome");
    });
  });

  // add the game scene
  scene("game", ({ tl, score, livesLeft }) => {
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
    const babyYoda = spawnBabyYoda();

    // check for collision between babyYoda and eggJar
    babyYoda.onCollide("egg-jar", () => {
      score += 10;
      burp({ volume: 0.5 });
      go("game", { tl, score, livesLeft });
    });

    // check for collision between babyYoda and enemy
    babyYoda.onCollide("enemy", () => {
      livesLeft -= 1;
      if (livesLeft === 0) {
        go("lose", score);
      } else {
        go("game", { tl, score, livesLeft });
      }
    });

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

    // Display lives remaining
    add([
      text("Lives left: " + parseInt(livesLeft)),
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
