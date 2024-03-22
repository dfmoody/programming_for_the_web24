import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCopy, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import '../components/MovieCard.css';

const MovieCollection = (props) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="movie-card">
      <img className='movie-image' src={props.image} alt={props.name} />
      <div className="movie-details">
        <h2 className="movie-name">{props.name}</h2>
        <p><strong>Year:</strong> {props.year}</p>
        <p><strong>Genre:</strong> {props.genre}</p>
        <div className="description-section">
          <button className="toggle-description" onClick={toggleDescription}>
            {showDescription ? "Hide Description" : "Show Description"}
            <FontAwesomeIcon icon={showDescription ? faAngleUp : faAngleDown} />
          </button>
          {showDescription && <p className="movie-description">{props.description}</p>}
        </div>
      </div>
      <div className="movie-actions">
        <button onClick={props.onDuplicate} className="button buttonDuplicate"><FontAwesomeIcon icon={faCopy} /></button>
        <button onClick={props.onDelete} className="button buttonDelete"><FontAwesomeIcon icon={faTrash} /></button>
      </div>
    </div>
  );
};
  
export default MovieCollection;
