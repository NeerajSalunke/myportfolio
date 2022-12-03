import logo from './logo.svg';
import './App.css';
import Navbar from './MyComponents/Navbar';
import Home from './MyComponents/Home';
import About from './MyComponents/About';
import Projects from './MyComponents/Projects';
import Blogs from './MyComponents/Blogs';
// import Resume from './MyComponents/Resume';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


function App() {
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
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
          <Route exact path="/blogs" render={()=>{
            return(
              <>
                  <Blogs/>
              </>
            )
          }}>
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
