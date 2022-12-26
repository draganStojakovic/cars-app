import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { AppCars } from "./components/AppCars";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/cars"> Cars </Link>
        </nav>
        <Switch>
          <Route path="/cars">
            <AppCars />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
