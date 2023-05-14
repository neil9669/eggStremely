import spawnEnemy from "./enemy.js";
import generateScenes from "./scenes.js";
import spawnEggJar from "./eggJar.js";

// initialize kaboom context
kaboom({
  background: [0, 0, 255],
  width: 800,
  height: 600,
  canvas: document.getElementById("main-game-canvas"), // select canvas element
  fullscreen: true,
  scale: 1,
  debug: true,
});

loadRoot("../../public/sprites/");
loadSprite("egg-jar", "egg-jar.png");
loadSprite("frog-lady", "frog-lady.png");
loadSprite("mandalorian", "mandalorian.png");
loadSprite("babyYoda", "grogu.png");
generateScenes();

go("welcome");

const playerInitialXPos = width() / 10;
const playerInitialYPos = height() - height() / 5;

// add player sprite - player sprite will just
// be a square until we can add later
const player = add([
  rect(40, 40),
  pos(playerInitialXPos, playerInitialYPos),
  color(255, 0, 0),
  "player",
]);

/**
 * function to generate a random position that is
 * a set distance away from the player
 */
const generateRandomPosition = (playerInitialXPos, playerInitialYPos) => {
  const randomXPos = Math.floor(Math.random() * width());
  const randomYPos = Math.floor(Math.random() * height());
  const distanceFromPlayer = 200;
  if (
    randomXPos > playerInitialXPos - distanceFromPlayer &&
    randomXPos < playerInitialXPos + distanceFromPlayer &&
    randomYPos > playerInitialYPos - distanceFromPlayer &&
    randomYPos < playerInitialYPos + distanceFromPlayer
  ) {
    return generateRandomPosition(playerInitialXPos, playerInitialYPos);
  } else {
    return [randomXPos, randomYPos];
  }
};

// set the initial player speed
let playerSpeed = 120;

keyDown("left", () => {
  player.move(-playerSpeed, 0);
});

keyDown("right", () => {
  player.move(playerSpeed, 0);
});

keyDown("up", () => {
  player.move(0, -playerSpeed);
});

keyDown("down", () => {
  player.move(0, playerSpeed);
});

// canvas focus enables user keyboard input register
canvas.focus();
