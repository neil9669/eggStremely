/**
 * function to generate a random position that is
 * a set distance away from the player
 */
const generateRandomPosition = (playerInitialXPos, playerInitialYPos) => {
  const randomXPos = Math.floor(Math.random() * width());
  const randomYPos = Math.floor(Math.random() * height());
  const distanceFromPlayer = 200;
  if (
    randomXPos - 60 < 0 ||
    randomYPos - 60 < 0 ||
    randomXPos + 60 > width() ||
    randomYPos + 60 > height()
  ) {
    return generateRandomPosition(playerInitialXPos, playerInitialYPos);
  } else if (
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

export default generateRandomPosition;
