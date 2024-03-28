import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";

export function Car({data}) {
    const {slug} = useParams();
    console.log("slug", slug);
    const selectedCar = data.find((car) => car.slug === slug);
    console.log(selectedCar)

    return(
        <>
        <nav>
            <Link to="/">Go back Home</Link>
        </nav>
        <h4>{selectedCar.name}</h4>
        <img src={selectedCar.image} alt={selectedCar.name} />
        <h1>Price: {selectedCar.price}</h1>
        <h3>{selectedCar.description}</h3>
        </>
    )
}