import logo from './logo.svg';
import './App.css';
import Navbar from './MyComponents/Navbar';
import Home from './MyComponents/Home';
import About from './MyComponents/About';
import Projects from './MyComponents/Projects';
// import Resume from './MyComponents/Resume';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


function App() {
  return (
    <>
    <Router >
      <Navbar/>
      <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
                  <Home />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about" render={()=>{
            return(
              <>
                  <About />
              </>
            )
          }}>
          </Route>
          <Route exact path="/projects" render={()=>{
            return(
              <>
                  <Projects/>
              </>
            )
          }}>
          </Route>
          {/* <Route exact path="/resume" render={()=>{
            return(
              <>
                  <Resume/>
              </>
            )
          }}>
          </Route> */}
        </Switch>
    </Router>
    </>
  );
}

export default App;
