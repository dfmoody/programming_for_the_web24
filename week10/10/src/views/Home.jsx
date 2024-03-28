import {Link} from "react-router-dom";
import carData from "../assets/car-list.json";

export function Home() {
    return (
        <>
        <h1>TOP 10 ELECTRIC VEHICLES</h1>
        <div className="carList">
        {carData.map((car) => {
            return (
                <div className="carBox" key={car.slug}>
                    <Link to={`${car.slug}`}>
                    <img src={car.image} alt={car.name} />
                    <p><h4>{car.name}</h4> by {car.maker}</p>
                    </Link>
                    <div className="carRank">
                    <h5>{car.rank}</h5>
                    </div>
                </div>
            )
        })}
        </div>
        </>
    )
}