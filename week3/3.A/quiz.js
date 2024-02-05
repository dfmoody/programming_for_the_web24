let submitAnswerButton;
let questionInput;
let currentQuestion;
let response;
let responseColor = 'black';
let heading;
let statements = [
  { question: '"The Mona Lisa" was painted by Leonardo ____________', answer: 'da vinci' },
  { question: '"The Starry Night" was painted by Vincent ___________', answer: 'van gogh' },
  { question: '"The Girl with a Pearl Earring" was painted by Johannes ___________', answer: 'vermeer' },
  { question: '"Impression Sunrise" was painted by Claude ___________', answer: 'monet' },
  { question: '"The Kiss" was painted by Gustav ____________', answer: 'klimt' }
];

let correctAnswersCount = 0; // Counter for correct answers
let incorrectAnswersCount = 0; // Counter for incorrect answers

function next () {
  if (statements.length < 1) {
    window.alert('CONGRATULATIONS. YOU WON!!');
    return;
  }
  const randomIndex = Math.ceil(Math.random() * statements.length - 1);
  return statements[randomIndex];
}

// reset game
function resetGame() {
  incorrectAnswersCount = 0;
  correctAnswersCount = 0;
  response = '';
  currentQuestion = next();
  message = currentQuestion.question;
  questionInput.value('');
}

function checkQuestion () {
  if (currentQuestion.answer === questionInput.value()) {
    // remove correct answer from array
    statements = statements.filter(statementObj => {
      return currentQuestion.answer !== statementObj.answer;
    });
    responseColor = 'black';
    // this is the correct condition
    response = "Great Job! Let's try another one!";
    correctAnswersCount++; // correct answers count
  } else {
    // this is the wrong answer condition
    response = "Oops, that wasn't quite right! Try again.";
    responseColor = 'red';
    // incorrect answers count
    incorrectAnswersCount++;
  }
  if (incorrectAnswersCount === 5) {
    window.alert('Sorry, you have lost the game because you have 5 Incorrect Answers! Better luck next time.');
    return;
  }
  currentQuestion = next();
  questionInput.value('');
  if (currentQuestion) {
    message = currentQuestion.question;
  }
}
currentQuestion = next();
let message = currentQuestion.question;

function setup() {
  createCanvas(850, 350);
  heading = createElement('h1', ['Famous Painters']);
  heading.position(50, 100);
  questionInput = createInput('');
  questionInput.size(200, 24);
  questionInput.position(50, 230);
  submitAnswerButton = createButton('submit answer');
  submitAnswerButton.size(210, 24);
  submitAnswerButton.mousePressed(checkQuestion);
  submitAnswerButton.position(50, 290);
  resetButton = createButton('reset game');
  resetButton.size(110, 24);
  resetButton.position (300, 290);
  resetButton.mousePressed(resetGame);
  // Add "Enter" key as an alternative to submit button
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      checkQuestion();
    }
  });
}

function draw() {
  background('aliceblue');
  fill('darkblue');
  textSize(24);
  text(message, 50, 100);
  fill(responseColor);
  text(response, 50, 250);
  fill('gray');
  textSize(12);
  text('use all lowercase', 50, 160);
  // Display correct answers count
  fill('darkgreen');
  textSize(20);
  text(`Correct Answers: ${correctAnswersCount}`, 50, 300);
  // Display incorrect answers count
  fill('darkred');
  textSize(20);
  text(`Incorrect Answers: ${incorrectAnswersCount}`, 300, 300);
}