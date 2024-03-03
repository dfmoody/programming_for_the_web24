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
      <td>{props.image}</td>
      <td>{props.description}</td>
    </tr>
  );
};
  
export default MovieCollection;