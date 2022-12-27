import { useState } from "react";
import { carService } from "../services/CarService";
import { useHistory } from "react-router-dom";

export const AddCar = () => {
  const history = useHistory();
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: 2022,
    maxSpeed: 0,
    isAutomatic: false,
    engine: "",
    numberOfDoors: 0,
  });

  const handleAddCar = async (e) => {
    e.preventDefault();
    if (
      !car.brand ||
      !car.model ||
      !car.year ||
      !car.maxSpeed ||
      !car.engine ||
      !car.numberOfDoors
    ) {
      alert("One or more field is blank.");
      return;
    }
    await carService.add({
      brand: car.brand,
      model: car.model,
      year: car.year,
      maxSpeed: car.maxSpeed,
      isAutomatic: car.isAutomatic,
      engine: car.engine,
      numberOfDoors: car.numberOfDoors,
    });
    history.push("/cars");
  };

  const handleResetForm = () => {
    setCar({
      brand: "",
      model: "",
      year: 2022,
      maxSpeed: 0,
      isAutomatic: false,
      engine: "",
      numberOfDoors: 0,
    });
  };

  return (
    <div>
      <h1>Add Car</h1>
      <form onSubmit={handleAddCar}>
        <label htmlFor="brand">Brand:</label>
        <input
          id="brand"
          type="text"
          value={car.brand}
          onChange={(e) => setCar({ ...car, brand: e.target.value })}
        ></input>
        <br />
        <label htmlFor="model">Model:</label>
        <input
          id="model"
          type="text"
          value={car.model}
          onChange={(e) => setCar({ ...car, model: e.target.value })}
        ></input>
        <br />
        <label htmlFor="year">Year:</label>
        <input
          id="year"
          type="number"
          max="2022"
          min="1990"
          value={car.year}
          onChange={(e) => setCar({ ...car, year: e.target.value })}
        ></input>
        <br />
        <label htmlFor="maxSpeed">Max Speed:</label>
        <input
          id="maxSpeed"
          type="number"
          value={car.maxSpeed}
          onChange={(e) => setCar({ ...car, maxSpeed: e.target.value })}
        ></input>

        <br />
        <label htmlFor="isAutomatic">Automatic:</label>
        <input
          id="isAutomatic"
          type="checkbox"
          value={car.isAutomatic}
          onChange={(e) => setCar({ ...car, isAutomatic: true })}
        ></input>
        <br />

        <label htmlFor="diesel">Diesel</label>
        <input
          id="diesel"
          name="engine"
          type="radio"
          value="diesel"
          onChange={(e) => setCar({ ...car, engine: "diesel" })}
        ></input>
        <br />
        <label htmlFor="petrol">Petrol</label>
        <input
          id="petrol"
          name="engine"
          type="radio"
          value="petrol"
          onChange={(e) => setCar({ ...car, engine: "petrol" })}
        ></input>
        <br />
        <label htmlFor="electric">Electric</label>
        <input
          id="electric"
          name="engine"
          type="radio"
          value="electric"
          onChange={(e) => setCar({ ...car, engine: "electric" })}
        ></input>
        <br />
        <label htmlFor="hybrid">Hybrid</label>
        <input
          id="hybrid"
          name="engine"
          type="radio"
          value="hybrid"
          onChange={(e) => setCar({ ...car, engine: "hybrid" })}
        ></input>
        <br />

        <label htmlFor="numberOfDoors">Doors:</label>
        <input
          id="numberOfDoors"
          type="number"
          value={car.numberOfDoors}
          onChange={(e) => setCar({ ...car, numberOfDoors: e.target.value })}
        ></input>
        <br />
        <br />
        <button>Add Car</button>
      </form>
        <br />
        <button onClick={handleResetForm}>Reset Form</button>
    </div>
  );
};
