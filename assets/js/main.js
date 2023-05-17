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

loadRoot("../../public/scene_background_images/");
loadSprite("welcome-background", "welcome-screen.png");
loadSprite("instructions-background", "instructions-screen.png");
loadSprite("game-over-background", "game-over-screen.png");

loadRoot("../../public/sounds/");
loadSound("frog-lady-double", "frog-lady-double.mp3");
loadSound("mando-this-is-the-way", "mando-this-is-the-way.mp3");
loadSound("grogu-1", "grogu-1.mp3");

generateScenes();

go("welcome");

// canvas focus enables user keyboard input register
canvas.focus();
