import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id" element={<Detail/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Switch>
    </Router>
  );
}

export default App;
