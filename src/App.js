import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";

const AppRoutes = () => {
  const routing = useRoutes(routes);
  return routing;
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
