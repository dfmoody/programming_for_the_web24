const quizQuestion1 = {
  question: 'Who painted "The Mona Lisa?"',
  answer: 'Leonardo Da Vinci'
};
const quizQuestion2 = {
  question: 'Who painted "The Sistine Chapel"',
  answer: 'Michelangelo'
};
const quizQuestion3 = {
  question: 'Who painted "The Starry Night"',
  answer: 'Vincent Van Gogh'
};
const quizQuestion4 = {
  question: 'Who painted "The Birth of Venus"',
  answer: 'Sandro Botticelli'
};
const quizQuestion5 = {
  question: 'Who painted "The Kiss"',
  answer: 'Gustav Klimt'
};
const quizQuestion6 = {
  question: 'Who painted "The Girl with a Pearl Earring"',
  answer: 'Johannes Vermeer'
};
const quizQuestion7 = {
  question: 'Who painted "Composition with Red, Blue, and Yellow"',
  answer: 'Piet Mondrian'
};
const quizQuestion8 = {
  question: 'Who painted "Las Meninas"',
  answer: 'Diego Velazquez'
};
const quizQuestion9 = {
  question: 'Who painted "Guernica"',
  answer: 'Pablo Picasso'
};
const quizQuestion10 = {
  question: 'Who painted "Impression, Sunrise"',
  answer: 'Claude Monet'
};

const quizGame = [quizQuestion1, quizQuestion2, quizQuestion3, quizQuestion4, quizQuestion5, quizQuestion6, quizQuestion7, quizQuestion8, quizQuestion9, quizQuestion10];
console.log(quizGame)

const randomIdx = Math.round(Math.random() * quizGame.length - 1);

const userAnswer = window.prompt('Answer the following Art History question: \n' + quizGame[randomIdx].question);
window.alert('You answered: \n' + userAnswer + '\nThe correct answer is: \n' + quizGame[randomIdx].answer)
