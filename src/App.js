import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import { carService } from "./services/CarService";
import { AddCar } from "./components/AddCar";
import { AppCars } from "./components/AppCars";

export const CarsContext = createContext(null);

function App() {
  const [cars, setCars] = useState([]);

  const handleGetCars = async () => {
    const { data } = await carService.getAll();
    setCars(data);
  };

  useEffect(() => {
    handleGetCars();
  }, [cars]);

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/cars"> Cars </Link>
            <Link to="add"> Add </Link>
            <hr />
          </nav>
        </header>
        <Switch>
          <Route
            exact
            path="/cars"
            render={() => {
              return <Redirect to="/" />;
            }}
          >
            <CarsContext.Provider value={cars}>
              <AppCars />
            </CarsContext.Provider>
          </Route>
          <Route path="/add">
            <AddCar />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
