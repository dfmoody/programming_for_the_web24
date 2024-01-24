const myMovies = ['Inception \n', 'The Man Who Knew Too Little \n', 'The Truman Show \n', 'Dark Knight \n', 'Warrior \n']

const movie6 = window.prompt('What is your favorite movie?');
myMovies.push(movie6);

window.alert('Best Movies List:\n' + myMovies.join(''));

console.log(myMovies);
