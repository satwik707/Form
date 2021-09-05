import "./App.css";
import Form from "./Form";
import {BrowserRouter as Router ,Route ,Switch} from 'react-router-dom'
import RandomPage from "./RandomPage";
const App = () => {

return (
  <Router>
    <Switch>
          <Route exact path="/">
              <Form></Form>
          </Route>
          <Route exact path="/random">
              <RandomPage/>
          </Route>
    </Switch>
  </Router>
)
  
};

export default App;
