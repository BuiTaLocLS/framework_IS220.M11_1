import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
      <Header />

      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          {/* <Route path="/user/:id">
          <DetailUser />
        </Route> */}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
