import { useContext } from "react";
import { CarsContext } from "../App";

export const AppCars = () => {
  const data = useContext(CarsContext);
  return (
    <div>
      <h1>Cars</h1>
      {data && (
        <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Model</th>
              <th>Year</th>
              <th>Max Speed</th>
              <th>Automatic</th>
              <th>Engine</th>
              <th>Doors</th>
            </tr>
          </thead>
          <tbody>
            {data.map((car) => (
              <tr key={car.id}>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.maxSpeed} Km/h</td>
                <td>{car.isAutomatic ? "Yes" : "No"}</td>
                <td>{car.engine}</td>
                <td>{car.numberOfDoors}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
