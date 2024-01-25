
const game1 = {
  type: 'Wii',
  title: 'Zelda: Breath of the Wild',
  year: 2017,
  description: '"The Legend of Zelda: Breath of the Wild" for the Wii U and Nintendo Switch is an open-world action-adventure game. Players control Link, awakening from a century-long slumber to defeat Calamity Ganon. With vast landscapes, innovative gameplay, and a rich narrative, it redefines the Zelda series with exploration and survival elements.'
};
const game2 = {
  type: 'Wii',
  title: 'Zelda: Tears of the Kingdom',
  year: 2023,
  description: '"The Legend of Zelda: Tears of the Kingdom" retains the open-world gameplay of its predecessor, and features two new areas called the sky and the Depths. The player has access to various devices that aid combat or exploration, and may use new powers that replace the Runes from its predecessor.'
};
const game3 = {
  type: 'N64',
  title: 'GoldenEye 007',
  year: 1997,
  description: '"007 GoldenEye" for the Nintendo 64 is a first-person shooter that immerses players in the world of James Bond. Released in 1997, it features a compelling single-player campaign based on the film, with iconic multiplayer modes. It revolutionized console gaming, setting standards for FPS titles with its engaging gameplay and graphics.'
};
const game4 = {
  type: 'NES',
  title: 'Super Mario Bros 3',
  year: 1988,
  description: '"Super Mario Bros. 3" for the NES is a classic platformer released in 1988. Join Mario and Luigi on a quest to rescue Princess Peach from the villainous Bowser. With vibrant worlds, power-ups like the Tanooki Suit, and innovative level design, it remains a beloved masterpiece, defining the platforming genre.'
};
const game5 = {
  type: 'NES',
  title: 'Final Fantasy',
  year: 1987,
  description: '"Final Fantasy" for the NES, released in 1987, is a groundbreaking role-playing game (RPG). Embark on a quest to save the world from chaos as the Warriors of Light. With turn-based battles, a rich fantasy world, and a gripping narrative, it laid the foundation for the iconic Final Fantasy series.'
};

const bestGames = [game1, game2, game3, game4, game5];
console.log(bestGames)

const answer = window.prompt("I have 5 games in my collection. Pick a number between 1 and 5 and I'll tell you about that game");

window.alert('You selected ' + bestGames[answer - 1].title + ' which is a ' + bestGames[answer - 1].type + ' game made in ' + bestGames[answer - 1].year + '. \n\n' + 'Description:\n' + bestGames[answer - 1].description)
