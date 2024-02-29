// Define a functional component called Camelid
// include propeties as an argument.
import "./camelid.css"

function Camelid ({name, image, trivia}) {
    return (
      <div>
        <h2>{name}</h2>
        <img className='camelid-image' src={image}></img>
        <h3>{trivia}</h3>
      </div>
    );
  };
  
  export default Camelid;