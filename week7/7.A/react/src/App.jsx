import { useState } from 'react'
import './App.css'
import MovieCollection from './components/Movie.jsx';

const App = () => {
  // Create array of movies with properties: name, year, genre and description
  const movies = [
    {
      name: "Back to the Future",
      year: 1985,
      genre: "Science Fiction",
      image: '/images/back.jpg',
      description: "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown."
    },
    {
      name: "Indiana Jones and the Raiders of the Lost Ark",
      year: 1981,
      genre: "Action, Adventure",
      image: "/images/raiders.jpg",
      description: "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers."
    },
    {
      name: "The Terminator",
      year: 1984,
      genre: "Science Fiction, Action",
      image: "/images/terminator.jpg",
      description: "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity's future salvation."
    },
    {
      name: "E.T. the Extra-Terrestrial",
      year: 1982,
      genre: "Science Fiction, Family",
      image: "/images/et.jpg",
      description: "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world."
    },
    {
      name: "The Shining",
      year: 1980,
      genre: "Horror",
      image: "/images/shining.jpg",
      description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future."
    }
  ];

  // return div, h1, and table
  // within table include table headers for name, year, genre and description
  // within table include table body pulling from MovieCollection.jsx prop
  // use .map to iterate each element from the movies array {__.map((arguments) => (<Movie Collection />))}
  // MovieCollection set key to index
  // Because the ternary in MovieCollection refers to index, declare index={index} 
  // MovieCollection {...movie} spread operator for the 
  return (
    <div className='movieTable'>
      <h1>1980's VHS Collection</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Image</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <MovieCollection key={index} index={index} {...movie} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;