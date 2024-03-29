import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCopy } from '@fortawesome/free-solid-svg-icons';

const MovieCollection = (props) => {
  // Ternary condition ? valueIfTrue : valueIfFalse
  // If index is divisible by 2 that make it "even-row", if not make it "odd-row"
  const rowClass = props.index % 2 === 0 ? 'even-row' : 'odd-row';

  // return Table Row (with variable className)
  // include table data for properties: name, year, genre and description
  return (
    <tr className={rowClass}>
      <td className="movieName">{props.name}</td>
      <td>{props.year}</td>
      <td>{props.genre}</td>
      <td><img className='movie-image' src={props.image}></img></td>
      <td>{props.description}</td>
      <td>
        <button onClick={props.onDuplicate} className="button buttonDuplicate"><FontAwesomeIcon icon={faCopy} /></button> {/* Duplicate button */}
        <button onClick={props.onDelete} className="button buttonDelete"><FontAwesomeIcon icon={faTrash} /></button> {/* Delete button */}
      </td>
    </tr>
  );
};
  
export default MovieCollection;