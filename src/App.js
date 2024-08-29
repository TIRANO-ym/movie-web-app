import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./App.css"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    {/* <Router> */}
      <div className="header">
        <a href="/movie-web-app/">
          <img src={`${process.env.PUBLIC_URL}/image/logo_movie.png`}/>
        </a>
      </div>
      <Switch>
        <Route path="/movie/:id" element={<Detail/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Switch>
    </Router>
  );
}

export default App;
