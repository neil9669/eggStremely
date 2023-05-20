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
      color(YELLOW),
      pos(width() / 4, height() / 2),
      scale(0.5),
      origin("center"),
      area(),
      "start-text",
    ]);
    const instructionsText = add([
      text("How to play"),
      color(YELLOW),
      pos(width() / 4, height() / 2 + 100),
      scale(0.5),
      origin("center"),
      area(),
      "instructions-text",
    ]);

    onClick("start-text", () => {
      go("game", { timeLeft: 10, score: 0, livesLeft: 3 });
    });

    onClick("instructions-text", () => {
      go("instructions");
    });

    onKeyDown("enter", () => {
      go("game", { timeLeft: 10, score: 0, eggs: 0 });
    });
  });

  // add instructions screen
  scene("instructions", () => {
    const instructionsBackground = add([
      sprite("instructions-background"),
      pos(0, 0),
      origin("topleft"),
      scale(1),
    ]);

    add([
      text("Go back"),
      pos(600, 550),
      color(YELLOW),
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
  scene("game", ({ timeLeft, score, livesLeft }) => {
    layers(["bg", "game", "ui"], "game");

    // add background tiles
    const generateFloorTiles = () => {
      let positionX = 0;
      let positionY = 70;
      for (let i = 0; i < width(); i++) {
        if (positionX > width()) {
          positionX = 0;
          positionY += 50;
        }
        add([
          sprite("background-floor-tile"),
          pos(positionX, positionY),
          scale(0.747),
          layer("bg"),
        ]);

        positionX += 50;
      }
    };

    const generateWallTiles = () => {
      let positionX = 0;
      for (let i = 25; i < width(); i += 25) {
        add([
          sprite("background-wall-tile"),
          pos(positionX, 0),
          scale(0.747),
          layer("bg"),
        ]);

        positionX += 50;
      }
    };

    generateFloorTiles();
    generateWallTiles();

    // add the door
    add([
      sprite("background-door"),
      pos(width() / 2 - 2, 0),
      scale(0.747),
      layer("bg"),
      area(),
      solid(),
      "door",
    ]);

    // spawn an enemy
    // the third argument for colour can either be one of
    // the kaboom colours or an rgb value - e.g. rgb(255, 0, 0)
    const frogLady = spawnEnemy("frog-lady", score); // spawn frog enemy
    if (score >= 50) {
      const mandalorian = spawnEnemy("mandalorian", score); // spawn Mando enemy
    }

    // spawn the egg jar
    const eggJar = spawnEggJar();

    // spawn baby yoda
    const babyYoda = spawnBabyYoda(score);


    // check for collision between babyYoda and eggJar
    babyYoda.onCollide("egg-jar", () => {
      score += 10;
      burp({ volume: 0.5 });
      go("game", { timeLeft, score, livesLeft });
    });

    // check for collision between babyYoda and enemy
    babyYoda.onCollide("enemy", () => {
      livesLeft -= 1;
      if (livesLeft === 0) {
        go("lose", score);
      } else {
        go("game", { timeLeft, score, livesLeft });
      }
    });

    // display score
    add([
      text(`Score:${score}`),
      pos(width() * 0.01, 0),
      layer("ui"),
      scale(0.4),
    ]);

    // Display Time left text
    add([
      text("Time left:"),
      pos(width()*0.7, 0),
      layer("ui"),
      scale(0.4),
    ]);
    
    // Display time left
    const timer = add([
      text("0"),
      pos(width()*0.93, 0),
      layer("ui"),
        {
          time: timeLeft,
        },  
      scale(0.4),
    ])

    // update timer
    timer.action(() => {
      timer.time -= dt()
      timer.text = timer.time.toFixed(0)
      if (livesLeft === 0) {
        go("lose", score);
      } else if (timer.time <= 0) { 
        timer.time = 0,
        livesLeft -= 1,
        go("game", { timeLeft, score, livesLeft});
      }
    })

    // Display lives remaining
    add([
      text(`Lives left:${livesLeft}`),
      pos(width() * 0.3, 0),
      layer("ui"),
      scale(0.4),
    ]);
  });

  // add the lose scene
  scene("lose", (score) => {
    layers(["bg", "game", "ui"], "game");
    const gameOverBackground = add([
      sprite("game-over-background"),
      pos(0, 0),
      origin("topleft"),
      scale(1),
      layer("bg"),
    ]);

    // display score
    add([
      text(`Your Score:${score}`),
      pos(width() * 0.25, height() * 0.3),
      color(YELLOW),
      layer("ui"),
      scale(0.8),
    ]);

    const startText = add([
      text("Play again"),
      color(YELLOW),
      pos(width() / 2, height() - height() / 10),
      scale(0.5),
      origin("center"),
      area(),
      "play-again-text",
    ]);

    onClick("play-again-text", () => {
      go("game", { tl: 10, score: 0, livesLeft: 3 });
    });
  });
};

export default generateScenes;
