import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Resume from './pages/resume/Resume';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './pages/contact/Contact';


function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
