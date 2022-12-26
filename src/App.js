import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { AppCars } from "./components/AppCars";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/"> Cars </Link>
        </nav>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/cars" />;
            }}
          >
            <AppCars />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
