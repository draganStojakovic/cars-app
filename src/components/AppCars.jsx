import { useState, useEffect } from "react";
import { carService } from "../services/CarService";

export const AppCars = () => {
  const [cars, setCars] = useState([]);

  const handleGetCars = async () => {
    const { data } = await carService.getAll();
    setCars(data);
  };

  useEffect(() => {
    handleGetCars();
  }, []);

  return (
    <div>
      <tabel>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Max Speed</th>
            <th>Automatic</th>
            <th>Engine</th>
            <th>Number of Doors</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.maxSpeed}</td>
              <td>{car.isAutomatic}</td>
              <td>{car.engine}</td>
              <td>{car.numberOfDoors}</td>
            </tr>
          ))}
        </tbody>
      </tabel>
    </div>
  );
};
