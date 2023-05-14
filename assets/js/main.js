import generateScenes from "./scenes.js";

// initialize kaboom context
kaboom({
  background: [0, 0, 255],
  burp: true,
  width: 800,
  height: 600,
  canvas: document.getElementById("main-game-canvas"), // select canvas element
  fullscreen: true,
  scale: 1,
});

loadRoot("../../public/sprites/");
loadSprite("egg-jar", "egg-jar.png");
loadSprite("frog-lady", "frog-lady.png");
loadSprite("mandalorian", "mandalorian.png");
loadSprite("babyYoda", "grogu.png");
loadSprite("background-floor-tile", "background-floor-tile.png");
loadSprite("background-wall-tile", "background-wall-tile.png");
loadSprite("background-door", "background-door.png");
generateScenes();

go("welcome");

// canvas focus enables user keyboard input register
canvas.focus();
