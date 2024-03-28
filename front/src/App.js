import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./routes/news"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <News />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
