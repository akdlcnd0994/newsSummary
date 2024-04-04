import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home"
import MobileHome from "./routes/MobileHome";
import {BrowserView, MobileView} from 'react-device-detect'



function App() {

  return (
    <Router>
      <Switch>
        <Route path="/">
          <BrowserView>
            <Home />
          </BrowserView>
          <MobileView>
            <MobileHome />
          </MobileView>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
