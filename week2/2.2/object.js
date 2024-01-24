
const game1 = {
  type: 'Wii',
  title: 'Zelda: Breath of the Wild',
  year: 2017
};
const game2 = {
  type: 'Wii',
  title: 'Zelda: Tears of the Kingdom',
  year: 2023
};
const game3 = {
  type: 'N64',
  title: 'GoldenEye 007',
  year: 1997
};
const game4 = {
  type: 'NES',
  title: 'Super Mario Bros 3',
  year: 1988
};
const game5 = {
  type: 'NES',
  title: 'Final Fantasy',
  year: 1987
};

const bestGames = [game1, game2, game3, game4, game5];
console.log(bestGames)

const answer = window.prompt("I have 5 games in my collection. Pick a number between 1 and 5 and I'll tell you about that game");

window.alert('You selected ' + bestGames[answer - 1].title + ' which is a ' + bestGames[answer - 1].type + ' game made in ' + bestGames[answer - 1].year)
